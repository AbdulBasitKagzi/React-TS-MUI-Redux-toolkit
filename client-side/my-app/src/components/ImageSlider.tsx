import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import outletBerlin from "../assets/images/outletBerlin.png";
import "../css/swiperstyles.css";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
const ImageSlider: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        opacity: "70%",
        background: "#212121",
        mt: 12,
      }}
    >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              left: {
                xl: "641px",
                lg: "641px",
                md: "410px",
                sm: "310px",
                xs: "150px",
              },
              top: {
                xl: "175px",
                lg: "175px",
                md: "125px",
                sm: "100px",
                xs: "50px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: {
                  xl: "39px",
                  lg: "39px",
                  md: "29px",
                  sm: "29px",
                  xs: "15px",
                },

                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              Visit our outlets in{" "}
              <Typography
                sx={{
                  fontSize: {
                    xl: "95px",
                    lg: "95px",
                    md: "75px",
                    sm: "75px",
                    xs: "45px",
                  },
                }}
              >
                Berlin
              </Typography>
            </Typography>
          </Box>
          <img src={outletBerlin} />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              left: {
                xl: "641px",
                lg: "641px",
                md: "410px",
                sm: "310px",
                xs: "150px",
              },
              top: {
                xl: "175px",
                lg: "175px",
                md: "125px",
                sm: "100px",
                xs: "50px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: {
                  xl: "39px",
                  lg: "39px",
                  md: "29px",
                  sm: "29px",
                  xs: "15px",
                },
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              Visit our outlets in{" "}
              <Typography
                sx={{
                  fontSize: {
                    xl: "95px",
                    lg: "95px",
                    md: "75px",
                    sm: "75px",
                    xs: "45px",
                  },
                }}
              >
                India
              </Typography>
            </Typography>
          </Box>
          <img src={outletBerlin} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
