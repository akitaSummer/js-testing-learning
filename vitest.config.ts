import replace from "@rollup/plugin-replace";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    silent: true,
    environment: "jsdom",
    setupFiles: ["./__tests__/setupTests.ts"],
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  plugins: [
    replace({
      __FROM_PLUGIN__: true,
    }),
  ],
});
