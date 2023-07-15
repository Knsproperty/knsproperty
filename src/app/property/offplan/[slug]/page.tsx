import Template from "@/blocks/templates/detailed";
export default async function page({ params }: any) {
  const { slug } = params;
  const [{ attributes }] = await getProperty(slug);
  return (
    <Template
      {...{
        type: "offplan",
        area: attributes.Area,
        price: attributes.Price,
        bed: attributes.Bedrooms,
        parking: attributes.Parking,
        bath: attributes.Bathrooms,
        geopoint: attributes.Geopoints,
        description: attributes.Description,
        short_address: attributes.Short_Address,
        images: [...attributes.Cron_Images.data.map((e: any) => e.url)],
      }}
    />
  );
}

// fetcher component
const getProperty = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/offplan/${slug}`,
    {
      cache: "force-cache",
    }
  );
  return await res.json();
};
