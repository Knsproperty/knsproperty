interface Props {
    children: any
}
import Exclusive from "@/blocks/sections/exclusive"
const Layout: React.FC<Props> = ({ children }) => (
    <>
        <Exclusive type="rent" />
        {children}
    </>
)
export default Layout