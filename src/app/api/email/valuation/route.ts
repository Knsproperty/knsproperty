const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { fullName, email, phoneNumber, propertyType, propertyAddress } =
    await req.json();

  const htmlTemplate = `
<h3>Dear ${fullName}, welcome to our company!</h3>
<p>We have received a booking request from you with the following details:</p>
<ul>
  <li>Email: ${email}</li>
  <li>Phone: ${phoneNumber}</li>
  <li>Property Type: ${propertyType}</li>
  <li>Property Address: ${propertyAddress}</li>
</ul>
<p>Thank you for choosing our services. We will get back to you soon.</p>
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
          Subject: `${fullName} Good you Sir`,
          TextPart:
            "Dear Recipient Name, welcome to Mailjet! May the delivery force be with you!",
          HTMLPart: htmlTemplate,
        },
      ],
    });
    // const resutl = await request.json();
    return NextResponse.json({ message: "send" });
  } catch (err) {
    return NextResponse.error();
  }
}
