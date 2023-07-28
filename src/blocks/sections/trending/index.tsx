interface Props {
  title: string;
  type: "buy" | "rent" | "offplan";
}
import List from "./list";
import Link from "next/link";
import Container from "../../atoms/container";
import strapi, { populate } from "@/utils/strapi";

const Trendings: React.FC<Props> = async ({ title, type }) => {
  const buy_properties = await strapi.find<any>(
    type == "buy" ? "buy-properties" : "rent-properties",
    {
      populate: populate,
      filters: {
        Exclusive: true,
      },
    }
  );

  // hide if there no exclusive properties
  if (buy_properties.data.length == 0) {
    return null;
  }
  let data = buy_properties.data;

  return (
    <section className="bg-gray">
      <Container>
        <div className=" grid pt-10 pb-10">
          <div className="flex items-center justify-between px-3 mb-5">
            <div>
              <h2 className="lg:text-3xl text-xl text-primary font-bold">
                {title}
              </h2>
            </div>
            <Link
              href={`/property/${type}`}
              className="text-sm  hover:underline bg-primary px-5 py-2 rounded-md text-white"
            >
              Explore more
            </Link>
          </div>
          <List {...{ data, type }} />
        </div>
      </Container>
    </section>
  );
};

export default Trendings;

export const fetchCache = "force-cache";
