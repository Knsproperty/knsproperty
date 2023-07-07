interface Props {
  type: "buy" | "rent";
}

import Slider from "../molecules/slider";
import Container from "../atoms/container";
import ImageUrlExtractor from "@/lib/imageUrlExtractor";
import BuyExclusiveCard from "../molecules/cards/exclusive";

const Exclusive: React.FC<Props> = async ({ type }) => {
  const __meta = await getExlusiveProperty(type);

  return (
    <Container>
      <div>
        <h2 className="text-xl  font-medium pl-5 mt-5 mb-3">
          Exclusive Listings
        </h2>
        <div className="2xl:max-w-[1320px] xl:max-w-[1320px] lg:max-w-[80vw] md:max-w-[80vw] max-w-[100vw] ">
          <Slider>
            {[...__meta, ...__meta].map(
              ({ attributes }: any, index: number) => (
                <BuyExclusiveCard
                  {...{
                    property_type: type,
                    title: attributes.Name,
                    price: attributes.Price,
                    slug: attributes.slug,
                    image: ImageUrlExtractor(attributes)[0],
                  }}
                />
              )
            )}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Exclusive;

const getExlusiveProperty = async (type: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/exclusive/${type}`,
    { cache: "force-cache" }
  );
  return await res.json();
};
