import Filter from "@/blocks/molecules/filter";

export default async function Buy() {
    const data = await getData();

    return (
        <div>

            <Filter />


            {/* {JSON.stringify(Object.keys(data[0].attributes))} */}

            {/* {data.map((ele: any) => <div>{ele.id}</div>)} */}

        </div>
    )
}

async function getData() {
    let buy_properties = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/buy`, {
        cache: "force-cache",
    });
    return await buy_properties.json();
}
