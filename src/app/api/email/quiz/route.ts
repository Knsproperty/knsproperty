const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { name, email, mobile, first, second, min, max } = await req.json();

  const htmlTemplate = `
    <html>
    <head>
      <style>
        /* Define your CSS styles here */
        body {
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        h3 {
          color: #0066cc;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <h3>Dear Company, a quiz submission has been received!</h3>
      <p>Here are the quiz details:</p>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${mobile}</li>
        <li>Selected Property Type: ${first}</li>
        <li>Selected Property Address: ${second}</li>
        <li>Minimum Price Range: ${min}</li>
        <li>Maximum Price Range: ${max}</li>
      </ul>
      <p>Please follow up with the participant as soon as possible.</p>
    </body>
    </html>
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
          Subject: `${name} Good you Sir`,
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
