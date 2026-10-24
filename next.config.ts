import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // /event was the conference page before the National Champion content arrived.
  async redirects() {
    return [{ source: "/event", destination: "/konferensi", permanent: true }];
  },
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
