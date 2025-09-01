/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  experimental: {},
  // 或者使用静态导出（推荐用于Cloudflare Pages）
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default config;