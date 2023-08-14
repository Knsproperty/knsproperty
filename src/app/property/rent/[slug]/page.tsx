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
          images:
            attributes.Images.data == null
              ? [...attributes.Cron_Images?.data?.map((e: any) => e.url)]
              : [
                  attributes.Preview_Image.data?.attributes?.url,
                  ...attributes.Images.data?.map((e: any) => e.attributes.url),
                ],
        }}
      />
      <Related_products
        property_type={attributes.Property_Type}
        type="rent-properties"
      />
    </>
  );
}

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const [{ attributes }] = await getProperty(slug);
  return {
    title: attributes.Short_Address,
    description: attributes.Description,
    keywords: [
      "Dubai properties",
      "real estate",
      "buy property in Dubai",
      "rent property in Dubai",
      "investment properties",
    ],
    authors: [{ name: "", url: "" }],
    abstract: "",
    publisher: "K&N PROPERTIES",
  };
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
