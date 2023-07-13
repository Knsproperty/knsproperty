import Container from "@/blocks/atoms/container";
import strapi, { populate } from "@/utils/strapi";
import DataNotFound from "@/blocks/atoms/data-not-found";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";

export default async function Buy({ searchParams }: any) {
    const { data } = await strapi.find<any>("rent-properties", {
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

                {data.length == 0 && <DataNotFound />}


                {data?.map(({ attributes }: any) => (
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




const ImageUrlExtractor = (attributes: any) => {
    const test_image_url = "https://ksnpropertiesstrapi-production.up.railway.app"
    const preview_image_url = `${test_image_url}${attributes.Preview_Image.data.attributes.formats.small.url}`;
    const images: string[] = attributes.Images.data.map((_: any) => `${test_image_url}${_.attributes.formats.small.url}`)
    return [preview_image_url, ...images,]
}