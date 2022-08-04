import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import { withRoutes, routes } from "./routes";

const Router = () => useRoutes(withRoutes(routes));

export default Router;
