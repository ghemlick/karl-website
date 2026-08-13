import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/compositions", destination: "/music", permanent: true },
      { source: "/performance-art", destination: "/multimedia-performance", permanent: true },
      { source: "/text", destination: "/blog", permanent: true },
      { source: "/post/:slug", destination: "/blog/:slug", permanent: true },
      {
        source: "/blog/categories/:category",
        destination: "/blog?category=:category",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
