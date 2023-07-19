const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { name, email, phone, selectedDate, selectedHour } = await req.json();
  const htmlTemplate = `
      <h3>Dear {{name}}, welcome to our company!</h3>
      <p>We have received a booking request from you with the following details:</p>
      <ul>
        <li>Email: {{email}}</li>
        <li>Phone: {{phone}}</li>
        <li>Selected Date: {{selectedDate}}</li>
        <li>Selected Hour: {{selectedHour}}</li>
      </ul>
      <p>Thank you for choosing our services. We will get back to you soon.</p>
    `;

  // Replace the placeholders with actual form data in the email template
  const personalizedHTML = htmlTemplate
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{phone}}", phone)
    .replace("{{selectedDate}}", selectedDate)
    .replace("{{selectedHour}}", selectedHour);

  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "virenderkumar23435@gmail.com",
            Name: "Mailjet Pilot",
          },
          To: [
            {
              Email: "virenderkumar23435@gmail.com",
              Name: "passenger 1",
            },
          ],
          Subject: `${name} Good you SIr`,
          TextPart:
            "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
          HTMLPart: personalizedHTML,
        },
      ],
    });

    // const resutl = await request.json();
    return NextResponse.json({ message: "send" });
  } catch (err) {
    return NextResponse.error();
  }
}
