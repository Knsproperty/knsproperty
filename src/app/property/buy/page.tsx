import Container from "@/blocks/atoms/container";
import strapi, { populate } from "@/utils/strapi";
import DataNotFound from "@/blocks/atoms/data-not-found";
import ImageUrlExtractor from "@/lib/imageUrlExtractor";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";
import { Main } from "@/types/main";

export default async function Buy({ searchParams }: any) {
  const data = await fetch("http://localhost:3000/api/getproperties", {
    next: { revalidate: 3600 },
  });
  const properties: Main[] = await data.json();
  // const buy_properties = await strapi.find<any>("buy-properties", {
  //   populate: populate,
  //   filters: {
  //     ...(searchParams.max &&
  //       searchParams.min && {
  //       Price: {
  //         $lte: searchParams.max,
  //         $gte: searchParams.min,
  //       },
  //     }),
  //     ...(searchParams.type && { Property_Type: searchParams.type }),
  //     ...(searchParams.bedrooms && { Bedrooms: searchParams.bedrooms }),
  //     ...(searchParams.query && {
  //       Name: {
  //         $containsi: searchParams.query,
  //       },
  //     }),
  //   },
  //   pagination: {
  //     page: searchParams.page ?? 1,
  //     pageSize: 20,
  //   },
  // });

  return (
    <div>
      <Container>
        {/* {JSON.stringify(properties)} */}
        {/* {buy_properties?.data.length == 0 && <DataNotFound />} */}

        {properties.map(({ attributes }: any) => (
          <>
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
                media: [attributes.Images.data[0].url, attributes.Images.data[1].url, attributes.Images.data[2].url],
              }}
            />
          </>
        ))}
      </Container>
    </div>
  );
}
