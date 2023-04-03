import { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../store/userSlice/productSlice";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import "../css/swiper.css";
import { Navigation } from "swiper";

// images and icons imports
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";

// mui imports
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import styles from "../css/slider.module.css";

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
                          // width: {
                          //   xl: "380px",
                          //   lg: "350px",
                          //   md: "250px",
                          //   sm: "189px",
                          //   xs: "100px",
                          // },
                          // height: {
                          //   xl: "420px",
                          //   lg: "420px",
                          //   md: "420px",
                          //   sm: "290px",
                          //   xs: "200px",
                          // },
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
                                <>
                                  <img
                                    key={image.id}
                                    className={styles.image}
                                    src={image?.productImage}
                                    alt="deals"
                                    style={{
                                      objectFit: "contain",
                                    }}
                                  />
                                </>
                              );
                            }
                          }
                        )}

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

        <Box>
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
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
            top: { xl: "22%", lg: "20%", md: "22%", sm: "40%" },
            left: { xl: 0, lg: 0, md: "-2.4%" },
          }}
          // className={classes.prev_arrow}
          onClick={handlePrev}
        >
          <img src={leftArrowIcon} alt="previous" />
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

            top: { xl: "22%", lg: "20%", md: "22%", sm: "40%" },
            left: { xl: "98%", lg: "98%", md: "100%", sm: "96%" },
          }}
          // className={classes.next_arrow}
          onClick={handleNext}
        >
          <img src={rightArrowIcon} alt="right" />
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
