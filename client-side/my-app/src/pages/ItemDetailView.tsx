import { useEffect, useRef, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { RootState } from "../store/userSlice/store";
import { sizeFilter, colorLists } from "../assets/Constants";

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
  const { selectedProduct } = useSelector((state: RootState) => state.product);
  const [tabs, setTabs] = useState<Array<string>>([
    "Info",
    "Brand",
    "Delivery",
  ]);

  const [stars, setStars] = useState<number>(5);
  const [sizes, setSizes] = useState<
    {
      id: number;
      value: string;
      slug: string;
    }[]
  >();
  const [color, setColor] = useState<[]>();
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
  }, [selectedProduct, stars]);

  useEffect(() => {
    console.log("selected", selectedProduct);
  }, [selectedProduct]);

  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
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

  return (
    <div>
      <Layout>
        <Box
          sx={{
            width: "100%",
            display: { xl: "flex", lg: "flex", md: "flex" },
          }}
        >
          <Box
            sx={{
              maxWidth: "50%",
              mx: "auto",
              border: 2,
              position: "relative",
            }}
          >
            <Box>
              <Swiper
                navigation={true}
                // ref={slideRef}
                modules={[Navigation]}
                className="mySwiper"
              >
                {selectedProduct?.productImages?.map(
                  (images: {
                    id: number;
                    productImage: string | undefined;
                  }) => (
                    <SwiperSlide className={style.abdul}>
                      <img
                        className={style.sliderImage}
                        src={images.productImage}
                        alt="women"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </Box>

            <Box sx={{ position: "relative" }}>
              <div className={classes.prev_arrow} onClick={() => handlePrev()}>
                <img src={leftArrowIcon} alt="previous" />
              </div>
              <div className={classes.next_arrow} onClick={() => handleNext()}>
                <img src={rightArrowIcon} alt="right" />
              </div>
              <Swiper
                ref={sliderRef}
                // navigation={true}
                // modules={[Navigation]}
                className={`mySwiper ${classes.position}`}
              >
                {selectedProduct?.productImages?.map(
                  (images: {
                    id: number;
                    productImage: string | undefined;
                  }) => (
                    <SwiperSlide className={classes.selectedImage}>
                      <img src={images.productImage} alt="women" />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </Box>
          </Box>
          <Box sx={{ maxWidth: "50%", mx: "auto", border: 2 }}>
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
            <Box sx={{ width: "498px", height: "85px", textAlign: "left" }}>
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "48px",
                }}
              >
                {selectedProduct?.productName}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {printStars(selectedProduct?.reviewRate)}
              {printRemainingStars(stars)}
              <Typography
                sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "14px" }}
              >
                132 Reviews
              </Typography>
            </Box>
            <Box sx={{ width: "693px", mt: 6 }}>
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
                      fontSize: "16px",
                      textAlign: "left",
                    }}
                  >
                    Dress with tulle and collar Peter Pan from REDValentino (Red
                    Valentino). Peter Pan collar, tulle panels, sleeveless
                    model, concealed back zipper and pleated skirt. Black
                    colour.
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
                <Box>
                  <Tabs
                    value={sizeValue}
                    onChange={handleSizeChange}
                    aria-label="basic tabs example"
                  >
                    {sizes?.map((size: any, index: number) =>
                      sizeValue === index ? (
                        <Tab
                          label={size.slug}
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#111827",
                            background: "#1B2437",
                            mr: 4,
                          }}
                        />
                      ) : (
                        <Tab
                          label={size.slug}
                          sx={{ border: 1, borderColor: "#000000", mr: 4 }}
                        />
                      )
                    )}
                  </Tabs>
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
                <Box>
                  <Tabs
                    value={colorValue}
                    onChange={handleColorChange}
                    aria-label="basic tabs example"
                  >
                    {color?.map((col: any, index: number) =>
                      colorValue === index ? (
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            background: `${col.haxValue}`,
                            mr: 4,
                          }}
                          onClick={(event) => handleColorChange(event, index)}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: "35px",
                            maxHeight: "35px",
                            border: 1,
                            background: `${col.haxValue}`,
                            borderColor: `${col.haxValue}`,
                            mr: 4,
                          }}
                          onClick={(event) => handleColorChange(event, index)}
                        />
                      )
                    )}
                  </Tabs>
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
            <Box sx={{ display: "flex", justifyContent: "left" }}>
              <Button
                variant="outlined"
                sx={{
                  background: "#1B2437",
                  maxWidth: "167px",
                  height: "54px",
                  fontSize: "20px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  mr: 7,
                  mt: 14.5,
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
                  mt: 14.5,
                }}
              >
                Add to cart
              </Button>
            </Box>
            {/* add new element above */}
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default ItemDetailView;
