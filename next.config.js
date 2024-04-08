/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname:"media.giphy.com"
      },
      {
        protocol:"https",
        hostname:"twitter.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   // Add a rule to handle binary files for the server build
  //   if (isServer) {
  //     config.module.rules.push({
  //       test: /\.(bin|dat|dll|exe|ico|ttf|obj)$/i,
  //       use: "null-loader",
  //     });
  //   }

  //   return config;
  // },
};

module.exports = nextConfig