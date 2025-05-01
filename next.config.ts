import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // ! I don't know if this fixed the warning or just hid them
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
