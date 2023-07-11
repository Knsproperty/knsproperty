interface Props {
    children: any
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div id="container" className="max-w-[1320px] lg:mx-auto">
            {children}
        </div>
    )
}
export default Container