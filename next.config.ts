import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath:  '/my-portfolio' , 
  assetPrefix:  '/my-portfolio/' ,
  images: {
    unoptimized: true,
  },
  // optional for CI builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
