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
            mt: { xl: 8, lg: 8, md: 8, sm: -4, xs: 2 },
            width: { xl: "509px", lg: "509px" },
          }}
        >
          <Typography
            sx={{
              position: "relative",
              left: { xl: "495px", lg: "445px", md: "-50px", sm: "15px" },
              // textAlign: "center",
              fontFamily: "Jost",
              fontSize: {
                xl: "44px",
                lg: "44px",
                md: "44px",
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
            textAlign: "center",
            width: "97px",
            height: "27px",
            ml: {
              xl: "570px",
              lg: "525px",
              md: "285px",
              sm: "260px",
              xs: "45px",
            },
          }}
        >
          <Typography>{filter.length} results</Typography>
        </Box>
        <Box
          sx={{
            mr: 205,
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "block",
              xs: "none",
            },
          }}
        >
          <Typography
            sx={{ fontFamily: "Jost", fontSize: "25px", fontWeight: 700 }}
          >
            Filter
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <FilterSlider />
          <FilterGrid />
        </Box>
        <Footer />
      </Layout>
    </>
  );
};

export default CategoryDetail;
