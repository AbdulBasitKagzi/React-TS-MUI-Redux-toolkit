import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import "../css/swiper.css";
import { Navigation } from "swiper";

// mui imports
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import styles from "../css/slider.module.css";

type Props = {
  bestDeals: {
    id: string;
    type: string;
    category: string;
    image: string | undefined;
    productName: string;
    price: string;
    cancelPrice: string;
  }[];
};
const CategorySlider: React.FC<Props> = ({ bestDeals }) => {
  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box sx={{ mx: 5 }}>
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <Box
            sx={{
              display: "flex",
              overflow: {
                xl: "hidden",
                lg: "hidden",
                md: "hidden",
                sm: "hidden",
                xs: "hidden",
              },
              overflowX: {
                xl: "hidden",
                lg: "hidden",
                md: "hidden",
                sm: "hidden",
                xs: "auto",
              },
              justifyContent: "space-between",
              // ml: { xl: 5, lg: 5, md: 5, sm: 3, xs: 2 },
              maxWidth: "85%",
              mx: "auto",
            }}
          >
            <Box
              className="ul"
              sx={{
                width: {
                  xl: "389px",
                  lg: "350px",
                  md: "250px",
                  sm: "189px",
                  xs: "89px",
                },
                height: {
                  xl: "668px",
                  lg: "668px",
                  md: "530px",
                  sm: "515px",
                  xs: "250px",
                },
                // background: "red",
              }}
            >
              {bestDeals.length === 0 ? (
                <Typography>No Products found</Typography>
              ) : (
                bestDeals?.map(
                  (deals: {
                    id: string;
                    type: string;
                    category: string;
                    image: string | undefined;
                    productName: string;
                    price: string;
                    cancelPrice: string;
                  }) => (
                    <SwiperSlide key={deals.id}>
                      <Box
                        key={deals.id}
                        className="li"
                        sx={{
                          width: {
                            xl: "380px",
                            lg: "350px",
                            md: "250px",
                            sm: "189px",
                            xs: "100px",
                          },
                          height: {
                            xl: "420px",
                            lg: "420px",
                            md: "420px",
                            sm: "290px",
                            xs: "200px",
                          },
                          marginTop: {
                            xl: "115px",
                            lg: "115px",
                            md: "225px",
                            sm: "56px",
                            xs: "50px",
                          },
                        }}
                      >
                        <img
                          className={styles.image}
                          src={deals.image}
                          alt="deals"
                          style={{
                            objectFit: "contain",
                          }}
                        />

                        <Box
                          sx={{
                            textAlign: "left",
                            marginTop: {
                              xl: "142px",
                              lg: "142px",
                              md: "142px",
                              sm: "75px",
                              xs: "50px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xl: "25px",
                                lg: "25px",
                                md: "18px",
                                sm: "16px",
                                xs: "8px",
                              },
                              fontWeight: 700,
                              fontFamily: "Jost",
                            }}
                          >
                            {deals.productName}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "left" }}>
                          <Typography
                            sx={{
                              mr: 1,
                              display: "inline-block",
                              color: "#9E9E9E",
                              fontSize: {
                                xs: 9,
                                xl: 25,
                                lg: 25,
                                md: 18,
                                sm: 12,
                              },
                              fontWeight: 400,
                              fontFamily: "Jost",
                              textDecoration: "line-through",
                            }}
                          >
                            $ {deals.cancelPrice}
                          </Typography>
                          <Typography
                            sx={{
                              display: "inline-block",
                              color: "#FF705C",
                              fontSize: {
                                xs: 9,
                                xl: 25,
                                lg: 25,
                                md: 18,
                                sm: 12,
                              },
                              fontWeight: 400,
                              fontFamily: "Jost",
                            }}
                          >
                            $ {deals.price}
                          </Typography>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  )
                )
              )}
            </Box>
          </Box>
        </Swiper>

        <Box>
          <Button
            variant="contained"
            sx={{
              background: "#212121",
              width: { xl: 256, lg: 200, md: 150, xs: 100, sm: 110 },
              height: { xl: 61, lg: 50, xs: 30, md: 40 },
            }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CategorySlider;
