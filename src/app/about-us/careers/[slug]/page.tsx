import Container from "@/blocks/atoms/container";
import DataNotFound from "@/blocks/atoms/data-not-found";
import React from "react";

export default async function page({ params }: any) {
  const job = await getJob(params.slug);
  return (
    <div>
      {JSON.stringify(job)}
      <Container>
        {/* {buy_properties?.data?.map(({ attributes }: any) => (
          <PropertyDetailed
            {...{
              property_type: "buy",
              slug: attributes.slug,
              title: attributes.Short_Address,
              discription: attributes.Location,
              price: attributes.Price,
              bed: attributes.Bedrooms,
              bathroom: attributes.Bathrooms,
              area: attributes.Area,
              media: ImageUrlExtractor(attributes),
            }}
          />
        ))} */}
      </Container>
    </div>
  );
}
const getJob = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/job/${slug}`, {
    cache: "force-cache",
  });
  return await res.json();
};
