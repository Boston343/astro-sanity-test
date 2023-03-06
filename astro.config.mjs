import dotenv from "dotenv";

// get .env data for use with process.env
dotenv.config();
import { defineConfig } from "astro/config";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "5kells9y",
    dataset: "production",
    apiVersion: "2023-03-05",
    useCdn: true,
    token: process.env.SANITY_VIEW_TOKEN
  }), tailwind()]
});