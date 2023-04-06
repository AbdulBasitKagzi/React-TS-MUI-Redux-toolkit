import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import SignIn from "../pages/Login";

import NoPage from "../pages/NoPage";
import Loader from "../components/loader/Loader";

// implementing lazyloading
const LazyLogIn = lazy(() => import("../pages/Login"));
const LazyHome = lazy(() => import("../pages/Home"));
const LazyCategoryDetail = lazy(() => import("../pages/CategoryDetail"));
const LazyItemDetailView = lazy(() => import("../pages/ItemDetailView"));
const LazyShippingPage = lazy(() => import("../pages/ShippingPage"));

function MainRoutes() {
  const routes_arr = [
    {
      id: "login",
      path: "/login",
      component: <LazyLogIn />,
      protected: false,
    },
    {
      id: "home",
      path: "/",
      component: <LazyHome />,
      protected: true,
    },

    {
      id: "categorydetal",
      path: "/categorydetail/:id/:type",
      component: <LazyCategoryDetail />,
      protected: true,
    },
    {
      id: "shippingpage",
      path: "/shippingpage",
      component: <LazyShippingPage />,
      protected: true,
    },
    {
      id: "itemdetailview",
      path: "/itemdetailview/:id",
      component: <LazyItemDetailView />,
      protected: true,
    },
  ];
  return (
    <Suspense fallback=<Loader />>
      <Routes>
        {routes_arr.map((routes) => (
          <Route
            key={routes.id}
            path={routes.path}
            element={routes.component}
          />
        ))}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
