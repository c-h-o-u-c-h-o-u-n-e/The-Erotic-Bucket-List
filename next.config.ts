import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack"; // Import du type RuleSetRule

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Existing rule for dyad-sh/nextjs-webpack-component-tagger
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }

    // Find the existing rule that handles image assets (including SVGs by default)
    // and exclude SVG from it to prevent conflicts with @svgr/webpack
    const fileLoaderRule = config.module.rules.find((rule: RuleSetRule) => { // Typage du paramètre 'rule'
      return rule.test instanceof RegExp && rule.test.test(".svg") && rule.type === "asset/resource";
    });

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add a new rule for SVG files to be handled by @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(ts|tsx|js|jsx)$/] }, // Apply only to JS/TS files
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;