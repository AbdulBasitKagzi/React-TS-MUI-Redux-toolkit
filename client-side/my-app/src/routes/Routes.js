import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/Login";
import Home from "../pages/Home";
import CategoryDetail from "../pages/CategoryDetail";
import NoPage from "../pages/NoPage";
import ItemDetailView from "../pages/ItemDetailView";
import ShippingPage from "../pages/ShippingPage";

function MainRoutes() {
  const routes_arr = [
    {
      id: "login",
      path: "/login",
      component: <SignIn />,
      protected: false,
    },
    {
      id: "home",
      path: "/",
      component: <Home />,
      protected: true,
    },
    {
      id: "categorydetal",
      path: "/categorydetail/:id/:type",
      component: <CategoryDetail />,
      protected: true,
    },
    {
      id: "itemdetailview",
      path: "/itemdetailview/:id",
      component: <ItemDetailView />,
      protected: true,
    },
    {
      id: "shippingpage",
      path: "/shippingpage",
      component: <ShippingPage />,
      protected: true,
    },
  ];
  return (
    <Routes>
      {routes_arr.map((routes) => (
        <Route path={routes.path} element={routes.component} />
      ))}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default MainRoutes;
