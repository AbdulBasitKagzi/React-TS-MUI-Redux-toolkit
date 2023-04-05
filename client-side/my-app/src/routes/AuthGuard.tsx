import { ReactNode, useEffect } from "react";
import { getLocalstorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }: { children: ReactNode }): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getLocalstorage("isAuth") !== "true") {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};
export default AuthGuard;
