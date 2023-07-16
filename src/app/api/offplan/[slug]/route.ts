import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: any) {
  const slug = params.slug;
  const offplan_properties = await strapi.find<any>("off-plans", {
    populate,
    filters: {
      slug: slug,
    },
  });
  let PropertyType = offplan_properties.data[0].attributes.Property_Type;
  const related_products = await strapi.find("off-plans", {
    populate,
    filters: {
      Property_Type: PropertyType,
    },
  });
  return NextResponse.json({
    data: offplan_properties.data,
    related_products: related_products,
  });
}
