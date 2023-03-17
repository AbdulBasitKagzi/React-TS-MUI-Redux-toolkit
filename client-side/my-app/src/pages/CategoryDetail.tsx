import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import FilterSlider from "../components/Filter";
import FilterGrid from "../components/FilterGrid";
import { categoriesFilter } from "../assets/Constants";
// mui imports
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { RootState } from "../store/userSlice/store";

const CategoryDetail: React.FC = () => {
  const { id, type } = useParams();

  const [category, setCategory] = useState<{ id: number; value: string }>();
  useEffect(() => {
    setCategory(
      categoriesFilter?.find(
        (category: { id: number; value: string }) =>
          category?.id === Number(type)
      )
    );
  }, [type]);
  console.log(category);
  const { filter } = useSelector((state: RootState) => state.product);
  return (
    <>
      <Layout>
        <Box
          sx={{
            fontFamily: "Jost",
            fontSize: {
              xl: "50px",
              lg: "50px",

              md: "50px",
              sm: "50px",
              xs: "32px",
            },
            fontWeight: 700,
            mt: { xl: 8, lg: 8, md: 8, sm: -4, xs: -4 },
          }}
        >
          {id?.toUpperCase()} {category?.value}
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "97px",
            height: "27px",
            ml: {
              xl: "560px",
              lg: "515px",
              md: "305px",
              sm: "243px",
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
      </Layout>
    </>
  );
};

export default CategoryDetail;
