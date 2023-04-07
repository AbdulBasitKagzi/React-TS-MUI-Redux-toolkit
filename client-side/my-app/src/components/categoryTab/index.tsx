import { useRef, useCallback, useState, useEffect } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import "./swiper.css";
import { Navigation } from "swiper";

// icons & images
// import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
// import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";

// mui imports
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import styles from "../css/slider.module.css";
import { assets } from "../../assets";

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
  const sliderRef = useRef<SwiperRef>(null);
  const [display, setDisplay] = useState("block");

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    if (bestDeals.length === 0) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }, [bestDeals.length]);

  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box sx={{ mx: 5, position: "relative" }}>
        <Swiper
          ref={sliderRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          // navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <Box
            sx={{
              display: "flex",
              overflow: {
                xs: "hidden",
              },
              overflowX: {
                sm: "hidden",
                xs: "auto",
              },
              justifyContent: "space-between",
              // ml: { xl: 5, lg: 5, md: 5, sm: 3, xs: 2 },
              maxWidth: "85%",
              mx: "auto",
            }}
          >
            <Box className="ul">
              {bestDeals.length === 0 ? (
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "30px",
                    fontFamily: "Jost",
                    p: 2,
                  }}
                >
                  No Products found
                </Typography>
              ) : (
                bestDeals?.map((deals) => (
                  <SwiperSlide key={deals.id}>
                    <Box
                      className="li"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",

                        marginTop: {
                          xl: "50px",
                          lg: "40px",
                          md: "50px",
                          // sm: "30px",
                          xs: "30px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: {
                            lg: "200px",
                            md: "180px",
                            sm: "100px",
                            xs: "50px",
                          },
                          height: {
                            lg: "200px",
                            md: "180px",
                            sm: "150px",
                            xs: "100px",
                          },
                        }}
                      >
                        <img
                          // className={styles.image}

                          src={deals.image}
                          alt="deals"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          textAlign: "left",
                          marginTop: {
                            xl: "55px",
                            lg: "55px",
                            md: "55px",
                            sm: "30px",
                            xs: "10px",
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
                            wordBreak: "break-all",
                            padding: { xs: "1px" },
                          }}
                        >
                          {deals.productName}
                        </Typography>
                      </Box>
                      <Box>
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
                          {deals.cancelPrice}
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
                          {deals.price}
                        </Typography>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))
              )}
            </Box>
          </Box>
        </Swiper>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              background: "#212121",
              width: { xl: 256, lg: 200, md: 150, xs: 100, sm: 110 },
              // height: { xl: 61, lg: 50, xs: 30, md: 40 },
              mt: 8,
            }}
          >
            View All
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              xl: display,
              lg: display,
              md: display,
              sm: "none",
              xs: "none",
            },
            top: { md: "25%" },
            left: { lg: "2%" },
          }}
          // className={classes.prev_arrow}
          onClick={handlePrev}
        >
          <img src={assets.icons.Left_Arrow_Icon} alt="previous" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              xl: display,
              lg: display,
              md: display,
              sm: "none",
              xs: "none",
            },

            top: { md: "25%" },
            left: { lg: "98%", md: "100%" },
          }}
          // className={classes.next_arrow}
          onClick={handleNext}
        >
          <img src={assets.icons.Right_Arrow_Icon} alt="right" />
        </Box>
      </Box>
    </Box>
  );
};

export default CategorySlider;
