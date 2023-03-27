import { useEffect, useRef, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/userSlice/cartSlice";
import Layout from "../components/Layout";
import { RootState } from "../store/userSlice/store";
import { sizeFilter, colorLists } from "../assets/Constants";
import DescriptionAlerts from "../components/Alert";
import { useNavigate } from "react-router-dom";

import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";
import star_active from "../assets/icons/star_active.svg";
import star_disabled from "../assets/icons/star_disabled.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import style from "../css/imageSwiper.module.css";
import classes from "../css/swiper.module.css";

// import required modules
import { Navigation } from "swiper";

// mui imports
import { Box, Button, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ItemDetailView: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state: RootState) => state.product);
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const [tabs, setTabs] = useState<Array<string>>([
    "Info",
    "Brand",
    "Delivery",
  ]);
  const sliderRef = useRef<any>(null);
  const slider = useRef<any>(null);

  const [stars, setStars] = useState<number>(5);
  const [sizes, setSizes] = useState<
    {
      id: number;
      value: string;
      slug: string;
    }[]
  >();
  const [color, setColor] = useState<[]>();
  const [openUp, setOpenUp] = useState<boolean>(false);
  const [image, setImage] = useState<string | undefined>();
  const [imageValue, setImageValue] = useState<number>(0);

  useEffect(() => {
    let fitleredata;
    if (selectedProduct.size) {
      fitleredata = selectedProduct.size.map((data) => {
        return sizeFilter.filter((fill) => fill.id === data);
      });
    }
    setSizes(fitleredata?.flatMap((i) => i));
  }, [selectedProduct]);

  useEffect(() => {
    if (selectedProduct.color) {
      let filteredColor: any = [];
      selectedProduct.color.map((col) => {
        return colorLists.map((color: any) => {
          if (color.id === col) {
            return filteredColor.push(color);
          }
        });
      });
      setColor(filteredColor);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (selectedProduct?.reviewRate) {
      setStars(stars - selectedProduct.reviewRate);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (cartProducts.length !== 0) {
      setOpenUp(true);
    }
  }, [cartProducts]);

  // useEffect(() => {
  //   console.log("selected", selectedProduct);
  // }, [selectedProduct]);

  const handlePrev = useCallback((value: string) => {
    if (value === "slider") {
      slider.current.swiper.slidePrev();
    }
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback((value: string) => {
    if (value === "slider") {
      setImage("");
      slider.current.swiper.slideNext();
    }
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const printStars = (reviewStars: number | undefined) => {
    let result = [];
    if (reviewStars) {
      for (let i = 0; i < reviewStars; i++) {
        result.push(
          <Box sx={{ pr: 2 }}>
            <img src={star_active} alt="filled star" />
          </Box>
        );
      }
      return <Box sx={{ display: "flex" }}>{result}</Box>;
    }
  };
  const printRemainingStars = (stars: number) => {
    let result = [];

    for (let i = 1; i <= stars; i++) {
      result.push(
        <Box sx={{ pr: 2 }}>
          <img src={star_disabled} alt="filled star" />
        </Box>
      );
    }
    return <Box sx={{ display: "flex" }}>{result}</Box>;
  };

  // for tab
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const [value, setValue] = useState(0);
  const [sizeValue, setSizeValue] = useState(0);
  const [colorValue, setColorValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSizeChange = (event: React.SyntheticEvent, newValue: number) => {
    setSizeValue(newValue);
  };
  const handleColorChange = (event: React.SyntheticEvent, newValue: number) => {
    setColorValue(newValue);
  };
  useEffect(() => {
    console.log("image", image);
  }, [image]);

  return (
    <div>
      <Layout>
        <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
          {openUp && (
            <DescriptionAlerts
              type="success"
              title="Success"
              message="Product successfully added to cart"
              openUp={openUp}
              setOpenUp={setOpenUp}
              closeDuration={2000}
            />
          )}
          <Box
            sx={{
              width: "100%",
              display: { xl: "flex", lg: "flex", md: "flex", sm: "flex" },
            }}
          >
            <Box
              sx={{
                maxWidth: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "50%",
                  xs: "100%",
                },
                mx: "auto",

                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  top: { xl: "100px", lg: "100px", md: "100px", sm: "100px" },
                }}
              >
                <Swiper
                  // navigation={true}
                  ref={slider}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {selectedProduct?.productImages?.map(
                    (images: {
                      id: number;
                      productImage: string | undefined;
                    }) => (
                      <SwiperSlide className={style.abdul}>
                        {image ? (
                          <img
                            className={style.sliderImage}
                            src={image}
                            alt="women"
                            style={{
                              borderInlineColor: "black",
                              border: 2,
                              borderColor: "#E5E5EA",
                              borderStyle: "solid",
                              borderRadius: 10,
                              boxShadow: "0px 10px 10px",
                              marginBottom: "10px",
                            }}
                          />
                        ) : (
                          <img
                            className={style.sliderImage}
                            src={images.productImage}
                            alt="women"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        )}
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    display: {
                      xl: "block",
                      lg: "block",
                      md: "block",
                      sm: "block",
                      xs: "none",
                    },
                    top: { xl: "40%", lg: "40%", md: "40%", sm: "40%" },
                    left: { xl: "2%", lg: "2%", md: "2%" },
                  }}
                  // className={classes.prev_arrow}
                  onClick={() => handlePrev("slider")}
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
                      sm: "block",
                      xs: "none",
                    },

                    top: { xl: "40%", lg: "40%", md: "40%", sm: "40%" },
                    left: { xl: "94%", lg: "96%", md: "96%", sm: "96%" },
                  }}
                  // className={classes.next_arrow}
                  onClick={() => handleNext("slider")}
                >
                  <img src={rightArrowIcon} alt="right" />
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  top: {
                    xl: "255px",
                    lg: "255px",
                    md: "280px",
                    sm: "345px",
                    // xs: "510px",
                  },
                }}
              >
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  ref={sliderRef}
                  // navigation={true}
                  // modules={[Navigation]}
                  className={`mySwiper ${classes.position}`}
                >
                  {selectedProduct?.productImages?.map(
                    (
                      images: {
                        id: number;
                        productImage: string | undefined;
                      },
                      index: number
                    ) => (
                      <SwiperSlide className={classes.selectedImage}>
                        {index === imageValue ? (
                          <img
                            src={images.productImage}
                            alt="women"
                            style={{
                              borderInlineColor: "black",
                              border: 2,
                              borderColor: "#E5E5EA",
                              borderStyle: "solid",
                              borderRadius: 10,
                              boxShadow: "0px 10px 10px",
                              marginBottom: "10px",
                              objectFit: "contain",
                              cursor: "pointer",
                            }}
                          />
                        ) : (
                          <img
                            src={images.productImage}
                            alt="women"
                            style={{
                              objectFit: "contain",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setImage(images.productImage);
                              setImageValue(index);
                            }}
                          />
                        )}
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    display: {
                      xl: "block",
                      lg: "block",
                      md: "block",
                      sm: "block",
                      xs: "none",
                    },
                    top: { xl: "40%", lg: "40%", md: "40%", sm: "40%" },
                    left: { xl: "2%", lg: "2%", md: "2%" },
                  }}
                  // className={classes.prev_arrow}
                  onClick={() => handlePrev("sliderRef")}
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
                      sm: "block",
                      xs: "none",
                    },

                    top: { xl: "40%", lg: "40%", md: "40%", sm: "40%" },
                    left: { xl: "94%", lg: "96%", md: "96%", sm: "96%" },
                  }}
                  // className={classes.next_arrow}
                  onClick={() => handleNext("sliderRef")}
                >
                  <img src={rightArrowIcon} alt="right" />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "50%",
                  xs: "100%",
                },
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  width: "142px",
                  height: "48px",
                  background: "#E5E5EA",
                  borderRadius: 3,
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "14px",
                    my: "auto",
                  }}
                >
                  Popular
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: { xl: "498px", lg: "498px", md: "498px", sm: "392px" },
                  // height: "85px",
                  textAlign: "left",
                  wordBreak: "break-all",
                }}
              >
                <Typography
                  sx={{
                    mt: 3,
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: {
                      xl: "48px",
                      lg: "48px",
                      md: "48px",
                      sm: "35px",
                      xs: "28px",
                    },
                  }}
                >
                  {selectedProduct?.productName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {printStars(selectedProduct?.reviewRate)}
                {printRemainingStars(stars)}
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  132 Reviews
                </Typography>
              </Box>
              <Box
                sx={{
                  // width: {
                  //   xl: "693px",
                  //   lg: "575px",
                  //   md: "100%",
                  //   sm: "100%",
                  //   xs: "100%",
                  // },
                  width: "100%",
                  mt: 6,
                }}
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="fullWidth"
                  >
                    {tabs.map((tab: string, index: number) =>
                      value === index ? (
                        <Tab
                          label={tab}
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#111827",
                          }}
                        />
                      ) : (
                        <Tab label={tab} />
                      )
                    )}
                  </Tabs>
                </Box>
                {tabs.map((tab: string, index: number) => (
                  <TabPanel value={value} index={index}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: {
                          xl: "16px",
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                        },
                        textAlign: "left",
                        wordBreak: "break-all",
                      }}
                    >
                      Dress with tulle and collar Peter Pan from REDValentino
                      (Red Valentino). Peter Pan collar, tulle panels,
                      sleeveless model, concealed back zipper and pleated skirt.
                      Black colour.
                    </Typography>
                  </TabPanel>
                ))}
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#1B2437",
                      textAlign: "left",
                      mt: 4,
                      mb: 4,
                    }}
                  >
                    Sizes
                  </Typography>
                  <Box
                    // value={sizeValue}
                    // onChange={handleSizeChange}
                    // aria-label="basic tabs example"
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {sizes?.map((size: any, index: number) =>
                      sizeValue === index ? (
                        <Box
                          // label={size.slug}
                          sx={{
                            width: "81px",
                            // height: "45px",
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            background: "#1B2437",
                            mr: 4,
                            mb: 2,
                            cursor: "pointer",
                          }}
                          onClick={(event) => handleSizeChange(event, index)}
                        >
                          {size.slug}
                        </Box>
                      ) : (
                        <Box
                          // label={size.slug}
                          sx={{
                            width: "81px",
                            border: 1,
                            borderColor: "#000000",
                            mr: 4,
                            mb: 2,
                            cursor: "pointer",
                          }}
                          onClick={(event) => handleSizeChange(event, index)}
                        >
                          {size.slug}
                        </Box>
                      )
                    )}
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#1B2437",
                      textAlign: "left",
                      mt: 4,
                      mb: 4,
                    }}
                  >
                    Colors
                  </Typography>
                  <Box className="colorBox">
                    <Box
                      // value={colorValue}
                      // onClick={()=>handleColorChange}
                      // aria-label="basic tabs example"
                      sx={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {color?.map((col: any, index: number) =>
                        colorValue === index ? (
                          <Box
                            sx={{
                              width: "50px",
                              height: "50px",
                              background: `${col.haxValue}`,
                              mr: 4,
                              mb: 4,
                              cursor: "pointer",
                            }}
                            onClick={(event) => handleColorChange(event, index)}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: "35px",
                              height: "35px",
                              border: 1,
                              background: `${col.haxValue}`,
                              borderColor: `${col.haxValue}`,
                              mr: 4,
                              mb: 4,
                              cursor: "pointer",
                            }}
                            onClick={(event) => handleColorChange(event, index)}
                          />
                        )
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#1B2437",
                    mt: 4,
                    mb: 4,
                  }}
                >
                  $
                </Typography>
                <Typography
                  sx={{
                    display: "inline-block",
                    fontFamily: "Inter",
                    fontSize: "34px",
                    fontWeight: 400,
                    color: "#1B2437",
                    mt: 4,
                    mb: 4,
                    ml: 1,
                  }}
                >
                  {selectedProduct.productCurrentPrice}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "flex",
                    xs: "block",
                  },
                  justifyContent: "left",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    background: "#1B2437",
                    maxWidth: "167px",
                    height: "54px",
                    fontSize: "18px",
                    fontFamily: "Inter",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    mr: { xl: 7, lg: 7, md: 7, sm: 7, xs: 1 },
                    ml: { sm: 1 },
                    mt: { xl: 14.5, lg: 14.5, md: 14.5, sm: 14.5, xs: 4 },
                    mb: 2,
                  }}
                  onClick={() => {
                    dispatch(cartActions.addProductToCart(selectedProduct));
                    navigate("/shippingpage");
                  }}
                >
                  Shop Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: 1,
                    borderColor: "#111827",
                    maxWidth: "167px",
                    height: "54px",
                    fontSize: "18px",
                    fontFamily: "Inter",
                    fontWeight: 700,
                    color: "#111827",
                    mr: { sm: 1 },
                    mt: { xl: 14.5, lg: 14.5, md: 14.5, sm: 14.5, xs: 4 },
                    mb: 2,
                  }}
                  onClick={() => {
                    dispatch(cartActions.addProductToCart(selectedProduct));
                  }}
                >
                  Add to cart
                </Button>
              </Box>
              {/* add new element above */}
            </Box>
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default ItemDetailView;
