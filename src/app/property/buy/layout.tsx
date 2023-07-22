interface Props {
  children: any;
}
import dynamic from "next/dynamic";
import PropertyHalfPage from "@/blocks/molecules/property-half-page";
const Filter = dynamic(() => import("@/blocks/molecules/filter"), { ssr: false });
const Layout: React.FC<Props> = ({ children }) => (
  <>
    <PropertyHalfPage title="Start Buying Properties" />
    <Filter />
    {children}
  </>
);
export default Layout;
