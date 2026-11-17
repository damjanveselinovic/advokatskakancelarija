import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: { qualities: [75, 90] },
  // Članci se čitaju sa diska (content/blog/*.json); da budu u serverskom paketu i za rute van generateStaticParams.
  outputFileTracingIncludes: { "/*": ["./content/blog/**/*"] },
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
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
