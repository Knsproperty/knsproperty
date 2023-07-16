import Related_products from "@/blocks/sections/related_products";
import Template from "@/blocks/templates/detailed";
export default async function page({ params }: any) {
  const { slug } = params;
  const [{ attributes, related_products }] = await getProperty(slug);
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rent/${slug}`, {
    next: { revalidate: 60 },
  });
  return await res.json();
};
