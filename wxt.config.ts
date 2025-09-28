import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    permissions: ["activeTab", "scripting", "downloads"],
    action: {},
  },
  outDir: "dist",
  imports: {
    eslintrc: {
      enabled: 9,
    },
  },
});
