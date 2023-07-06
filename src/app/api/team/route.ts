import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET() {
  const buy_properties = await strapi.find("teams", {
    populate: ["*", "Profile"],
  });
  return NextResponse.json(buy_properties.data);
}
