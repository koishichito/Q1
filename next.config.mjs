/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mashiro.kr*"
            },
        ]
    }
};

export default nextConfig;
