import React from "react";

// images and icons imports
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";

// mui imports
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import styles from "../css/slider.module.css";
type Props = {
  bestDeals: {}[];
};
const Slider: React.FC<Props> = ({ bestDeals }) => {
  let liEls = document.querySelectorAll(".ul .li");
  let index = 0;
  const scroll = (increase: string) => {
    index = index + +increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          left: { xs: 5, sm: 30 },
          top: { xs: 175, md: 210 },
        }}
        onClick={() => scroll("-5")}
      >
        <img src={leftArrowIcon} alt="prev" className={styles.icon} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: { xs: 380, sm: 725, md: 925, lg: 1260 },
          top: {
            xs: 175,
            md: 210,
          },
        }}
        onClick={() => scroll("+5")}
      >
        <img
          className={styles.icon}
          src={rightArrowIcon}
          alt="next"
          width="20px"
          height="40px"
        />
      </Box>
      <Box
        sx={{
          display: { lg: "flex", xs: "flex" },
        }}
      >
        {bestDeals?.map((deals: any) => (
          <Card
            className="ul"
            sx={{
              width: {
                // xl: 389,
                lg: 200,
                md: 135,
                sm: 150,
                xs: 1,
              },
              boxShadow: "none",
              marginLeft: {
                xs: 0,
                sm: "38px",
                md: "100px",
                lg: "120px",
                // xl: "92px",
              },
            }}
          >
            <Box sx={{ objectFit: "none" }} className="li">
              <img className={styles.image} src={deals.image} />
              <CardContent
                sx={{
                  fontFamily: "Jost",
                  marginTop: { xs: "15px", xl: "140px" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: { xs: 7, sm: 10, md: 12, lg: 15, xl: 16 },
                    fontWeight: 700,
                  }}
                >
                  {deals.productName}
                </Typography>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      display: "inline-block",
                      color: "#9E9E9E",
                      fontSize: { xs: 8, sm: 12, xl: 20 },
                      fontWeight: 400,
                      fontFamily: "Jost",
                      textDecoration: "line-through",
                    }}
                  >
                    {deals.price}
                  </Typography>
                  <Typography
                    sx={{
                      ml: 1,
                      display: "inline-block",
                      color: "#FF705C",
                      fontSize: { xs: 9, xl: 20, sm: 12 },
                      fontWeight: 400,
                      fontFamily: "Jost",
                    }}
                  >
                    {deals.cancelPrice}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
