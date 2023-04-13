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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableTemporaryDrawer from '../testNavbar';

type Anchor = 'bottom';

const drawerWidth = 275;

interface filterProps {
  filterQuery: {
    gender: number;
    brands: Array<number>;
    categories: Array<number> | null;
    sizes: Array<number> | null;
    priceRange: { min: number; max: number };
  };
  setFilterQuery: React.Dispatch<
    React.SetStateAction<{
      gender: number;
      brands: Array<number>;
      categories: Array<number> | null;
      sizes: Array<number> | null;
      priceRange: { min: number; max: number };
    }>
  >;
  selectedCategory: string[];
  selectedBrand: string[];
  setCategory: (value: any) => void;
  setBrand: (value: any) => void;
  state: {
    bottom: boolean;
  };
  toggleDrawer: (anchor: 'bottom', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function FilterSlider({
  filterQuery,
  setFilterQuery,
  selectedCategory,
  setCategory,
  selectedBrand,
  setBrand,
  state,
  toggleDrawer
}: filterProps): JSX.Element {
  const theme = useTheme();
  const [min_max, setMin_Max] = useState<Array<number>>([
    filterQuery.priceRange.min,
    filterQuery.priceRange.max
  ]);

  const dispatch = useDispatch();

  const handleBrandFilter = (value: number, isChecked: boolean, brand: string) => {
    if (isChecked) {
      setBrand((prev: string[]) => [...prev, brand]);

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
      setBrand(selectedBrand.filter(state => state !== brand));
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
  const handleCategoriesFilter = (value: number, isChecked: boolean, category: string) => {
    if (isChecked) {
      setCategory((prev: string[]) => [...prev, category]);
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
      setCategory(selectedCategory.filter(state => state !== category));
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

  // const [state, setState] = useState({
  //   bottom: false
  // });

  // const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
  //   ) {
  //     return;
  //   }
  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor: Anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}>
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>Abdulbasit</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Box
  //       sx={{
  //         width: '240px',
  //         backgroundColor: theme.palette.info.light,
  //         ml: 2,
  //         mt: 2
  //       }}>
  //       <Box sx={{ mx: 4, textAlign: 'left' }}>
  //         <Typography
  //           sx={{
  //             fontFamily: 'Jost',
  //             fontWeight: '600',
  //             fontSize: '16px',
  //             letterSpacing: '0.02em',
  //             textTransform: 'uppercase',
  //             color: theme.palette.warning.main,
  //             mb: 3,
  //             pt: 1
  //           }}>
  //           PRICES
  //         </Typography>

  //         <Box
  //           sx={{
  //             display: 'flex',
  //             justifyContent: 'space-between'
  //           }}>
  //           <Typography
  //             id="range-slider"
  //             gutterBottom
  //             sx={{
  //               fontFamily: 'Jost',
  //               fontWeight: '400',
  //               fontSize: '20px',
  //               letterSpacing: '0.02em',
  //               color: theme.palette.warning.light
  //             }}>
  //             Range
  //           </Typography>
  //           <Typography
  //             id="range-slider"
  //             gutterBottom
  //             sx={{
  //               fontFamily: 'Jost',
  //               fontWeight: '500',
  //               fontSize: { sm: '20px', xs: '16px' },
  //               letterSpacing: '0.02em',
  //               color: theme.palette.warning.main
  //             }}>
  //             ${filterQuery.priceRange.min}-${filterQuery.priceRange.max}
  //           </Typography>
  //         </Box>

  //         <Slider
  //           sx={{
  //             color: theme.palette.warning.dark,
  //             width: '180px'
  //           }}
  //           onChange={(_, value) => {
  //             setPriceRange(value as [number, number]);
  //           }}
  //           valueLabelDisplay="auto"
  //           aria-labelledby="range-slider"
  //           value={min_max}
  //           max={1000}
  //           min={1}
  //           name="price"
  //           disableSwap
  //           getAriaLabel={() => 'Minimum distance'}
  //         />
  //       </Box>

  //       <FormGroup sx={{ mx: 4, textAlign: 'left', mt: 4, height: '1300px' }}>
  //         <Typography
  //           textAlign="left"
  //           sx={{
  //             fontFamily: 'Jost',
  //             fontWeight: 600,
  //             fontSize: '16px',
  //             color: theme.palette.warning.main,
  //             mt: 4,
  //             mb: 3
  //           }}>
  //           Brands
  //         </Typography>
  //         {brandFilter.map(brand => (
  //           <FormControlLabel
  //             key={brand.id}
  //             control={<Checkbox />}
  //             label={brand.value}
  //             sx={{ color: theme.palette.warning.main }}
  //             onClick={(e: MouseEvent<HTMLLabelElement>) => {
  //               handleBrandFilter(
  //                 brand.id,
  //                 (e.target as unknown as { checked: boolean }).checked,
  //                 brand.slug
  //               );
  //             }}
  //           />
  //         ))}
  //         <Typography
  //           textAlign="left"
  //           sx={{
  //             fontFamily: 'Jost',
  //             fontWeight: 600,
  //             fontSize: '16px',
  //             color: theme.palette.warning.main,
  //             mt: 10,

  //             mb: 3
  //           }}>
  //           Categories
  //         </Typography>
  //         {categoriesFilter.map(category => (
  //           <FormControlLabel
  //             key={category.id}
  //             control={<Checkbox />}
  //             label={category.value}
  //             sx={{ color: theme.palette.warning.main }}
  //             onClick={(e: MouseEvent<HTMLLabelElement>) => {
  //               handleCategoriesFilter(
  //                 category.id,
  //                 (e.target as unknown as { checked: boolean }).checked,
  //                 category.slug
  //               );
  //             }}
  //           />
  //         ))}
  //         <Typography
  //           textAlign="left"
  //           sx={{
  //             fontFamily: 'Jost',
  //             fontWeight: 600,
  //             fontSize: '16px',
  //             color: theme.palette.warning.main,
  //             mt: 10,

  //             mb: 3
  //           }}>
  //           Size
  //         </Typography>
  //         {sizeFilter.map(size => (
  //           <FormControlLabel
  //             key={size.id}
  //             control={<Checkbox />}
  //             label={size.value}
  //             sx={{ color: theme.palette.warning.main }}
  //             onClick={(e: MouseEvent<HTMLLabelElement>) => {
  //               handleSizeFilter(size.id, (e.target as unknown as { checked: boolean }).checked);
  //             }}
  //           />
  //         ))}
  //       </FormGroup>
  //     </Box>
  //   </Box>
  // );

  const desktop_filter = () => {
    return (
      <>
        <Box
          sx={{
            width: { lg: '450px', sm: '245px' },
            height: 1600,
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
                width: { lg: '280px', sm: '180px' }
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
            {brandFilter.map(brand => {
              return (
                <FormControlLabel
                  key={brand.id}
                  control={
                    <Checkbox
                      color="primary"
                      style={{ color: '#374151', border: '1.5 px solid ' }}
                      checked={selectedBrand?.includes(brand.slug) ? true : false}
                    />
                  }
                  label={brand.value}
                  onClick={(e: MouseEvent<HTMLLabelElement>) => {
                    handleBrandFilter(
                      brand.id,
                      (e.target as unknown as { checked: boolean }).checked,
                      brand.slug
                    );
                  }}
                  htmlFor="my-checkbox"
                />
              );
            })}
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
              <>
                <FormControlLabel
                  key={category.id}
                  control={
                    <Checkbox
                      checked={selectedCategory?.includes(category.slug) ? true : false}
                      color="primary"
                      style={{ color: '#374151', border: '1.5 px solid ' }}
                      onChange={e => {
                        handleCategoriesFilter(category.id, e.target.checked, category.slug);
                      }}
                    />
                  }
                  label={category.value}
                  htmlFor="my-checkbox"
                />
              </>
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
                control={<Checkbox color="primary" style={{ color: '#374151', border: '1.5 px solid ' }} />}
                label={size.value}
                onClick={(e: MouseEvent<HTMLLabelElement>) => {
                  handleSizeFilter(size.id, (e.target as unknown as { checked: boolean }).checked);
                }}
                htmlFor="my-checkbox"
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
      {desktop}
      {/* <SwipeableDrawer
        anchor="bottom"
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}>
        {list('bottom')}
      </SwipeableDrawer> */}
      <SwipeableTemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
    </>
  );
}
