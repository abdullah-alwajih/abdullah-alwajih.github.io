/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
    },
    // basePath: '/portfolio',
    assetPrefix: '/'
};

export default nextConfig;
