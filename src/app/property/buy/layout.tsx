interface Props {
  children: any;
  searchParams: any;
}
import dynamic from "next/dynamic";

const Filter = dynamic(() => import("@/blocks/molecules/filter"));

import Exclusive from "@/blocks/sections/exclusive";
// import Filter from "@/blocks/molecules/filter";
const Layout: React.FC<Props> = ({ children, searchParams }) => (
  <>
    <Filter />
    {/* <Exclusive type="buy" /> */}
    {children}
  </>
);
export default Layout;
