import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: any) {
  const slug = params.slug;
  const buy_properties = await strapi.find<any>("rent-properties", {
    populate,
    filters: {
      slug: slug,
    },
  });

  return NextResponse.json(buy_properties.data);
}
