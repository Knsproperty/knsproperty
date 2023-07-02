/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.knsproperty.com',
            },
            {
                protocol: "https",
                hostname: 'ksnpropertiesstrapi-production.up.railway.app'
            }
        ],
    },
}

module.exports = nextConfig
