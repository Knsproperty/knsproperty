import Container from "@/blocks/atoms/container";
import strapi, { populate } from "@/utils/strapi";
import DataNotFound from "@/blocks/atoms/data-not-found";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";

export default async function Buy({ searchParams }: any) {
  const { data } = await strapi.find<any>("buy-properties", {
    populate: populate,
    filters: {
      $or: [
        ...(searchParams.max && searchParams.min
          ? [{ Price: { $lte: searchParams.max, $gte: searchParams.min } }]
          : []),
        ...(searchParams.max && !searchParams.min
          ? [{ Price: { $lte: searchParams.max } }]
          : []),
        ...(searchParams.min && !searchParams.max
          ? [{ Price: { $gte: searchParams.min } }]
          : []),
      ],
      ...(searchParams.type && { Property_Type: searchParams.type }),
      ...(searchParams.bedrooms && { Bedrooms: searchParams.bedrooms }),
      ...(searchParams.query && {
        Name: {
          $containsi: searchParams.query,
        },
      }),
    },
    pagination: {
      page: searchParams.page ?? 1,
      pageSize: 20,
    },
  });

  return (
    <div>
      <Container>

        <div className="mt-5 pl-5">
          <h3 className="text-2xl text-secondary font-semibold mb-1">Search Result</h3>
          <p className="text-sm font-light">Properties for sale  ({data.length})</p>
        </div>

        {data.length == 0 && <DataNotFound />}

        {data.map(({ attributes }: any) => (
          <PropertyDetailed
            {...{
              property_type: "buy",
              slug: attributes.slug,
              area: attributes.Area,
              price: attributes.Price,
              bed: attributes.Bedrooms,
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
      </Container>
    </div>
  );
}
