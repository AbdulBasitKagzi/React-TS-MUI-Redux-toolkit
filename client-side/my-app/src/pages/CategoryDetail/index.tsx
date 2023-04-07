import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../layout";
import { useParams } from "react-router-dom";
import FilterSlider from "../../components/Filter";
import FilterGrid from "../../components/FilterGrid";
import { gender, brandFilter, categoriesFilter } from "../../data/Constants";

// mui imports
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product/product.slice";

interface data {
  id: number;
  value: string;
  slug: string;
}
const CategoryDetail: React.FC = () => {
  const [foundGender, setFoundGender] = useState<data>();
  const [foundBrand, setFoundBrand] = useState<data>();
  const [foundCategory, setFoundCategory] = useState<data>();
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
                mt: { sm: "2rem", md: "9.5rem" },
              }}
            >
              Filter
            </Typography>
            <Box sx={{ display: "flex" }}>
              <FilterSlider />
              <FilterGrid
                foundGender={foundGender as data}
                foundBrand={foundBrand as data}
                foundCategory={foundCategory as data}
              />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default CategoryDetail;
