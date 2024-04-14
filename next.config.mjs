/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This disables the built-in Image Optimization API
  },
  output: 'export',
};

export default nextConfig;
