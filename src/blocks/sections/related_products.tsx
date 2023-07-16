import strapi, { populate } from "@/utils/strapi";
import React from "react";
import PropertyCard from "../molecules/cards/property";

export default async function Related_products({
  type,
  property_type,
}: {
  type: "rent-properties" | "buy-properties" | "off-plans";
  property_type: string;
}) {
  const related_products = await strapi.find<any>(type, {
    populate,
    filters: {
      Property_Type: property_type,
    },
    pagination: {
      start: 0,
      limit: 5,
    },
  });
  return (
    <div>
      {JSON.stringify(related_products.data)}
      {/* {related_products.data.map(({ attributes }: any, index: number) => (
        <PropertyCard
          key={index}
          {...{
            type: "buy",
            area: attributes.Area,
            slug: attributes.slug,
            price: attributes.Price,
            bedroom: attributes.Bedrooms,
            bathroom: attributes.Bathrooms,
            title: attributes.Short_Address,
            description: attributes.Location,
            image: attributes.Cron_Images?.data[0].url,
          }}
        />
      ))} */}
    </div>
  );
}
