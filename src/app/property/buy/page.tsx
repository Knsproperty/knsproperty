import Filter from "@/blocks/molecules/filter";
import Container from "@/blocks/atoms/container";
import PropertyDetailed from "@/blocks/molecules/cards/property-detailed";

export default async function Buy() {
    const data = await getData();

    return (
        <div>
            <Filter />
            <Container>
                {data.map(({ attributes }: any) => <PropertyDetailed
                    {...{
                        slug: attributes.slug,
                        title: attributes.Short_Address,
                        discription: attributes.Location,
                        price: attributes.Price,
                        bed: attributes.Bedrooms,
                        bathroom: attributes.Bathrooms,
                        area: attributes.Area,
                        media: ['/propery.jpg', '/propery.jpg', '/propery.jpg']
                    }}
                />)}
            </Container>



        </div>
    )
}

async function getData() {
    let buy_properties = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/buy`, {
        cache: "force-cache",
    });
    return await buy_properties.json();
}
