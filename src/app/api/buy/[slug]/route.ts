import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: any) {
  const slug = params.slug;
  const buy_properties = await strapi.find<any>("buy-properties", {
    populate,
    filters: {
      slug: slug,
    },
  });
  let PropertyType = buy_properties.data[0].attributes.Property_Type;
  const related_products = await strapi.find("buy-properties", {
    populate,
    filters: {
      Property_Type: PropertyType,
    },
  });
  return NextResponse.json({
    data: buy_properties.data,
    related_products: related_products,
  });
}
