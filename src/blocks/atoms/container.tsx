interface Props {
    children: any
}

const Container: React.FC<Props> = ({ children }) => {
    return (
        <div id="container" className="max-w-[1320px] mx-auto px-5 lg:px-0">
            {children}
        </div>
    )
}
export default Container