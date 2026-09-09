import type { NextConfig } from 'next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: ['@prisma/client', '.prisma/client', 'pg'],
  images: { remotePatterns: [
    { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    { protocol: 'https', hostname: '*.githubusercontent.com' }
  ] }
};
export default nextConfig;
