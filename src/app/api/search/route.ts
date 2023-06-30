import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";

export async function GET(req: any): Promise<any> {
  const { searchParams } = new URL(req.url);

  const filters: any = {};

  const filterParams: string[] = [
    "sort",
    "type",
    "min",
    "max",
    "bedrooms",
    "query",
  ];

  filterParams.forEach((param: string) => {
    const value: string | null = searchParams.get(param);
    if (value !== null && value !== undefined) {
      filters[param] = value;
    }
  });

  const buy_properties = await strapi.find("buy-properties", {
    populate,
    filters: {
      ...(filters.query && {
        Name: {
          $containsi: filters.query,
        },
      }),
    },
  });

  return NextResponse.json(buy_properties.data);
}
