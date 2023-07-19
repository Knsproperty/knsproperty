import Related_products from "@/blocks/templates/property/related_products";
import Template from "@/blocks/templates/property";
import strapi, { populate } from "@/utils/strapi";
export default async function page({ params }: any) {
  const { slug } = params;
  const [{ attributes }] = await getProperty(slug);
  return (
    <>
      <Template
        {...{
          type: "rent",
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
      <Related_products
        property_type={attributes.Property_Type}
        type="rent-properties"
      />
    </>
  );
}
// fetcher component
const getProperty = async (slug: string) => {
  const rent_properties = await strapi.find<any>("rent-properties", {
    populate: populate,
    filters: {
      slug: slug,
    },
  });
  return rent_properties.data;
};

export async function generateStaticParams() {
  const slugs = await strapi.find<any>("rent-properties", {
    fields: ["id", "slug"],
  });

  return slugs.data.map((post: any) => ({
    slug: post.attributes.slug,
  }));
}

export const revalidate = 43200000;
