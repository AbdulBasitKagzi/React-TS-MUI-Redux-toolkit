import React, { useState } from "react";
import Slider from "../components/Slider";
import background from "../assets/images/HomeBackgroundImage.png";
import Layout from "../components/Layout";
import CategoryTab from "../components/Tab";
import ArrivalSlider from "./ArrivalSlider";
import { person_tabs } from "../assets/Constants";
import { product_tabs } from "../assets/Constants";
import { useSelector } from "react-redux";
import ReviewCard from "../components/ReviewCard";
import ImageSlider from "../components/ImageSlider";

// images import
import ForHer from "../assets/images/ForHer.png";
import ForHim from "../assets/images/ForHim.png";
import womenShoeYellow from "../assets/images/womenShoeYellow.png";
import weddingRing from "../assets/images/weddingRing.png";
import wallet from "../assets/images/wallet.png";
import appleWatch from "../assets/images/appleWatch.png";
import womenStanding from "../assets/images/womenStanding.png";
import arrowIcon from "../assets/icons/Arrow_Right.svg";
import handbag from "../assets/images/handBag.png";
import hats from "../assets/images/hat.png";
import heels from "../assets/images/heels.png";
import urbanStories from "../assets/images/urbanStories.png";
import countryLights from "../assets/images/countryLights.png";
import formal from "../assets/images/formal.png";

// mui imports
import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image_List from "../components/ImageList";
import Footer from "../components/Footer";

const theme = createTheme();

// interface tabs {
//   id: string;
//   value: string;
// }

function Home() {
  const { Products } = useSelector((state: any) => state.product);
  // const [tabs, setTabs] = useState<
  //   {
  //     id: string;
  //     value: string;
  //   }[]
  // >();

  const [bestDeals, setBestDeals] = useState<
    {
      id: string;
      productName: string;
      image: string | undefined;
      price: string;
      cancelPrice: string;
    }[]
  >([
    {
      id: "yellowshoeswomen",
      productName: "Flat Hill Slingback",
      image: womenShoeYellow,
      price: "$163",
      cancelPrice: "$299",
    },
    {
      id: "weddingring",
      productName: "Ocean Blue Ring",
      image: weddingRing,
      price: "$245",
      cancelPrice: "$269",
    },
    {
      id: "brownleatherwalletr",
      productName: "Brown Leather Wallet",
      image: wallet,
      price: "$144",
      cancelPrice: "$179",
    },
    {
      id: "Silversidewristwatch",
      productName: "SilverSide WristWatch",
      image: appleWatch,
      price: "$336",
      cancelPrice: "$379",
    },
    {
      id: "Silversidewristwatch",
      productName: "SilverSide WristWatch",
      image: appleWatch,
      price: "$336",
      cancelPrice: "$379",
    },
    // {
    //   id: "Silversidewristwatch",
    //   productName: "SilverSide WristWatch",
    //   image: appleWatch,
    //   price: "$336",
    //   cancelPrice: "$379",
    // },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Layout>
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              width: {
                xl: "100%",
                lg: "100%",
                md: "100%",
                sm: "100%",
                xs: "107%",
              },
              height: "809px",
              left: "0px",
              top: "0px",
              background: "#FFFFFF",
              opacity: 0.85,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                // position: "absolute",
                width: "100%",
                height: {
                  xl: "890px",
                  lg: "890px",
                  md: "605px",
                  sm: "540px",
                  xs: "340px",
                },
                opacity: 0.85,
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                top: "154px",
                // left: { md: "125px", sm: "95px", xs: "85px" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  // m: "0 auto",
                  fontSize: {
                    lg: "39px",
                    md: "30px",
                    sm: "15px",
                    xs: "12px",
                  },
                  fontWeight: "400px",
                  fontFamily: "Jost",
                }}
              >
                With an outstanding style, only for you
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    lg: "95px",
                    md: "68px",
                    sm: "50px",
                    xs: "20px",
                  },
                  fontWeight: "700px",
                  fontFamily: "Jost",
                }}
              >
                Exclusively designed for you
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                top: {
                  xl: "-401px",
                  lg: "-401px",
                  md: "-235px",
                  sm: "-195px",
                  xs: "-95px",
                },
                // left: "169px",
                // right: "170px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    width: {
                      xl: "691px",
                      lg: "691px",
                      md: "491px",
                      sm: "335px",
                      xs: "170px",
                    },
                    // height: {
                    //   xl: "689px",
                    //   lg: "689px",
                    //   md: "589px",
                    //   sm: "489px",
                    // },
                  }}
                >
                  <Button
                    sx={{
                      position: "absolute",
                      top: {
                        xl: "363px",
                        lg: "363px",
                        md: "250px",
                        sm: "170px",
                        xs: "88px",
                      },
                      left: {
                        xl: "262px",
                        lg: "262px",
                        md: "165px",
                        sm: "100px",
                        xs: "100px",
                      },
                      // right: "0px",
                      background: "#FFFFFF",
                      width: {
                        xl: "256px",
                        lg: "256px",
                        md: "256px",
                        sm: "185px",
                        xs: "64px",
                      },
                      height: {
                        xl: "52px",
                        lg: "52px",
                        md: "52px",
                        sm: "30px",
                        xs: "20px",
                      },
                      fontFamily: "Josefin Sans",
                      fontSize: { xl: 20, lg: 20, md: 20, sm: 15, xs: 8 },
                      color: "#424242",
                      fontWeight: 700,

                      // p: "18px, 40px, 14px, 40px",
                    }}
                  >
                    For Her
                  </Button>
                  <img src={ForHer} alt="forher" width="100%" />
                </Box>
                <Box
                  sx={{
                    width: {
                      xl: "691px",
                      lg: "691px",
                      md: "491px",
                      sm: "335px",
                      xs: "170px",
                    },

                    // height: {
                    //   xl: "689px",
                    //   lg: "689px",
                    //   md: "589px",
                    // },
                  }}
                >
                  <Button
                    sx={{
                      position: "absolute",
                      top: {
                        xl: "363px",
                        lg: "363px",
                        md: "250px",
                        sm: "170px",
                        xs: "88px",
                      },
                      left: {
                        xl: "990px",
                        lg: "990px",
                        md: "670px",
                        sm: "481px",
                        xs: "275px",
                      },
                      // right: "0px",
                      background: "#FFFFFF",
                      width: {
                        xl: "256px",
                        lg: "256px",
                        md: "256px",
                        sm: "185px",
                        xs: "64px",
                      },
                      height: {
                        xl: "52px",
                        lg: "52px",
                        md: "52px",
                        sm: "30px",
                        xs: "20px",
                      },
                      fontFamily: "Josefin Sans",
                      fontSize: { xl: 20, lg: 20, md: 20, sm: 15, xs: 8 },
                      color: "#424242",
                      fontWeight: 700,

                      // p: "18px, 40px, 14px, 40px",
                    }}
                  >
                    For Him
                  </Button>
                  <img src={ForHim} alt="forhim" width="100%" />
                </Box>
              </Box>
            </Box>
            {/* slider */}
            <Box
              sx={{
                position: "relative",
                top: {
                  xl: "-275px",
                  lg: "-275px",
                  md: "-150px",
                  sm: "-130px",
                  // xs: "0px",
                },
              }}
            >
              <Box
                sx={
                  {
                    // overflow: "hidden",
                  }
                }
              >
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
                >
                  Best Deals
                </Typography>
              </Box>
              <Slider bestDeals={bestDeals} />
              {/* <Box>
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
              </Box> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mt: { xl: -24, lg: -24, md: -13, sm: -10, xs: 5 },
              }}
            >
              <Box
                sx={{
                  display: { lg: "flex", md: "flex", sm: "flex" },
                }}
              >
                <Box
                  sx={{
                    background: "#EEEEEE",
                    width: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    height: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    mb: { xs: 1 },
                    mr: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontSize: {
                        lg: "29px",
                        md: "20px",
                        sm: "20px",
                        xs: "20px",
                      },
                      fontWeight: 700,
                      color: "#616161",
                      marginTop: { lg: "100px", md: "80px", sm: "50px" },
                      paddingTop: { xs: "40px" },
                    }}
                  >
                    Exclusive collection 2021
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontSize: {
                        lg: "61px",
                        md: "41px",
                        sm: "31px",
                        xs: "31px",
                      },
                      fontWeight: 700,
                      color: "#212121",
                    }}
                  >
                    Be exclusive
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Jost",
                      fontSize: {
                        lg: "18px",
                        md: "14px",
                        sm: "12px",
                        xs: "12px",
                      },
                      fontWeight: 400,
                      color: "#212121",
                    }}
                  >
                    The best everyday option in a Super Saver range within a
                    reasonable price. It is our responsibility to keep you 100
                    percent stylish. Be smart & trendy with us.
                  </Typography>
                  <Box
                    sx={{
                      mt: { xs: 1, sm: 2, lg: 5, xl: 5 },
                      ml: { lg: -18, md: -12 },
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "#212121",
                        width: { xl: 256, lg: 200, md: 150, xs: 100, sm: 110 },
                        height: { xl: 61, lg: 50, xs: 30 },
                      }}
                    >
                      Explore
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // backgroundImage: `url(${womenStanding})`,
                    objectFit: "cover",
                    width: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    height: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                  }}
                >
                  <img src={womenStanding} alt="womenstanding" width="100%" />
                  <Box position="relative" sx={{ bottom: 70 }}>
                    <Button variant="text">
                      <Typography color="#FFFFFF">
                        Outfit
                        <img src={arrowIcon} alt="arrow" width="15px" />
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="parent"
              sx={{
                display: {
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                  sm: "flex",
                  xs: "grid",
                },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { xl: 336, lg: 336, md: 270, sm: 203, xs: 280 },
                  height: { xl: 336, lg: 336, md: 270, sm: 203, xs: 280 },
                  mr: 1,
                  mt: 1,
                }}
              >
                <img src={handbag} alt="handbag" width="100%" />
              </Box>
              <Box
                sx={{
                  width: { xl: 336, lg: 336, md: 270, sm: 203, xs: 280 },
                  height: { xl: 336, lg: 336, md: 270, sm: 203, xs: 280 },
                  mr: 1,
                  mt: 1,
                }}
              >
                <img src={hats} alt="hat" width="100%" />
              </Box>
              <Box
                sx={{
                  width: { xl: 336, lg: 336, md: 270, sm: 203, xs: 280 },
                  height: { xl: 336, lg: 336, md: 270, sm: 203, xs: 280 },
                  mr: 1,
                  mt: 1,
                }}
              >
                <img src={heels} alt="heel" width="100%" />
              </Box>
            </Box>
            <Box sx={{ mt: 12, mb: 9 }}>
              <Typography
                variant="h3"
                sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
              >
                Checkout New Arrivals
              </Typography>
              <ArrivalSlider />
            </Box>

            <Box sx={{ mt: 12, mb: 9 }}>
              <Typography
                variant="h3"
                sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
              >
                Shop By Category
              </Typography>
              {/* tabs */}
              <Box sx={{ mt: 7, mb: 7 }}>
                <CategoryTab tabs={person_tabs} />
              </Box>
              <Box>
                <CategoryTab tabs={product_tabs} />
              </Box>
              <Box>
                <Slider bestDeals={Products} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mt: { xl: 12, lg: 12, md: 12, sm: 8, xs: 5 },
              }}
            >
              <Box
                sx={{
                  display: { lg: "flex", md: "flex", sm: "flex" },
                }}
              >
                <Box
                  sx={{
                    background: "#EEEEEE",
                    width: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    height: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    mb: { xs: 1 },
                    mr: 1,
                    textAlign: "center",
                  }}
                >
                  <img src={urbanStories} alt="urban" width="100%" />
                </Box>
                <Box
                  sx={{
                    // backgroundImage: `url(${womenStanding})`,
                    objectFit: "cover",
                    width: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    height: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                  }}
                >
                  <img src={countryLights} alt="countylights" width="100%" />
                  {/* <Box position="relative" sx={{ bottom: 70 }}>
                    <Button variant="text">
                      <Typography color="#FFFFFF">
                        Outfit
                        <img src={arrowIcon} alt="arrow" width="15px" />
                      </Typography>
                    </Button>
                  </Box> */}
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: 12 }}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
                >
                  Best Sellers
                </Typography>
              </Box>
              <Slider bestDeals={bestDeals} />
            </Box>
            <Box
              sx={{
                // maxWidth: "90%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mx: "auto",
              }}
            >
              <Image_List />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mt: { xl: 12, xs: 5 },
              }}
            >
              <Box
                sx={{
                  display: { lg: "flex", md: "flex", sm: "flex" },
                }}
              >
                <Box
                  sx={{
                    background: {
                      xs: "#eeeeee",
                      xl: "#FFFFFFF",
                      lg: "#FFFFFF",
                      md: "#FFFFFF",
                      sm: "#FFFFFF",
                    },
                    width: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    height: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    mb: { xs: 1 },
                    mr: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontSize: {
                        lg: "45px",
                        md: "34px",
                        sm: "25px",
                        xs: "22px",
                      },
                      marginTop: { lg: "160px", md: "135px", sm: "110px" },
                      paddingTop: {
                        xs: "90px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                      fontWeight: 700,
                      color: "#212121",
                    }}
                  >
                    Gentle Formal Looks
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontFamily: "Jost",
                      fontSize: {
                        lg: "18px",
                        md: "14px",
                        sm: "10px",
                        xs: "10px",
                      },
                      px: 5,
                      fontWeight: 400,
                      color: "#212121",
                    }}
                  >
                    We provide the top formal apparel package to make your job
                    look confident and comfortable. Stay connect.
                  </Typography>
                  <Box
                    sx={{
                      mt: { xs: 1, sm: 2, lg: 5, xl: 5 },
                      ml: { lg: -18, md: -12 },
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "#212121",
                        width: { xl: 256, lg: 200, md: 150, xs: 128, sm: 128 },
                        height: { xl: 61, lg: 50, xs: 30 },
                        fontSize: { sm: 8, xs: 8, xl: 15, lg: 12 },
                      }}
                    >
                      Explore Collection
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // backgroundImage: `url(${womenStanding})`,
                    objectFit: "cover",
                    width: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                    height: { xl: 500, lg: 500, md: 400, sm: 300, xs: 280 },
                  }}
                >
                  <img src={formal} alt="formal" width="100%" />
                </Box>
              </Box>
            </Box>
            <ReviewCard />
            <ImageSlider />
            <Footer />
            {/* enter new content here above the comment */}
          </Box>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
