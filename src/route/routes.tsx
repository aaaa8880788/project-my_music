import { Suspense, lazy } from "react";
import type { LazyExoticComponent, FC } from "react";
import { RouteObject } from "react-router-dom";
import { Spin } from "antd";

export const routes: Route[] = [
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

interface Route<T = any> extends Omit<RouteObject, "element" | "children"> {
  component: LazyExoticComponent<FC<T>>;
  children?: Route[];
}

export const withRoutes = (routes: Route[]): RouteObject[] => {
  const result: RouteObject[] = [];
  routes.forEach((item) => {
    const { component: Comp, children, ...reset } = item;
    const route = {
      ...reset,
      element: (
        <Suspense fallback={<Spin />}>
          <Comp />
        </Suspense>
      ),
      ...(Array.isArray(children) &&
        children.length > 0 && {
          children: withRoutes(children),
        }),
    };
    result.push(route);
  });
  return result;
};
