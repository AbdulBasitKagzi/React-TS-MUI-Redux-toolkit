import React from "react";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";
import { Box } from "@mui/material";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Layout;
