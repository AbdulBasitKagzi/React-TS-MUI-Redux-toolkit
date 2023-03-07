import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/Login";
import Home from "../pages/Home";

function MainRoutes() {
  const routes_arr = [
    {
      id: "login",
      path: "/login",
      component: <SignIn />,
      protected: false,
    },
    {
      id: "check",
      path: "/check",
      component: <Home />,
      protected: true,
    },
  ];
  return (
    <div>
      <Routes>
        {routes_arr.map((routes) => (
          <Route path={routes.path} element={routes.component} />
        ))}
      </Routes>
    </div>
  );
}

export default MainRoutes;
