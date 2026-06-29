// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeTerminal from "starlight-theme-terminal";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeTerminal()],

      title: "Robotics Roadmap",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Chanevan317/robotics-roadmap",
        },
      ],

      routeMiddleware: "./src/routeMiddleware.ts",
    }),
  ],
});
