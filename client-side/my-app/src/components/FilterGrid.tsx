import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../store/userSlice/productSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/userSlice/store";
import { productProps } from "../store/userSlice/productSlice";
import WarningModel from "./WarningModel";

// images and icons import
import shoppingcartVector from "../assets/icons/shoppingcartVector.svg";
import heart from "../assets/icons/heartGroup.svg";

// mui imports

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { cartActions } from "../store/userSlice/cartSlice";

interface arr {
  id: number;
  productName: string;
  productImages: { id: number; productImage: string | undefined }[];
  productDescription: string[];
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalPage, setTotalPage] = useState<number>();
  const [postPerPage, setPostPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentposts, setCurrentPosts] = useState<productProps[]>(filter);
  const [save, setSave] = useState<string>(
    localStorage.getItem("isAuth") || ""
  );
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const page = Math.ceil(filter.length / postPerPage);
    setTotalPage(page);
  }, [filter, postPerPage]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    filter.length !== 0 &&
      setCurrentPosts(filter.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, filter]);

  useEffect(() => {
    let minValue: number;
    minValue = currentposts.reduce((min, curr) => {
      return curr.productCurrentPrice < min ? curr.productCurrentPrice : min;
    }, currentposts[0]?.productCurrentPrice);

    dispatch(productActions.setMinValue(minValue));
  }, [currentposts, filter, dispatch]);

  useEffect(() => {
    let maxValue: number;
    maxValue = currentposts.reduce((max, curr) => {
      return curr.productCurrentPrice > max ? curr.productCurrentPrice : max;
    }, currentposts[0]?.productCurrentPrice);
    dispatch(productActions.setMaxValue(maxValue));
  }, [currentposts, filter, dispatch]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        // ml: { xl: 4, lg: 6, md: 10, sm: 10, xs: 2 },
        ml: 4,
        mr: 6.25,
        // maxWidth: "55%",
        // mx: "auto",
      }}
    >
      {open && <WarningModel open={open} setOpen={setOpen} />}
      <Grid container spacing={4}>
        {filter.length !== 0 ? (
          currentposts.map((arr: arr) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Box
                sx={{
                  // width: { xs: 278 },
                  position: "relative",

                  height: {
                    xl: "599px",
                    lg: "515px",
                    md: "435px",
                    sm: "385px",
                  },
                  border: 1,
                  borderColor: "#E5E7EB",
                  // mx: "auto",
                }}
                onClick={() => {
                  dispatch(productActions.selectedProduct(arr));
                  navigate(`/itemdetailview/${arr.slug}`);
                }}
              >
                {arr?.productImages?.map(
                  (
                    image: { id: number; productImage: string | undefined },
                    index: number
                  ) => {
                    if (index === 0) {
                      return (
                        <>
                          <img
                            src={image.productImage}
                            width="100%"
                            alt="women"
                          />
                        </>
                      );
                    } else {
                      return;
                    }
                  }
                )}

                <Box sx={{ position: "absolute", top: 12, right: 15 }}>
                  <img src={heart} alt="heartgroup" width="40px" />
                </Box>

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
                        xs: "22px",
                      },
                      fontWeight: 400,
                      wordBreak: "break-all",
                    }}
                  >
                    {arr.productName}
                  </Typography>
                  <Box
                    sx={{
                      mr: { xl: 3, lg: 3, md: 3, sm: 3, xs: 3 },
                      mt: { xl: 8, lg: 8, md: 8, sm: 8, xs: 8 },
                    }}
                    onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                      e.stopPropagation();
                      if (save) {
                        dispatch(cartActions.addProductToCart(arr));
                      } else {
                        setOpen(true);
                      }
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
              </Box>
            </Grid>
          ))
        ) : (
          <Typography>No product Found</Typography>
        )}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 10 }}>
        <Pagination
          count={totalPage}
          variant="outlined"
          shape="rounded"
          onChange={(event: React.ChangeEvent<unknown>, page: number) => {
            setCurrentPage(page);
          }}
        />
      </Box>
    </Box>
  );
}

export default FilterGrid;
