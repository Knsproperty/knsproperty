interface Props {
    children: any
}
import Filter from "@/blocks/molecules/filter"
import Exclusive from "@/blocks/sections/exclusive"
const Layout: React.FC<Props> = ({ children }) => (
    <>
        <Filter />
        <Exclusive type="rent" />
        {children}
    </>
)
export default Layout