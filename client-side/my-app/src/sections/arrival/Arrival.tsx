import * as React from "react";
import { newArrival } from "../../data/Constants";

// mui imports
import { Box, Typography } from "@mui/material";

import styles from "../css/slider.module.css";

const Arrival: React.FC = () => {
  return (
    <>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
        >
          Checkout New Arrivals
        </Typography>
      </Box>
      <Box
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "grid",
          },
          justifyContent: "center",
          // alignContent: "center",
          overflow: "hidden",
          maxWidth: "90%",
          mx: "auto",
        }}
      >
        {newArrival.map(
          (arr: {
            id: string;
            image: string;
            title: string;
            subTitle: string;
            price: string;
          }) => (
            <Box
              key={arr.id}
              sx={{
                mr: { sm: 1 },
                mt: { xs: 2 },
              }}
            >
              <img
                src={arr.image}
                alt="images"
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Box>
          )
        )}
      </Box>
    </>
  );
};
export default Arrival;
