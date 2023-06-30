import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";

export async function GET() {
  const rent_properties = await strapi.find("rent-properties", { populate });
  return NextResponse.json(rent_properties.data);
}
