interface Props {
    text: string
}
const TextFormatter: React.FC<Props> = ({ text }) => {
    const formattedText = text.replace(/(?:\r\n|\r|\n)/g, '<br/>')
    return (
        <p className="font-light text-sm pb-3" dangerouslySetInnerHTML={{ __html: formattedText }} />
    )
}
export default TextFormatter