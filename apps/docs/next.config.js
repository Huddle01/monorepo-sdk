const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  basePath: "/docs",
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
    images: { allowFutureImage: true },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/sdk/introduction/huddle01",
        permanent: false,
        basePath: false,
      },
      {
        source: "/usage",
        destination: "/reference/command-line-reference",
        permanent: false,
      },
      {
        source: "/discord{/}?",
        permanent: false,
        destination: "https://discord.gg/sSzyjxvbf5",
      },
      {
        source: "/docs/changelog",
        permanent: false,
        destination: "https://github.com/vercel/turborepo/releases",
      },
      {
        source: "/docs/guides/complimentary-tools",
        permanent: false,
        destination: "/docs/guides/monorepo-tools",
      },
      {
        source: "/docs/guides/continuous-integration",
        permanent: false,
        destination: "/docs/ci",
      },
      {
        source: "/docs/features/:path*",
        permanent: false,
        destination: "/docs/core-concepts/:path*",
      },
    ];
  },
});
