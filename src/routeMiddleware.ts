// src/routeMiddleware.ts
import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const pathname = context.url.pathname;
  const sidebar = context.locals.starlightRoute.sidebar;

  // List your course folder names here
  const courseFolders = [
    "01-intro-robotic",
    "02-spatial-math-coordinate-system",
    "03-electronic-signal",
    "04-control-theory",
    "05-kinematic-odometry",
    "06-sensor-noise-filtering",
    "07-behavior-logic-state-machine",
    "08-dynamic",
  ];

  // Find if the user is currently browsing one of the courses
  const currentCourse = courseFolders.find((folder) =>
    pathname.includes(`/${folder}/`),
  );

  if (currentCourse) {
    // Find the sidebar group that matches the current course folder
    const matchingGroup = sidebar.find(
      (item) =>
        item.type === "group" &&
        item.entries.some(
          (entry) =>
            entry.type === "link" && entry.href.includes(`/${currentCourse}/`),
        ),
    );

    if (matchingGroup && matchingGroup.type === "group") {
      // Isolate the sidebar: only show this course's chapters!
      context.locals.starlightRoute.sidebar = matchingGroup.entries;
    }
  }
});
