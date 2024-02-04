import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "takacs-verheijden-new",

  projectId: "v6hzel3u",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
