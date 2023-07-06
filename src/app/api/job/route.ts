import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET() {
  const jobs = await strapi.find("jobs", {
    populate,
  });
  return NextResponse.json(jobs.data);
}
