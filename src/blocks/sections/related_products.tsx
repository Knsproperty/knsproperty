interface Props {
  type: "rent-properties" | "buy-properties" | "off-plans";
  property_type: string;
}

import React from "react";
import strapi, { populate } from "@/utils/strapi";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";

export default async function Related_products({ type, property_type }: Props) {
  const related_products = await strapi.find<any>(type, {
    populate,
    filters: {
      Property_Type: property_type,
    },
    pagination: {
      start: 0,
      limit: 3,
    },
  });
  return (
    <div>
      <hr className="opacity-10" />
      <h2 className="xl:text-xl text-lg font-semibold text-secondary mt-5 mb-2.5 px-2">
        Related Properties
      </h2>
      <div>
        {related_products.data.map(({ attributes }: any) => (
          <PropertyDetailed
            {...{
              property_type: "buy",
              slug: attributes.slug,
              area: attributes.Area,
              price: attributes.Price,
              bed: attributes.Bedrooms,
              parking: attributes.Parking,
              bathroom: attributes.Bathrooms,
              title: attributes.Short_Address,
              discription: attributes.Location,
              media: [
                attributes.Cron_Images.data[0].url,
                attributes.Cron_Images.data[1].url,
                attributes.Cron_Images.data[2].url,
              ],
            }}
          />
        ))}
      </div>
    </div>
  );
}

export const fetchCache = "force-cache";
