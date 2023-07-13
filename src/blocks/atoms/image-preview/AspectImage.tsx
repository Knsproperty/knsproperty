import Image from "next/image"
interface Props {
    src: string,
    alt: string,
    rounded?: boolean
}
const AspectImage: React.FC<Props> = ({ src, alt, rounded }) => {
    return (
        <div className={`aspect-w-16 aspect-h-9 ${rounded ? 'rounded-md' : ''} overflow-hidden`}>
            <Image
                src={src}
                alt={alt}
                fill
            />
        </div>
    )
}

export default AspectImage