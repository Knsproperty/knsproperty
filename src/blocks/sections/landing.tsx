interface Props {
    children: any,
    background: string
}

import Parallax from "../animation/parallex"

const LandingSection: React.FC<Props> = ({ children, background }) => {
    return (
        <section style={{ backgroundImage: background }} className={`h-[80vh] bg-center bg-cover`}>
            <div className="w-full h-full _center  bg-[#00000047] backdrop-brightness-75">
                <Parallax>{children}</Parallax>
            </div>
        </section>
    )
}
export default LandingSection