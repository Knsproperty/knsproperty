import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: any) {
  const slug = params.slug;
  const offplan_properties = await strapi.find("off-plans", {
    populate,
    filters: {
      slug: slug,
    },
  });
  return NextResponse.json(offplan_properties.data);
}
