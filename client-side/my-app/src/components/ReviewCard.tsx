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
  }[];
  arr = [
    {
      id: "1",
      image: leatherShoe,
      image_1: women_1,
      name: "Kelly Hudson",
      profession: "Fashion Activist",
      title: "How important are shoes in your style?",
    },
    {
      id: "2",
      image: makeUp,
      image_1: women_2,
      name: "Judy Garland",
      profession: "Fashion Activist",
      title: "Fashion trend forecast for  Summer 2021",
    },
    {
      id: "3",
      image: clothMaking,
      image_1: women_3,
      name: "Rachel Green",
      profession: "Fashion Activist",
      title: "Spring exclusive collection for Men & Women",
    },
  ];
  return (
    <>
      <Box
        sx={{
          maxWidth: "90%",
          display: "flex",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        {arr.map((arr: any) => (
          <Box
            sx={{
              border: 2,
              maxWidth: { xl: 521, lg: 521, md: 521, sm: 236 },
              maxHeight: 1009,
            }}
          >
            <Box
              sx={{
                border: 2,
                maxWidth: { xl: 521, lg: 521, md: 521, sm: 236 },
                maxHeight: 521,
              }}
            >
              <img src={arr.image} alt="image" width="100%" height="110%" />
              <Box
                sx={{
                  position: "relative",
                  top: -60,
                  left: { xl: 89, lg: 89, md: 1 },
                  border: 2,
                  background: "#FCFCFC",
                  maxWidth: 304,
                  height: { xl: 89, lg: 89, md: 89, sm: 63 },
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <img
                    className={styles.reviwer_image}
                    src={arr.image_1}
                    alt="image"
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
                        },
                        pt: {
                          xl: "37.5px",
                          lg: "37.5px",
                          md: "37.5px",
                          sm: "21px",
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
                        },
                        pt: {
                          xl: "37.5px",
                          lg: "37.5px",
                          md: "37.5px",
                          sm: "21px",
                        },
                      }}
                    >
                      <img src={heart} alt="heart" width="24px" height="22px" />
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
                        },
                        pt: {
                          xl: "37.5px",
                          lg: "37.5px",
                          md: "37.5px",
                          sm: "21px",
                        },
                      }}
                    >
                      <img src={share} alt="share" width="24px" height="22px" />
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
                mt: { xl: 7, lg: 7, md: 4, sm: 4 },
                mx: { xl: 8, lg: 8, md: 1, sm: 1 },
              }}
            >
              <Typography
                variant="h4"
                textAlign="left"
                sx={{
                  fontFamily: "Jost",
                  fontWeight: 700,
                  fontSize: { xl: 31, lg: 31, md: 21, sm: 21 },
                }}
              >
                {arr.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ReviewCard;
