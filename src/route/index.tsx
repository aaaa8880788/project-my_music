import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import type { CDRouteObject } from "./routes";
import { getRoutes } from "./routes";

const routes: CDRouteObject[] = [
  {
    path: "/",
    component: lazy(() => import("@/views/discover")),
  },
  {
    path: "mine",
    component: lazy(() => import("@/views/mine")),
  },
  {
    path: "/friend",
    component: lazy(() => import("@/views/friend")),
  },
];

const Router = () => useRoutes(getRoutes(routes));

export default Router;
