import { memo } from "react";
import { BrowserRouter } from "react-router-dom";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import Router from "@/route/index";

const App = memo(() => {
  return (
    <BrowserRouter>
      <AppHeader></AppHeader>
      <Router></Router>
      <AppFooter></AppFooter>
    </BrowserRouter>
  );
});

export default App;
