/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://flagcdn.com/",
      },
    ],
  },
};

export default nextConfig;
