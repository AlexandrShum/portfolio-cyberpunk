/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // basePath: isProd ? "/portfolio-cyberpunk" : "",
  basePath: "/portfolio-cyberpunk",
  images: {
    unoptimized: true
  },
  // assetPrefix: isProd ? "/portfolio-cyberpunk" : "",
};

export default nextConfig;
