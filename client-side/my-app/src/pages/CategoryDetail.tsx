import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import FilterSlider from "../components/Filter";
import FilterGrid from "../components/FilterGrid";
import { Box } from "@mui/system";

const CategoryDetail: React.FC = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Layout>
        Category detail page
        <Box sx={{ display: "flex" }}>
          <FilterSlider />
          <FilterGrid />
        </Box>
      </Layout>
    </>
  );
};

export default CategoryDetail;
