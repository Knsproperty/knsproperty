const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name } = await req.json();

  try {
    const request = await mailjet.post("contact").request({
      Email: email,
      IsExcludedFromCampaigns: true,
      Name: name,
    });

    // const resutl = await request.json();
    return NextResponse.json({ message: "contact added" });
  } catch (err) {
    return NextResponse.error();
  }
}
