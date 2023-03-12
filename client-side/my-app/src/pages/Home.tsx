import React, { useState } from "react";
import Slider from "../components/Slider";
import background from "../assets/images/HomeBackgroundImage.png";
import Layout from "../components/Layout";
import StandardImageList from "./ImageList";

// images import
import ForHer from "../assets/images/ForHer.png";
import ForHim from "../assets/images/ForHim.png";
import womenShoeYellow from "../assets/images/womenShoeYellow.png";
import weddingRing from "../assets/images/weddingRing.png";
import wallet from "../assets/images/wallet.png";
import appleWatch from "../assets/images/appleWatch.png";
import womenStanding from "../assets/images/womenStanding.png";

// mui imports
import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Home() {
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
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Layout>
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              width: "100%",
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
                  <img src={ForHer} width="100%" />
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
                  <img src={ForHim} width="100%" />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                top: "325px",
                mt: "54px",
                display: "block",
              }}
            >
              <Box
                sx={{
                  objectFit: "cover",
                  background: `url(${ForHer})`,
                  width: {
                    lg: "600px",
                    md: "480px",
                    sm: "380px",
                  },
                  height: {
                    lg: "640px",
                    md: "640px",
                    sm: "500px",
                  },
                }}
              >
                <Button
                  sx={{
                    position: "absolute",
                    top: "363px",
                    right: "112px",
                    background: "#FFFFFF",
                    width: "256px",
                    height: "52px",
                    fontFamily: "Josefin Sans",
                    fontSize: 20,
                    color: "#424242",
                    fontWeight: 700,
                    // p: "18px, 40px, 14px, 40px",
                  }}
                >
                  For Her
                </Button>
              </Box>
            </Box>
            <Box sx={{ position: "relative", top: "325px", mt: "54px" }}>
              <Box
                sx={{
                  objectFit: "cover",
                  background: `url(${ForHim})`,
                  width: {
                    lg: "600px",
                    md: "480px",
                    sm: "380px",
                  },
                  height: {
                    lg: "640px",
                    md: "640px",
                    sm: "500px",
                  },
                }}
              >
                <Button
                  sx={{
                    position: "absolute",
                    top: "363px",
                    right: "112px",
                    background: "#FFFFFF",
                    width: "256px",
                    height: "52px",
                    fontFamily: "Josefin Sans",
                    fontSize: 20,
                    color: "#424242",
                    fontWeight: 700,
                    // p: "18px, 40px, 14px, 40px",
                  }}
                >
                  For Him
                </Button>
              </Box>
            </Box>
          </Box> */}
          {/* <Box
            sx={{
              position: "absolute",
              top: "1100px",
              // width: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                top: 50,
                marginBottom: "120px",
                // overflow: "hidden",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
              >
                Best Deals
              </Typography>
            </Box> */}
          {/* <Box sx={{ msOverflowX: "auto" }}>
              <ul
                style={{
                  display: "flex",
                  margin: 0,
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img1" src="//picsum.photos/300/200?1" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img2" src="//picsum.photos/300/200?2" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img3" src="//picsum.photos/300/200?3" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img4" src="//picsum.photos/300/200?4" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img5" src="//picsum.photos/300/200?5" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img6" src="//picsum.photos/300/200?6" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img7" src="//picsum.photos/300/200?7" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img8" src="//picsum.photos/300/200?8" />
                </li>
                <li
                  className="list"
                  style={{ display: "block", listStyle: "none" }}
                >
                  <img className="img9" src="//picsum.photos/300/200?9" />
                </li>
              </ul>
              <button onClick={() => scroll("+5")}>next</button>
              <button onClick={() => scroll("-1")}>prev</button>
            </Box> */}

          {/* <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                // msOverflowX: "auto",
              }}
            > */}
          {/* <Slider bestDeals={bestDeals} /> */}
          {/* <Box sx={{ mt: { xs: 1, sm: 2, lg: 5, xl: 5 } }}>
              <Button
                variant="contained"
                sx={{
                  background: "#212121",
                  width: { xl: 256, lg: 200, md: 150, xs: 100, sm: 110 },
                  height: { xl: 61, lg: 50, xs: 30 },
                }}
              >
                View All
              </Button>
            </Box> */}

          {/* </Box> */}
          {/* </Box> */}

          {/* <Box
            position="absolute"
            sx={{
              top: { lg: 1800, md: 1700, sm: 1600, xs: 1500 },
              left: { lg: 169, md: 115, sm: 85, xs: 20 },
              right: { xs: 20 },
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                display: { lg: "flex", md: "flex", sm: "flex" },
                // justifyContent: "space-between",
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
                    View All
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
                <Box position="absolute" sx={{ left: 710, top: 420 }}>
                  <Button variant="text" color="primary">
                    <Typography color="#FFFFFF">Outfit</Typography>
                  </Button>
                </Box>
                <img src={womenStanding} width="100%" />
              </Box>
            </Box>
          </Box> */}
          {/* <StandardImageList /> */}
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
