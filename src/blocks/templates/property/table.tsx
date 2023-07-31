interface Props {
  bed: number;
  type: string;
  bath: number;
  parking: number;
  area: number;
  property_type: string;
}

const property_types = {
  AP: "Apartment",
  VH: "Villa",
  FA: "Factory",
  TH: "Townhouse",
  OF: "Office",
};

const types: any = {
  buy: "for sell",
  rent: "for rent",
  offplan: "offplan",
};

import addCommasToNumber from "@/lib/addCommasToNumbers";

const Table: React.FC<Props> = ({
  type,
  property_type,
  bed,
  bath,
  parking,
  area,
}) => {
  return (
    <div className="grid lg:grid-cols-2  mb-3 gap-5">
      <Col>
        <Row
          name="Property type"
          value={(property_types as any)[property_type]}
        />
        <Row name="Purpose" value={types[type]} />
        <Row name="Bedroom(s)" value={bed} />
      </Col>

      <Col>
        <Row name="Bath(s)" value={bath} />
        <Row name="Parking" value={parking} />
        <Row name="Area Size" value={addCommasToNumber(area)} />
      </Col>
    </div>
  );
};
export default Table;

const Row = ({ name, value }: { name: string; value: string | number }) => (
  <div className="flex items-center justify-between odd:border-y px-5 border-lightgreen md:text-md text-sm">
    <span className="py-2">{name}</span>
    <span className="py-2 capitalize ">{value}</span>
  </div>
);

const Col = ({ children }: any) => (
  <div className="border-x border-lightgreen rounded-md overflow-hidden">
    {children}
  </div>
);
