import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import FilterSlider from "./Filter";

const CategoryDetail: React.FC = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Layout>
        Category detail page
        <FilterSlider />
      </Layout>
    </>
  );
};

export default CategoryDetail;
