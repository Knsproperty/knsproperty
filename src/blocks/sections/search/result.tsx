import Link from "next/link";

const Results = ({ data, active }: any) => {
  // when data is unavailable;
  if (!data || data?.length == 0) {
    return null;
  }

  return (
    <section
      id="result-section"
      className="bg-white w-full absolute shadow-md rounded-md  mt-2 overflow-y-auto max-h-[400px]"
    >
      <div className="px-5 py-5 flex items-center justify-between">
        <p className="text-sm  text-secondary font-medium">
          Results({data?.length})
        </p>
        <Link
          className="text-sm text-secondary font-medium"
          href="/property/buy"
        >
          show all
        </Link>
      </div>
      <ul className="grid gap-2">
        {data?.map((property: any, index: number) => (
          <Property
            key={index}
            name={property.Name}
            place={property.Location}
            href={`/property/${active}/${property.slug}`}
          />
        ))}
      </ul>
    </section>
  );
};

export default Results;

interface Property {
  name: string;
  place: string;
  href: string;
}
const Property: React.FC<Property> = ({ name, place, href }) => (
  <Link href={href}>
    <li className="bg-lightgray py-1 px-5">
      <h3 className="text-sm">{name}</h3>
      <p className="font-light text-sm">{place}</p>
    </li>
  </Link>
);
