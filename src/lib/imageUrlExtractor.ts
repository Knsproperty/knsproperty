

const ImageUrlExtractor = (attributes: any) => {
    const test_image_url = "https://ksnpropertiesstrapi-production.up.railway.app"
    const preview_image_url = `${test_image_url}${attributes.Preview_Image.data.attributes.formats.small.url}`;
    const images: string[] = attributes.Images.data.map((_: any) => `${test_image_url}${_.attributes.formats.small.url}`)
    return [preview_image_url, ...images,]
}


export default ImageUrlExtractor