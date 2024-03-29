import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  transpilePackages: ["@repo/ui"],
});

export default nextConfig;
