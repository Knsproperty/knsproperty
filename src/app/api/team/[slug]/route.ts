import strapi, { populate } from "@/utils/strapi";
import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: any) {
  const slug = params.slug;
  const blog = await strapi.find("teams", {
    populate: ["*", "Profile"],
    filters: {
      slug: slug,
    },
  });
  return NextResponse.json(blog.data);
}
