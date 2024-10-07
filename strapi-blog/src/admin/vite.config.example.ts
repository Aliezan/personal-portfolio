import { mergeConfig, type UserConfig } from "vite";

export default (config: UserConfig) =>
  // Important: always return the modified config
  mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });