interface Props {
    children: any
}
import Exclusive from "@/blocks/sections/exclusive"
import Filter from "@/blocks/molecules/filter"
const Layout: React.FC<Props> = ({ children }) => (
    <>
        <Filter />
        {/* <Exclusive type="buy" /> */}
        {children}
    </>
)
export default Layout