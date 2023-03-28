import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./store/userSlice/store";

import "./App.css";

import MainRoutes from "./routes/Routes";

function App() {
  const { User } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const [save, setSave] = useState<string>(
    localStorage.getItem("isAuth") || ""
  );

  useEffect(() => {
    setSave(localStorage.getItem("isAuth") || "");
  }, [User]);

  useEffect(() => {
    // to protect routes
    if (save === "true") {
      if (location.pathname === "/login") {
        navigate("/");
      } else {
        navigate(location.pathname);
      }
    }
    // else {
    //   navigate("/login");
    // }
  }, [save, navigate, location.pathname]);
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
