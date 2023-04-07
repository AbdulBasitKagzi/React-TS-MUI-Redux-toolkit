import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../layout';
import { useParams } from 'react-router-dom';
import FilterSlider from '../../components/Filter';
import FilterGrid from '../../components/FilterGrid';
import { gender, brandFilter, categoriesFilter } from '../../data/Constants';

// mui imports
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product/product.slice';

interface data {
  id: number;
  value: string;
  slug: string;
}
const CategoryDetail: React.FC = () => {
  const [foundGender, setFoundGender] = useState<data>();
  const [foundBrand, setFoundBrand] = useState<data>();
  const [foundCategory, setFoundCategory] = useState<data>();
  const [filterQuery, setFilterQuery] = useState<{
    gender: number;
    brands: Array<number> | null;
    categories: Array<number> | null;
    sizes: Array<number> | null;
    priceRange: Array<number>;
  }>({ gender: 1, brands: [], categories: [], sizes: [], priceRange: [] });
  const { id, type } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(productActions.filterByHuman({ id, type }));
  // }, [id, type, dispatch]);

  useEffect(() => {
    setFoundGender(gender.find(gender => gender.slug === id));
  }, [id, type]);

  useEffect(() => {
    setFoundBrand(brandFilter.find(brand => brand.slug === type));
  }, [id, type]);

  useEffect(() => {
    console.log('new', foundBrand, foundGender, foundCategory);
  }, [foundBrand, foundGender, foundCategory]);

  // const [category, setCategory] = useState<{ id: number; value: string }>();
  useEffect(() => {
    setFoundCategory(
      categoriesFilter?.find(
        (category: { id: number; value: string; slug: string }) => category?.slug === type
      )
    );
  }, [id, type]);
  // console.log(category);

  useEffect(() => {
    if (foundGender?.id) {
      setFilterQuery(prev => ({
        ...prev,
        gender: foundGender?.id
      }));
    }
  }, [foundGender]);

  useEffect(() => {
    if (foundBrand?.id) {
      setFilterQuery(prev => ({
        ...prev,
        brands: [foundBrand.id]
      }));
    }
  }, [foundBrand]);

  useEffect(() => {
    if (foundCategory?.id) {
      setFilterQuery(prev => ({
        ...prev,
        categories: [foundCategory.id]
      }));
    }
  }, [foundCategory]);

  // const { filter } = useSelector((state: RootState) => state.product);

  return (
    <>
      <Layout>
        <Box
          sx={{
            maxWidth: '1600px',
            mx: 'auto'
          }}>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Jost',
                fontWeight: 700,
                fontSize: '25px',
                textAlign: 'left',
                ml: '4%',
                display: {
                  xl: 'block',
                  lg: 'block',
                  md: 'block',
                  sm: 'block',
                  xs: 'none'
                },
                mt: { sm: '2rem', md: '9.5rem' }
              }}>
              Filter
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <FilterSlider filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
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
