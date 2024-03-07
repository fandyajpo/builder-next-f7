const BuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
module.exports = BuilderDevTools({
  transpilePackages: ["@repo/ui"],
});
