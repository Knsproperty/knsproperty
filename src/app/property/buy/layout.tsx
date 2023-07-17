interface Props {
  children: any;
}
import dynamic from "next/dynamic";
const Filter = dynamic(() => import("@/blocks/molecules/filter"), { ssr: false });
const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Filter />
    {children}
  </>
);
export default Layout;
