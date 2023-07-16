interface Props {
  title: string;
  type: "buy" | "rent" | "offplan";
}
import Link from "next/link";
import Slider from "../molecules/slider";
import Container from "../atoms/container";
import PropertyCard from "../molecules/cards/property";

const Trendings: React.FC<Props> = async ({ title, type }) => {
  const data = await getData(type);

  // hide if there no exclusive properties
  if (data.length == 0) {
    return null;
  }

  return (
    <section>
      <Container>
        <div className=" flex-col pt-10 pb-10">
          <div className="flex items-center justify-between px-6 mb-2">
            <h2 className="lg:text-xl text-xl text-primary">{title}</h2>
            <Link
              href={`/property/${type}`}
              className="text-sm text-secondary hover:underline"
            >
              Explore more
            </Link>
          </div>

          <div className="2xl:max-w-[1320px] xl:max-w-[1320px] max-w-[100vw]">
            <Slider>
              {data.map(({ attributes }: any, index: number) => (
                <PropertyCard
                  key={index}
                  {...{
                    type,
                    area: attributes.Area,
                    slug: attributes.slug,
                    price: attributes.Price,
                    bedroom: attributes.Bedrooms,
                    bathroom: attributes.Bathrooms,
                    title: attributes.Short_Address,
                    description: attributes.Location,
                    image: attributes.Cron_Images?.data[0].url,
                  }}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trendings;

// Exclusive Properties
const getData = async (type: string) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/exclusive/${type}`,
    {
      cache: "force-cache",
    }
  );
  return await data.json();
};
