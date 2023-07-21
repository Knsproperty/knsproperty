/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.knsproperty.com",
      },
      {
        protocol: "https",
        hostname: "ksnpropertiesstrapi-production.up.railway.app",
      },
      {
        protocol: "https",
        hostname: "s3-ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "mdbcdn.b-cdn.net",
      },

      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
