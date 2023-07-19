import Template from "@/blocks/templates/property";
import strapi, { populate } from "@/utils/strapi";
export default async function page({ params }: any) {
  const { slug } = params;
  const [{ attributes }] = await getProperty(slug);

  return (
    <>
      <Template
        {...{
          type: "buy",
          area: attributes.Area,
          price: attributes.Price,
          bed: attributes.Bedrooms,
          parking: attributes.Parking,
          bath: attributes.Bathrooms,
          geopoint: attributes.Geopoints,
          description: attributes.Description,
          property_type: attributes.Property_Type,
          short_address: attributes.Short_Address,
          images: [...attributes.Cron_Images.data.map((e: any) => e.url)],
        }}
      />
    </>
  );
}
// fetcher component
const getProperty = async (slug: string) => {
  const buy_properties = await strapi.find<any>("buy-properties", {
    populate: populate,
    filters: {
      slug: slug,
    },
  });
  return buy_properties.data;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/buy/${slug}`, {
  //   next: { revalidate: 60 },
  // });
  // return await res.json();
};

export async function generateStaticParams() {
  const slugs = await strapi.find<any>("buy-properties", {
    fields: ["id", "slug"],
  });

  return slugs.data.map((post: any) => ({
    slug: post.attributes.slug,
  }));
}

export const revalidate = 43200000;
