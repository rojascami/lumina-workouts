/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/dessert-market' : '';
const nextConfig = {
    basePath: basePath,
    env: {
      basePath,
    },
};

export default nextConfig;
