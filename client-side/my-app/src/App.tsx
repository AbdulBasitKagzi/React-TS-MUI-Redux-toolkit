import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";

import MainRoutes from "./routes/Routes";

function App() {
  const { email } = useSelector((state: any) => state.user);
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email) {
      navigate("/check");
    } else {
      navigate("/login");
    }
  }, [email]);
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
