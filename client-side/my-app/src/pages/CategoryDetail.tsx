import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import FilterSlider from "../components/Filter";
import FilterGrid from "../components/FilterGrid";
import { gender, brandFilter, categoriesFilter } from "../assets/Constants";

// mui imports
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { RootState } from "../store/userSlice/store";
import { useDispatch } from "react-redux";
import { productActions } from "../store/userSlice/productSlice";
import Footer from "../components/Footer";

const CategoryDetail: React.FC = () => {
  const [foundGender, setFoundGender] = useState<{
    id: number;
    value: string;
    slug: string;
  }>();
  const [foundBrand, setFoundBrand] = useState<{
    id: number;
    value: string;
    slug: string;
  }>();
  const [foundCategory, setFoundCategory] = useState<{
    id: number;
    value: string;
    slug: string;
  }>();
  const { id, type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.filterByHuman({ id, type }));
  }, [id, type, dispatch]);

  useEffect(() => {
    setFoundGender(
      gender.find(
        (gender: { id: number; value: string; slug: string }) =>
          gender.slug === id
      )
    );
  }, [id, type]);

  useEffect(() => {
    setFoundBrand(
      brandFilter.find(
        (brand: { id: number; value: string; slug: string }) =>
          brand.slug === type
      )
    );
  }, [id, type]);

  useEffect(() => {
    console.log("new", foundBrand, foundGender, foundCategory);
  }, [foundBrand, foundGender, foundCategory]);

  // const [category, setCategory] = useState<{ id: number; value: string }>();
  useEffect(() => {
    setFoundCategory(
      categoriesFilter?.find(
        (category: { id: number; value: string; slug: string }) =>
          category?.slug === type
      )
    );
  }, [id, type]);
  // console.log(category);

  const { filter } = useSelector((state: RootState) => state.product);
  return (
    <>
      <Layout>
        <Box
          sx={{
            maxWidth: "1600px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              mt: { xl: 8, lg: 8, md: 8, sm: -4, xs: 2 },
              // width: { xl: "509px", lg: "509px", md: "509px", sm: "509px" },
              // width: "100%",
              // display: "inline-block",
            }}
          >
            <Typography
              sx={{
                position: "relative",
                display: "inline-block",
                // left: { xl: "565px", lg: "530px", md: "260px", sm: "211px" },
                textAlign: "center",
                fontFamily: "Jost",
                fontSize: {
                  xl: "44px",
                  lg: "44px",
                  md: "40px",
                  sm: "35px",
                  xs: "28px",
                },
                fontWeight: 700,
              }}
            >
              {foundGender?.value} {foundCategory?.value} {foundBrand?.value}{" "}
              {foundBrand?.value ? "Products" : ""}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "inline-block",
              // textAlign: "center",
              textAlign: "left",
              // width: "97px",
              // height: "27px",
              mr: {
                xl: "250px",
                lg: "260px",
                md: "225px",
                sm: "185px",
                xs: "135px",
              },
            }}
          >
            <Typography sx={{ display: "inline-block" }}>
              {filter.length} results
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "left",
                ml: "4%",
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              Filter
            </Typography>
            <Box sx={{ display: "flex" }}>
              <FilterSlider />
              <FilterGrid />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Layout>
    </>
  );
};

export default CategoryDetail;
