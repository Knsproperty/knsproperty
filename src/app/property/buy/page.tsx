import Container from "@/blocks/atoms/container";
import strapi, { populate } from "@/utils/strapi";
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
  });

  return (
    <div>
      <Container>
        {buy_properties?.data?.map(({ attributes }: any) => (
          <PropertyDetailed
            {...{
              property_type: 'buy',
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

const ImageUrlExtractor = (attributes: any) => {
  const test_image_url = "https://ksnpropertiesstrapi-production.up.railway.app"
  const preview_image_url = `${test_image_url}${attributes.Preview_Image.data.attributes.formats.small.url}`;
  const images: string[] = attributes.Images.data.map((_: any) => `${test_image_url}${_.attributes.formats.small.url}`)
  return [preview_image_url, ...images,]
}