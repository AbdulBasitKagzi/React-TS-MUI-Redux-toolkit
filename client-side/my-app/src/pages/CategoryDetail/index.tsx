import { useEffect, useState } from 'react';
import Layout from '../../layout';
import { useParams } from 'react-router-dom';
import FilterSlider from '../../components/Filter';
import FilterGrid from '../../components/FilterGrid';
import { gender, brandFilter, categoriesFilter } from '../../data/Constants';

// mui imports
import { Box } from '@mui/system';
import { Typography, useTheme } from '@mui/material';

interface data {
  id: number;
  value: string;
  slug: string;
}
const CategoryDetail: React.FC = () => {
  const theme = useTheme();
  const [foundGender, setFoundGender] = useState<data>();
  const [foundBrand, setFoundBrand] = useState<data>();
  const [foundCategory, setFoundCategory] = useState<data>();
  const [filterQuery, setFilterQuery] = useState<{
    gender: number;
    brands: Array<number> | null;
    categories: Array<number> | null;
    sizes: Array<number> | null;
    priceRange: { min: number; max: number };
  }>({ gender: 1, brands: [], categories: [], sizes: [], priceRange: { min: 200, max: 500 } });
  const { id, type } = useParams();

  useEffect(() => {
    setFoundGender(gender.find(gender => gender.slug === id));
  }, [id, type]);

  useEffect(() => {
    setFoundBrand(brandFilter.find(brand => brand.slug === type));
  }, [id, type]);

  useEffect(() => {
    setFoundCategory(
      categoriesFilter?.find(
        (category: { id: number; value: string; slug: string }) => category?.slug === type
      )
    );
  }, [id, type]);

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
                  sm: 'block',
                  xs: 'none'
                },
                mt: { sm: '2rem', md: '9.5rem' },
                color: theme.palette.primary.dark
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
