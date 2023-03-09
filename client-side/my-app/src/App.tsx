import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

import MainRoutes from "./routes/Routes";

function App() {
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user.email, navigate]);
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
