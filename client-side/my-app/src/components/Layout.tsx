import React from "react";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
