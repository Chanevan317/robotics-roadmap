// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeNova({
          // nav: [
          //   { label: "Quick start", href: "/guide/getting-started" },
          //   { label: "External link", href: "https://example.com" },
          // ],
        }),
      ],

      title: "Robotics Roadmap",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],

      routeMiddleware: "./src/routeMiddleware.ts",
      sidebar: [
        {
          label: "Getting Started",
          items: [{ autogenerate: { directory: "1-get-started" } }],
        },
        {
          label: "Kinematics",
          items: [{ autogenerate: { directory: "2-kinematics" } }],
        },
      ],
    }),
  ],
});
