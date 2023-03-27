import * as React from "react";
import { newArrival } from "../assets/Constants";

// icons and images import
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";

// mui imports
import { Box } from "@mui/material";

import styles from "../css/slider.module.css";

const ArrivalSlider: React.FC = () => {
  return (
    <>
      {/* <Box
        position="relative"
        sx={{
          top: { xl: 380, lg: 380, md: 350, sm: 250 },
          left: { xl: -650, lg: -650, md: -450, sm: -350 },
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "block",
            xs: "none",
          },
        }}
      >
        <img className={styles.icon} src={leftArrowIcon} alt="left arrow" />
      </Box>
      <Box
        // position="relative"
        position="absolute"
        sx={{
          top: { xl: 3540, lg: 3540, md: 2800, sm: 2285 },
          left: { xl: 1400, lg: 1350, md: 965, sm: 730 },
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "block",
            xs: "none",
          },
        }}
        // sx={{
        //   position: "absolute",
        //   top: { xl: 275, lg: 275, md: 250, sm: 250, xs: 220 },
        //   left: { xl: 1455, lg: 1380, md: 985, sm: 750, xs: 395 },
        // }}
      >
        <img className={styles.icon} src={rightArrowIcon} alt="right arrow" />
      </Box> */}
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
                width: { xl: 389, lg: 289, md: 205, sm: 155, xs: 330 },
                height: { xl: 782, lg: 782, md: 782, sm: 500, xs: 500 },
                ml: 1,
                flexShrink: 0,
                mt: { xs: 2 },
              }}
            >
              <img src={arr.image} alt="images" width="100%" height="100%" />
            </Box>
          )
        )}
      </Box>
    </>
  );
};
export default ArrivalSlider;
