import { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product/product.slice";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import "./swiper.css";
import { Navigation } from "swiper";

// images and icons imports
// import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
// import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";

// mui imports
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import styles from "../css/slider.module.css";
import { assets } from "../../assets";

type Props = {
  bestDeals: {
    id: number;
    productName: string;
    productImages: { id: number; productImage: string | undefined }[];
    productDescription: Array<string>;
    productOriginalPrice: number;
    productCurrentPrice: number;
    gender: number;
    // human: number;
    category: number;
    brand: number;
    size: Array<Number>;
    color: Array<Number>;
    reviewRate: number;
    slug: string;
  }[];
};
const Slider: React.FC<Props> = ({ bestDeals }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sliderRef = useRef<any>();

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box sx={{ mx: 5, position: "relative" }}>
        <Swiper
          ref={sliderRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
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
                // height: {
                //   xl: "668px",
                //   lg: "668px",
                //   md: "530px",
                //   sm: "515px",
                //   xs: "250px",
                // },
                // background: "red",
              }}
            >
              {bestDeals.length === 0 ? (
                <Typography>No Products found</Typography>
              ) : (
                bestDeals?.map(
                  (deals: {
                    id: number;
                    productName: string;
                    productImages: {
                      id: number;
                      productImage: string | undefined;
                    }[];
                    productDescription: Array<string>;
                    productOriginalPrice: number;
                    productCurrentPrice: number;
                    gender: number;
                    // human: number;
                    category: number;
                    brand: number;
                    size: Array<Number>;
                    color: Array<Number>;
                    reviewRate: number;
                    slug: string;
                  }) => (
                    <SwiperSlide key={deals.id}>
                      <Box
                        key={deals.id}
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
                            sm: "56px",
                            xs: "30px",
                          },
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          dispatch(productActions.selectedProduct(deals));
                          navigate(`/itemdetailview/${deals.slug}`);
                        }}
                      >
                        {deals.productImages?.map(
                          (
                            image: {
                              id: number;
                              productImage: string | undefined;
                            },
                            index: number
                          ) => {
                            if (index === 0) {
                              return (
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
                                    key={image.id}
                                    // className={styles.image}
                                    src={image?.productImage}
                                    alt="deals"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                    }}
                                  />
                                </Box>
                              );
                            }
                          }
                        )}

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
                            $ {deals.productOriginalPrice}
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
                            $ {deals.productCurrentPrice}
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

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              background: "#212121",
              width: { xl: 256, lg: 200, md: 150, xs: 100, sm: 110 },
              // height: { xl: 61, lg: 50, xs: 30, md: 40 },
              mt: { sm: 8, xs: 2 },
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
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
            top: { xl: "25%", lg: "25%", md: "25%" },
            left: { xl: 0, lg: 0, md: "-2.4%" },
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
              xl: "block",
              lg: "block",
              md: "block",
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

export default Slider;
