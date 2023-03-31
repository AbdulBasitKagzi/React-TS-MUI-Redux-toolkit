import React from "react";
import leatherShoe from "../assets/images/leatherShoe.png";
import makeUp from "../assets/images/makeUp.png";
import clothMaking from "../assets/images/clothMaking.png";
import women_1 from "../assets/images/women-1.png";
import women_2 from "../assets/images/women-2.png";
import women_3 from "../assets/images/women-3.png";
import eye from "../assets/icons/eye.svg";
import heart from "../assets/icons/heart.svg";
import share from "../assets/icons/share.svg";
import blackArrowicon from "../assets/icons/blackArrowicon.svg";

// mui imports
import { Box, Typography } from "@mui/material";

import styles from "../css/reviewer.module.css";

const ReviewCard: React.FC = () => {
  let arr: {
    id: string;
    image: string | undefined;
    image_1: string | undefined;
    name: string;
    profession: string;
    title: string;
    height: string;
  }[];
  arr = [
    {
      id: "1",
      image: leatherShoe,
      image_1: women_1,
      name: "Kelly Hudson",
      profession: "Fashion Activist",
      title: "How important are shoes in your style?",
      height: "414px",
    },
    {
      id: "2",
      image: makeUp,
      image_1: women_2,
      name: "Judy Garland",
      profession: "Fashion Activist",
      title: "Fashion trend forecast for  Summer 2021",
      height: "414px",
    },
    {
      id: "3",
      image: clothMaking,
      image_1: women_3,
      name: "Rachel Green",
      profession: "Fashion Activist",
      title: "Spring exclusive collection for Men & Women",
      height: "414px",
    },
  ];
  return (
    <>
      <Box
        sx={{
          // maxWidth: "100%",
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "block",
          },
          justifyContent: "center",
          // alignContent: "center",
          mx: "auto",
          mt: { xs: 8 },
        }}
      >
        {arr.map(
          (arr: {
            id: string;
            image: string | undefined;
            image_1: string | undefined;
            name: string;
            profession: string;
            title: string;
            height: string;
          }) => (
            <Box
              key={arr.id}
              sx={
                {
                  // maxWidth: { xl: 521, lg: 521, md: 521, sm: 190, xs: 330 },
                  // maxWidth: { sm: 190, xs: 330 },
                  // maxHeight: 1009,
                }
              }
            >
              <Box
                sx={{
                  // maxWidth: { xl: 521, lg: 521, md: 521, sm: 236, xs: 330 },
                  // maxHeight: { xl: 521, lg: 521, md: 521, sm: 521, xs: 465 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <img
                  src={arr.image}
                  alt="leathershoe"
                  width="100%"
                  height={arr.height}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "370px",
                    // left: { xl: 89, lg: 89, md: 1 },
                    background: "#FCFCFC",
                    maxWidth: 304,
                    // height: { xl: 89, lg: 89, md: 89, sm: 63 },
                    // display: "flex",
                    // justifyContent: "center",
                    // flexDirection: "column",
                    // alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <img
                      className={styles.reviwer_image}
                      src={arr.image_1}
                      alt="women_1"
                      // width="89px"
                      // height="89px"
                    />
                    <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "flex",
                          pl: {
                            xl: "20.5px",
                            lg: "20.5px",
                            md: "20.5px",
                            sm: "4.5px",
                            xs: "4.5px",
                          },
                          pt: {
                            xl: "37.5px",
                            lg: "37.5px",
                            md: "37.5px",
                            sm: "21px",
                            xs: "21px",
                          },
                        }}
                      >
                        <img src={eye} alt="eye" width="24px" height="22px" />
                        <Typography sx={{ ml: 1 }}>35</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          pl: {
                            xl: "20.5px",
                            lg: "20.5px",
                            md: "20.5px",
                            sm: "4.5px",
                            xs: "4.5px",
                          },
                          pt: {
                            xl: "37.5px",
                            lg: "37.5px",
                            md: "37.5px",
                            sm: "21px",
                            xs: "21px",
                          },
                        }}
                      >
                        <img
                          src={heart}
                          alt="heart"
                          width="24px"
                          height="22px"
                        />
                        <Typography sx={{ ml: 1 }}>35</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          pl: {
                            xl: "20.5px",
                            lg: "20.5px",
                            md: "20.5px",
                            sm: "4.5px",
                            xs: "4.5px",
                          },
                          pt: {
                            xl: "37.5px",
                            lg: "37.5px",
                            md: "37.5px",
                            sm: "21px",
                            xs: "21px",
                          },
                        }}
                      >
                        <img
                          src={share}
                          alt="share"
                          width="24px"
                          height="22px"
                        />
                        <Typography sx={{ ml: "2px" }}>35</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      mt: { xl: "25px", lg: "25px", md: "25px", sm: "10px" },
                    }}
                  >
                    <Typography
                      sx={{
                        display: "inline-block",
                        fontFamily: "Jost",
                        fontSize: {
                          xl: "16px",
                          lg: "16px",
                          md: "16px",
                          sm: "12px",
                        },
                        fontWeight: 700,
                      }}
                    >
                      {arr.name}
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline-block",
                        ml: "21px",
                        fontSize: {
                          xl: "16px",
                          lg: "16px",
                          md: "16px",
                          sm: "12px",
                        },
                      }}
                    >
                      {arr.profession}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: { md: 15, xs: 12 },
                  mx: { lg: 8, xs: 1 },
                }}
              >
                <Typography
                  variant="h4"
                  textAlign="left"
                  sx={{
                    fontFamily: "Jost",
                    fontWeight: 700,
                    fontSize: { xl: 26, lg: 23, md: 21, sm: 16, xs: 20 },
                    wordBreak: "inherit",
                    msWordBreak: "break-all",
                  }}
                >
                  {arr.title}
                </Typography>
                <Typography
                  sx={{
                    wordBreak: "break-word",
                    fontSize: "16px",
                    fontFamily: "Lato",
                    textAlign: "left",
                    lineHeight: "22.4px",
                    mt: { Xl: 4, lg: 4, md: 4, sm: 4 },
                  }}
                >
                  Is it possible to assess a person just on the basis of their
                  footwear? Obviously, nobody should criticize, but certainly,
                  shoes say a lot about someone. It matters for the outsiders
                  that we meet every day...
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  textAlign: "left",
                  ml: { xl: 8, lg: 8, md: 1, sm: 1, xs: 1 },
                  my: { xl: 8, lg: 8, md: 8, sm: 8, xs: 2 },
                }}
              >
                <Typography>Read More</Typography>
                <img
                  src={blackArrowicon}
                  alt="arrowicon"
                  width="18px"
                  height="18px"
                  style={{ marginLeft: "16px", marginTop: "3px" }}
                />
              </Box>
            </Box>
          )
        )}
      </Box>
    </>
  );
};

export default ReviewCard;
