interface Props {
    children: any,
    background: string
}
const LandingSection: React.FC<Props> = ({ children, background }) => {
    return (
        <section style={{ backgroundImage: background }} className={`h-[80vh] bg-center`}>
            <div className="w-full h-full _center  bg-[#00000047] backdrop-brightness-75">
                {children}
            </div>
        </section>
    )
}
export default LandingSection