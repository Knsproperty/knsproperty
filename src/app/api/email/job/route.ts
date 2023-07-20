const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { Name, email, number, Cv, job } = await req.json();

  const companySubject = "New Job Application"; // Subject of the email sent
  const htmlTemplateCompany = `
    <h3>New Job Application</h3>
    <p>Applicant Details:</p>
    <ul>
      <li>Full Name: ${Name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${number}</li>
      <li>Resume:<a href="${Cv}">Click Here</a> </li>
      <li>Job Id :${job} </li>
    </ul>
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "virenderkumar23435@gmail.com",
            Name: "Mailjet Sender",
          },
          To: [
            {
              Email: "virenderkumar23435@gmail.com",
              Name: "Recipient Name",
            },
          ],
          Subject: companySubject,
          TextPart:
            "Dear Recipient Name, welcome to Mailjet! May the delivery force be with you!",
          HTMLPart: htmlTemplateCompany,
        },
      ],
    });
    // const resutl = await request.json();
    return NextResponse.json({ message: "send" });
  } catch (err) {
    return NextResponse.error();
  }
}
