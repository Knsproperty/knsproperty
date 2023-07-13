import Container from "@/blocks/atoms/container";
import strapi, { populate } from "@/utils/strapi";
import DataNotFound from "@/blocks/atoms/data-not-found";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";

export default async function Buy({ searchParams }: any) {
  const { data } = await strapi.find<any>("rent-properties", {
    populate: populate,
    filters: {
      ...(searchParams.max ||
        (searchParams.min && {
          Price: {
            $lte: searchParams.max ?? 50000000,
            $gte: searchParams.min ?? 0,
          },
        })),
      ...(searchParams.type && { Property_Type: searchParams.type }),
      ...(searchParams.bedrooms && { Bedrooms: searchParams.bedrooms }),
      ...(searchParams.query && {
        Name: {
          $containsi: searchParams.query,
        },
      }),
    },
  });

  return (
    <div>
      <Container>
        {data.length == 0 && <DataNotFound />}

        {data?.map(({ attributes }: any) => (
          <PropertyDetailed
            {...{
              property_type: "rent",
              slug: attributes.slug,
              title: attributes.Short_Address,
              discription: attributes.Location,
              price: attributes.Price,
              bed: attributes.Bedrooms,
              bathroom: attributes.Bathrooms,
              area: attributes.Area,
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
