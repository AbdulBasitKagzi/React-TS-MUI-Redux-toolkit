import React from "react";
import shoppingcartVector from "../assets/icons/shoppingcartVector.svg";
// mui imports
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import womenStanding from "../assets/images/womenStanding.png";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FilterGrid() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box sx={{ flexGrow: 1, ml: 10, mr: 10 }}>
      <Grid container spacing={2}>
        {arr.map((arr) => (
          <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
            <Box sx={{ width: "278px", border: 1, borderColor: "#E5E7EB" }}>
              <img width="100%" src={womenStanding} alt="women" />
              <Box
                sx={{
                  display: "flex",
                  textAlign: "left",
                  mb: { xl: 1, lg: 1 },
                  ml: { xl: 2, lg: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: { xl: "30px", lg: "30px" },
                    fontWeight: 400,
                  }}
                >
                  Louis Vouiton active wear
                </Typography>
                <Box sx={{ mr: { xl: 3, lg: 3 }, mt: { xl: 8, lg: 8 } }}>
                  <img src={shoppingcartVector} alt="cart" />
                </Box>
              </Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontFamily: "Inter",
                  fontSize: { xl: "34px", lg: "34px" },
                  fontWeight: 400,
                  ml: { xl: "16px", lg: "16px" },
                }}
              >
                $ 715
              </Typography>
            </Box>
          </Grid>
        ))}
        {/* <Grid item xs={8} sm={6} md={6} lg={3} xl={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default FilterGrid;
