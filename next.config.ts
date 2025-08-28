import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

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

    // Find and modify the existing asset/resource rule to exclude .svg
    const fileLoaderRuleIndex = config.module.rules.findIndex(
      (rule: RuleSetRule) =>
        rule.test instanceof RegExp && rule.test.test(".svg") && rule.type === "asset/resource"
    );

    if (fileLoaderRuleIndex !== -1) {
      const fileLoaderRule = config.module.rules[fileLoaderRuleIndex] as RuleSetRule;
      // Create a new test regex that explicitly excludes .svg
      const newTest = new RegExp(fileLoaderRule.test.source.replace(/\|svg/g, ""), fileLoaderRule.test.flags);
      config.module.rules[fileLoaderRuleIndex] = {
        ...fileLoaderRule,
        test: newTest,
      };
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