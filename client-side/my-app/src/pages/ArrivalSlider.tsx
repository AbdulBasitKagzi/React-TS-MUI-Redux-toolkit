import * as React from "react";
import { newArrival } from "../assets/Constants";

// icons and images import
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";

// mui imports
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import styles from "../css/slider.module.css";

const ArrivalSlider: React.FC = () => {
  {
  }
  return (
    <>
      <Box
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
        <img className={styles.icon} src={leftArrowIcon} />
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
        <img className={styles.icon} src={rightArrowIcon} />
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
          alignContent: "center",
          overflow: "hidden",
        }}
      >
        {newArrival.map((arr: any) => (
          <Box
            sx={{
              width: { xl: 289, lg: 289, md: 205, sm: 155, xs: 280 },
              height: { xl: 782, lg: 782, md: 782, sm: 500, xs: 500 },
              ml: 1,
              flexShrink: 0,
              mt: { xs: 2 },
            }}
          >
            <img src={arr.image} alt="images" width="100%" height="100%" />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default ArrivalSlider;