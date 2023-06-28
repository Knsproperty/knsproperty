const clampText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.substring(0, maxLength)}...`;
};
export default clampText