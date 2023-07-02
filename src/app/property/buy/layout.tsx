interface Props {
    children: any
}
import Filter from "@/blocks/molecules/filter"
const Layout: React.FC<Props> = ({ children }) => (
    <>
        <Filter />
        {children}
    </>
)
export default Layout