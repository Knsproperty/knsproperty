
interface Props {
    children: any
}

export default function BtnHoverOutline({ children }: Props) {
    return (
        <button className="hover:bg-primary-- py-3.5 group   bg-white-   font-semibold text-sm rounded-full capitalize px-3.5  ">{children}</button>
    )
}