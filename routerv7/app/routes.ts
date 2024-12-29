import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),

  // Nested routes 1
  //   route("dashboard", "routes/dashboard.tsx", [
  //     route("finances", "routes/finances.tsx"),
  //     route("personalInfo", "routes/personalInfo.tsx"),
  //   ]),

  // Nested routes 2
  layout("routes/dashboard.tsx", [
    route("finances", "routes/finances.tsx"),
    route("personalInfo", "routes/personalInfo.tsx"),
  ]),
] satisfies RouteConfig