interface Props {
  title: string;
  type: "buy" | "rent" | "offplan";
}
import List from "./list";
import Link from "next/link";
import Container from "../../atoms/container";

const Trendings: React.FC<Props> = async ({ title, type }) => {
  const data = await getData(type);

  // hide if there no exclusive properties
  if (data.length == 0) {
    return null;
  }

  return (
    <section
      className="bg-gray">
      <Container>
        <div className=" grid  pt-10 pb-10">
          <div className="flex items-center justify-between px-3 mb-5">
            <div>
              <h2 className="lg:text-2xl text-xl text-primary">{title}</h2>
              <p className="text-sm font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, aut.</p>
            </div>
            <Link
              href={`/property/${type}`}
              className="text-sm text-secondary hover:underline"
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


