import { Suspense } from "react";
import type { LazyExoticComponent } from "react";
import { RouteObject } from "react-router-dom";
import { Spin } from "antd";

export interface CDRouteObject
  extends Omit<RouteObject, "element" | "children"> {
  component?: LazyExoticComponent<React.MemoExoticComponent<() => JSX.Element>>;
  children?: CDRouteObject[];
}

export const getRoutes = (oldRoutes: CDRouteObject[]): RouteObject[] => {
  let routes: RouteObject[] = [];
  oldRoutes.forEach((route) => {
    routes.push({
      path: route.path,
      element: (
        <Suspense
          fallback={
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Spin tip="加载中..." />
              </div>
            </>
          }
        >
          {route.component && <route.component />}
        </Suspense>
      ),
      children: route.children && getRoutes(route.children),
    });
  });
  return routes;
};
