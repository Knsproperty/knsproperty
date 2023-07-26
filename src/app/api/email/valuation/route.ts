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
    <style>
      /* Define your CSS styles here */
      h3 {
        color: #333;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
      }
    </style>
    <h3>Booking Request from ${fullName}</h3>
    <p>The user with the following details has made a booking request:</p>
    <ul>
      <li>Email: ${email}</li>
      <li>Phone: ${phoneNumber}</li>
      <li>Property Type: ${propertyType}</li>
      <li>Property Address: ${propertyAddress}</li>
    </ul>
    <p>Please get in touch with the user soon.</p>
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.NEXT_PUBLIC_EMAIL,
            Name: "Mailjet Sender",
          },
          To: [
            {
              Email: process.env.NEXT_PUBLIC_EMAIL,
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
