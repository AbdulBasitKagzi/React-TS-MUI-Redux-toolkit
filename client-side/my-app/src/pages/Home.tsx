import React from "react";
// import NavBar from "../components/NavBar";
import background from "../assets/images/HomeBackgroundImage.png";
import Layout from "../components/Layout";
import ForHer from "../assets/images/ForHer.png";
import ForHim from "../assets/images/ForHim.png";

// mui imports
import { Box, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "../components/NavBar";

const theme = createTheme();

function Home() {
  let liEls = document.querySelectorAll("ul .list");
  let index = 0;
  const scroll = (increase: string) => {
    console.log("i", liEls);
    console.log("inc", increase);
    index = index + +increase;
    console.log("index", index);
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
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
                // position: "absolute",
                width: "100%",
                height: "809px",
                opacity: 0.85,
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: "154px",
                left: { md: "125px", sm: "95px", xs: "85px" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { lg: "39px", md: "30px", sm: "15px", xs: "12px" },
                  fontWeight: "400px",
                  fontFamily: "Jost",
                }}
              >
                With an outstanding style, only for you
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { lg: "95px", md: "68px", sm: "50px", xs: "20px" },
                  fontWeight: "700px",
                  fontFamily: "Jost",
                }}
              >
                Exclusively designed for you
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                  background: `url(${ForHer})`,
                  width: {
                    lg: "600px",
                    md: "480px",
                    sm: "380px",
                  },
                  height: {
                    lg: "640px",
                    md: "640px",
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
                  background: `url(${ForHim})`,
                  width: {
                    lg: "600px",
                    md: "480px",
                    sm: "380px",
                  },
                  height: {
                    lg: "640px",
                    md: "640px",
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
          </Box>
          <Box sx={{ position: "absolute", top: "1100px" }}>
            Best Deals
            <Box sx={{ msOverflowX: "auto" }}>
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
            </Box>
          </Box>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
