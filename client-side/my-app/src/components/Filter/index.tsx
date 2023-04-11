import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { productActions } from '../../store/product/product.slice';
import { MouseEvent } from 'react';

import { brandFilter, categoriesFilter, sizeFilter } from '../../data/Constants';

// mui imports
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { Drawer } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useTheme } from '@mui/material';

const drawerWidth = 275;

interface filterProps {
  filterQuery: {
    gender: number;
    brands: Array<number> | null;
    categories: Array<number> | null;
    sizes: Array<number> | null;
    priceRange: { min: number; max: number };
  };
  setFilterQuery: React.Dispatch<
    React.SetStateAction<{
      gender: number;
      brands: Array<number> | null;
      categories: Array<number> | null;
      sizes: Array<number> | null;
      priceRange: { min: number; max: number };
    }>
  >;
}

export default function FilterSlider({ filterQuery, setFilterQuery }: filterProps): JSX.Element {
  const theme = useTheme();
  const [min_max, setMin_Max] = useState<Array<number>>([
    filterQuery.priceRange.min,
    filterQuery.priceRange.max
  ]);

  const dispatch = useDispatch();

  const handleBrandFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setFilterQuery(prevValue => {
        if (prevValue.brands) {
          return {
            ...prevValue,
            brands: [...prevValue.brands, value]
          };
        } else {
          return {
            ...prevValue,
            brands: [value]
          };
        }
      });
    } else {
      setFilterQuery(prevValue => {
        if (prevValue.brands) {
          return {
            ...prevValue,
            brands: [...prevValue.brands.filter(filter => filter !== value)]
          };
        } else {
          return {
            ...prevValue,
            brands: [value]
          };
        }
      });
    }
  };
  const handleCategoriesFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setFilterQuery(prevValue => {
        if (prevValue.categories) {
          return {
            ...prevValue,
            categories: [...prevValue.categories, value]
          };
        } else {
          return {
            ...prevValue,
            categories: [value]
          };
        }
      });
    } else {
      setFilterQuery(prevValue => {
        if (prevValue.categories) {
          return {
            ...prevValue,
            categories: [...prevValue.categories.filter(filter => filter !== value)]
          };
        } else {
          return {
            ...prevValue,
            categories: [value]
          };
        }
      });
    }
  };
  const handleSizeFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setFilterQuery(prevValue => {
        if (prevValue.sizes) {
          return {
            ...prevValue,
            sizes: [...prevValue.sizes, value]
          };
        } else {
          return {
            ...prevValue,
            sizes: [value]
          };
        }
      });
    } else {
      setFilterQuery(prevValue => {
        if (prevValue.sizes) {
          return {
            ...prevValue,
            sizes: [...prevValue.sizes.filter(filter => filter !== value)]
          };
        } else {
          return {
            ...prevValue,
            sizes: [value]
          };
        }
      });
    }
  };

  useEffect(() => {
    dispatch(productActions.filterProducts(filterQuery));
    setMin_Max([filterQuery.priceRange.min, filterQuery.priceRange.max]);
  }, [filterQuery, dispatch]);

  // to open menu in mobile view
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const setPriceRange = (value: Array<number>) => {
    setFilterQuery(prev => ({
      ...prev,
      priceRange: { min: value[0], max: value[1] }
    }));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          width: '240px',
          backgroundColor: theme.palette.info.light,
          ml: 2,
          mt: 2
        }}>
        <Box sx={{ mx: 4, textAlign: 'left' }}>
          <Typography
            sx={{
              fontFamily: 'Jost',
              fontWeight: '600',
              fontSize: '16px',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: theme.palette.warning.main,
              mb: 3,
              pt: 1
            }}>
            PRICES
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Typography
              id="range-slider"
              gutterBottom
              sx={{
                fontFamily: 'Jost',
                fontWeight: '400',
                fontSize: '20px',
                letterSpacing: '0.02em',
                color: theme.palette.warning.light
              }}>
              Range
            </Typography>
            <Typography
              id="range-slider"
              gutterBottom
              sx={{
                fontFamily: 'Jost',
                fontWeight: '500',
                fontSize: { sm: '20px', xs: '16px' },
                letterSpacing: '0.02em',
                color: theme.palette.warning.main
              }}>
              ${filterQuery.priceRange.min}-${filterQuery.priceRange.max}
            </Typography>
          </Box>

          <Slider
            sx={{
              color: theme.palette.warning.dark,
              width: '180px'
            }}
            onChange={(_, value) => {
              setPriceRange(value as [number, number]);
            }}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            value={min_max}
            max={1000}
            min={1}
            name="price"
            disableSwap
            getAriaLabel={() => 'Minimum distance'}
          />
        </Box>

        <FormGroup sx={{ mx: 4, textAlign: 'left', mt: 4, height: '1300px' }}>
          <Typography
            textAlign="left"
            sx={{
              fontFamily: 'Jost',
              fontWeight: 600,
              fontSize: '16px',
              color: theme.palette.warning.main,
              mt: 4,
              mb: 3
            }}>
            Brands
          </Typography>
          {brandFilter.map(brand => (
            <FormControlLabel
              key={brand.id}
              control={<Checkbox />}
              label={brand.value}
              sx={{ color: theme.palette.warning.main }}
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                handleBrandFilter(brand.id, (e.target as unknown as { checked: boolean }).checked);
              }}
            />
          ))}
          <Typography
            textAlign="left"
            sx={{
              fontFamily: 'Jost',
              fontWeight: 600,
              fontSize: '16px',
              color: theme.palette.warning.main,
              mt: 10,

              mb: 3
            }}>
            Categories
          </Typography>
          {categoriesFilter.map(category => (
            <FormControlLabel
              key={category.id}
              control={<Checkbox />}
              label={category.value}
              sx={{ color: theme.palette.warning.main }}
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                handleCategoriesFilter(category.id, (e.target as unknown as { checked: boolean }).checked);
              }}
            />
          ))}
          <Typography
            textAlign="left"
            sx={{
              fontFamily: 'Jost',
              fontWeight: 600,
              fontSize: '16px',
              color: theme.palette.warning.main,
              mt: 10,

              mb: 3
            }}>
            Size
          </Typography>
          {sizeFilter.map(size => (
            <FormControlLabel
              key={size.id}
              control={<Checkbox />}
              label={size.value}
              sx={{ color: theme.palette.warning.main }}
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                handleSizeFilter(size.id, (e.target as unknown as { checked: boolean }).checked);
              }}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );

  const desktop_filter = () => {
    return (
      <>
        <Box
          sx={{
            width: { md: '450px', sm: '245px' },
            display: {
              sm: 'block',
              xs: 'none'
            },

            backgroundColor: theme.palette.info.light,
            ml: { xl: 8, lg: 6, md: 4, sm: 2 }
          }}>
          <Box sx={{ mx: 4, textAlign: 'left', mt: 8 }}>
            <Typography
              sx={{
                fontFamily: 'Jost',
                fontWeight: '600',
                fontSize: '16px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: theme.palette.warning.main,
                mb: 3
              }}>
              PRICES
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              <Typography
                id="range-slider"
                sx={{
                  fontFamily: 'Jost',
                  fontWeight: '400',
                  fontSize: '20px',
                  letterSpacing: '0.02em',
                  color: theme.palette.warning.light,
                  mb: 3
                }}>
                Range
              </Typography>
              <Typography
                id="range-slider"
                sx={{
                  fontFamily: 'Jost',
                  fontWeight: '500',
                  fontSize: '20px',
                  letterSpacing: '0.02em',
                  color: theme.palette.warning.main,
                  mb: 3
                }}>
                ${filterQuery.priceRange.min}-${filterQuery.priceRange.max}
              </Typography>
            </Box>
            <Slider
              sx={{
                color: theme.palette.warning.dark,
                width: { md: '280px', sm: '180px' }
              }}
              onChange={(_, value) => {
                setPriceRange(value as [number, number]);
              }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              value={min_max}
              max={1000}
              min={1}
              name="price"
              disableSwap
              getAriaLabel={() => 'Minimum distance'}
            />
          </Box>

          <FormGroup sx={{ mx: 4, textAlign: 'left' }}>
            <Typography
              textAlign="left"
              sx={{
                fontFamily: 'Jost',
                fontWeight: 600,
                fontSize: '16px',
                color: theme.palette.warning.main,
                mt: 10,
                mb: { sm: 3 }
              }}>
              Brands
            </Typography>
            {brandFilter.map(brand => (
              <FormControlLabel
                key={brand.id}
                control={<Checkbox />}
                label={brand.value}
                sx={{ color: theme.palette.warning.main }}
                onClick={(e: MouseEvent<HTMLLabelElement>) => {
                  handleBrandFilter(brand.id, (e.target as unknown as { checked: boolean }).checked);
                }}
              />
            ))}
            <Typography
              textAlign="left"
              sx={{
                fontFamily: 'Jost',
                fontWeight: 600,
                fontSize: '16px',
                color: theme.palette.warning.main,
                mt: 10,
                mb: { sm: 3 }
              }}>
              Categories
            </Typography>
            {categoriesFilter.map(category => (
              <FormControlLabel
                key={category.id}
                control={<Checkbox />}
                label={category.value}
                sx={{ color: theme.palette.warning.main }}
                onClick={(e: MouseEvent<HTMLLabelElement>) => {
                  handleCategoriesFilter(category.id, (e.target as unknown as { checked: boolean }).checked);
                }}
              />
            ))}
            <Typography
              textAlign="left"
              sx={{
                fontFamily: 'Jost',
                fontWeight: 600,
                fontSize: '16px',
                color: theme.palette.warning.main,
                mt: 10,

                mb: { sm: 3 }
              }}>
              Size
            </Typography>
            {sizeFilter.map(size => (
              <FormControlLabel
                key={size.id}
                control={<Checkbox />}
                label={size.value}
                sx={{ color: theme.palette.warning.main }}
                onClick={(e: MouseEvent<HTMLLabelElement>) => {
                  handleSizeFilter(size.id, (e.target as unknown as { checked: boolean }).checked);
                }}
              />
            ))}
          </FormGroup>
        </Box>
      </>
    );
  };

  let desktop = desktop_filter();

  return (
    <>
      <Box
        onClick={handleDrawerToggle}
        sx={{
          display: {
            sm: 'none',
            xs: 'block'
          },
          mt: '5rem'
        }}>
        <FilterListIcon />
      </Box>
      {desktop}

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              marginTop: '110px'
            }
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
