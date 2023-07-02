import Container from "@/blocks/atoms/container";
import strapi, { populate } from "@/utils/strapi";
import ImageUrlExtractor from "@/lib/imageUrlExtractor";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";

export default async function Buy({ searchParams }: any) {
  const buy_properties = await strapi.find<any>("buy-properties", {
    populate: populate,
    filters: {
      ...(searchParams.max &&
        searchParams.min && {
          Price: {
            $lte: searchParams.max,
            $gte: searchParams.min,
          },
        }),
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
      {JSON.stringify(buy_properties.meta)}
      <Container>
        {buy_properties?.data?.map(({ attributes }: any) => (
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
        ))}
      </Container>
    </div>
  );
}
