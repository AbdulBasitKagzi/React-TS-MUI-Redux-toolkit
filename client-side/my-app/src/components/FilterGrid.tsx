import { useEffect } from "react";
import { useSelector } from "react-redux";

// images and icons import
import shoppingcartVector from "../assets/icons/shoppingcartVector.svg";
import heart from "../assets/icons/heartGroup.svg";

// mui imports

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import womenStanding from "../assets/images/womenStanding.png";
import Typography from "@mui/material/Typography";
import { RootState } from "../store/userSlice/store";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

interface arr {
  id: number;
  productName: string;

  productImages: Array<Object>;
  productDescription: Array<string>;
  productOriginalPrice: number;
  productCurrentPrice: number;
  gender: number;
  human: number;
  category: number;
  brand: number;
  size: Array<number>;
  color: Array<number>;
  reviewRate: number;
  slug: string;
}

function FilterGrid() {
  const { filter } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    console.log("filteredData", filter);
  }, [filter]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        ml: { xl: 10, lg: 6, md: 10, sm: 10, xs: 2 },
        mr: 10,
        // maxWidth: "0%",
        // mx: "auto",
      }}
    >
      <Grid container spacing={0}>
        {filter.map((arr: any) => (
          <Grid item xs={8} sm={6} md={4} lg={4} xl={4}>
            <Box
              sx={{
                width: {
                  xl: "362px",
                  lg: "278px",
                  md: "220px",
                  sm: "205px",
                  xs: "278px",
                },
                border: 1,
                borderColor: "#E5E7EB",
              }}
            >
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
                    fontSize: {
                      xl: "30px",
                      lg: "30px",
                      md: "26px",
                      sm: "24px",
                      xs: "30px",
                    },
                    fontWeight: 400,
                  }}
                >
                  {arr.productName}
                </Typography>
                <Box
                  sx={{
                    mr: { xl: 3, lg: 3, md: 3, sm: 3, xs: 3 },
                    mt: { xl: 8, lg: 8, md: 8, sm: 8, xs: 8 },
                  }}
                >
                  <img src={shoppingcartVector} alt="cart" />
                </Box>
              </Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontFamily: "Inter",
                  fontSize: {
                    xl: "34px",
                    lg: "34px",
                    md: "30px",
                    sm: "28px",
                    xs: "34px",
                  },
                  fontWeight: 400,
                  ml: { xl: "16px", lg: "16px" },
                }}
              >
                $ {arr.productCurrentPrice}
              </Typography>
              <Box
                sx={{
                  width: {
                    xl: "58px",
                    lg: "40px",
                    md: "35px",
                    sm: "35px",
                    xs: "45px",
                  },
                  position: "relative",
                  top: {
                    xl: "-498px",
                    lg: "-420px",
                    md: "-348px",
                    sm: "-330px",
                    xs: "-415px",
                  },
                  left: {
                    xl: "285px",
                    lg: "225px",
                    md: "175px",
                    sm: "160px",
                    xs: "225px",
                  },
                }}
              >
                <img src={heart} width="100%" alt="heartgroup" />
              </Box>
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
