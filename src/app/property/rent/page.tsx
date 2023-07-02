import Container from "@/blocks/atoms/container";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";
import strapi, { populate } from "@/utils/strapi";
export default async function Buy({ searchParams }: any) {
    const buy_properties = await strapi.find<any>("rent-properties", {
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
                            property_type: 'rent',
                            slug: attributes.slug,
                            title: attributes.Short_Address,
                            discription: attributes.Location,
                            price: attributes.Price,
                            bed: attributes.Bedrooms,
                            bathroom: attributes.Bathrooms,
                            area: attributes.Area,
                            media: ["/propery.jpg", "/propery.jpg", "/propery.jpg"],
                        }}
                    />
                ))}





            </Container>
        </div>
    );
}
