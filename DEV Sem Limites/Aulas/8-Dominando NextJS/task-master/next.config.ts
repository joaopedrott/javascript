import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "teskmaster-files-aula.s3.sa-east-1.amazonaws.com",

      },
    ]
  },
};

export default nextConfig;
