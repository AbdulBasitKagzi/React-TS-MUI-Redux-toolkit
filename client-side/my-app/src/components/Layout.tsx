import React from "react";
import NavBar from "./navbar/NavBar";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "./footer/Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <NavBar />
        {children}
        <Footer />
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Layout;
