import { useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cart.slice';
import Layout from '../../layout';
import { RootState } from '../../store/store';
import { sizeFilter, colorLists } from '../../data/Constants';
import DescriptionAlerts from '../../components/Alert';
import { useNavigate, useParams } from 'react-router-dom';
import { productActions } from '../../store/product/product.slice';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import style from './imageSwiper.module.css';
import classes from './swiper.module.css';
import './imageDetail.css';

// import required modules
import { Navigation } from 'swiper';

// mui imports
import { Box, Button, Typography, useTheme } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WarningModel from '../../components/WarningModel';
import { assets } from '../../assets';
import AuthGuard from '../../routes/AuthGuard';
import { SelectedProductProps } from '../../store/product/product.types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ItemDetailView: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { selectedProduct } = useSelector((state: RootState) => state.product);
  const { cartProducts, added } = useSelector((state: RootState) => state.cart);
  const [tabs, setTabs] = useState<Array<string>>(['Info', 'Brand', 'Delivery']);
  const sliderRef = useRef<SwiperRef | null>(null);
  const slider = useRef<SwiperRef | null>(null);

  const [stars, setStars] = useState<number>(5);
  const [sizes, setSizes] = useState<
    {
      id: number;
      value: string;
      slug: string;
    }[]
  >();
  const [color, setColor] = useState<
    {
      id: number;
      name: string;
      haxValue: string;
    }[]
  >();
  const [openUp, setOpenUp] = useState<boolean>(false);
  const [image, setImage] = useState<string | undefined>();
  const [imageValue, setImageValue] = useState<number>(0);
  const [save, setSave] = useState<string>(localStorage.getItem('isAuth') || '');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedProduct) dispatch(productActions.selectedProduct(params));
  }, []);

  useEffect(() => {
    let fitleredata;
    if (selectedProduct?.size) {
      fitleredata = selectedProduct?.size.map(data => {
        return sizeFilter.filter(fill => fill.id === data);
      });
    }
    setSizes(fitleredata?.flatMap(i => i));
  }, [selectedProduct]);

  useEffect(() => {
    if (selectedProduct?.color) {
      let filteredColor: { id: number; name: string; haxValue: string }[] = [];
      selectedProduct?.color.map(col => {
        return colorLists.map(color => {
          if (color.id === col) {
            return filteredColor.push(color);
          }
        });
      });
      setColor(filteredColor);
    }
  }, [selectedProduct]);

  useEffect(() => {
    setOpenUp(added);
  }, [cartProducts]);

  const handlePrev = useCallback((value: string) => {
    if (value === 'slider' && slider.current) {
      slider.current.swiper.slidePrev();
    }
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback((value: string) => {
    if (value === 'slider' && slider.current) {
      setImage('');
      slider.current.swiper.slideNext();
    }
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const printStars = (reviewStars: number | undefined) => {
    let result = [];
    if (reviewStars) {
      for (let i = 0; i < reviewStars; i++) {
        result.push(
          <Box sx={{ pl: 1 }}>
            <img src={assets.icons.Star_Active} alt="filled star" />
          </Box>
        );
      }
      return <Box sx={{ display: 'flex' }}>{result}</Box>;
    }
  };
  const printRemainingStars = (stars: number) => {
    let result = [];

    for (let i = 1; i <= stars; i++) {
      result.push(
        <Box sx={{}}>
          <img src={assets.icons.Star_Disabled} alt="filled star" />
        </Box>
      );
    }
    return <Box sx={{ display: 'flex' }}>{result}</Box>;
  };

  // for tab
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const [value, setValue] = useState(0);
  const [sizeValue, setSizeValue] = useState(0);
  const [colorValue, setColorValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSizeChange = (event: React.SyntheticEvent, newValue: number) => {
    setSizeValue(newValue);
  };
  const handleColorChange = (event: React.SyntheticEvent, newValue: number) => {
    setColorValue(newValue);
  };

  return (
    <AuthGuard>
      <div>
        <Layout>
          <Box sx={{ maxWidth: '1600px', mx: 'auto' }}>
            {openUp && (
              <DescriptionAlerts
                type="success"
                title="Success"
                message="Product successfully added to cart"
                openUp={openUp}
                setOpenUp={setOpenUp}
                closeDuration={2000}
                backgroundColor="#4caf50"
              />
            )}
            {open && <WarningModel open={open} setOpen={setOpen} />}
            <Box
              sx={{
                width: '90%',
                display: { sm: 'flex' },
                gap: '55px',
                mx: 'auto',
                mt: 6
              }}>
              <Box
                sx={{
                  maxWidth: {
                    sm: '50%',
                    xs: '100%'
                  },
                  mx: 'auto',
                  position: 'relative'
                }}>
                <Box
                  sx={{
                    position: 'relative',
                    top: { sm: '40px' }
                  }}>
                  <Swiper
                    // navigation={true}
                    ref={slider}
                    modules={[Navigation]}
                    className="mySwiper">
                    {selectedProduct?.productImages?.map(images => (
                      <SwiperSlide className={style.swiperImage} key={images.id}>
                        {image ? (
                          <Box sx={{ width: '280px', height: '436px' }}>
                            <img
                              src={image}
                              alt="women"
                              style={{
                                borderInlineColor: 'black',
                                border: 2,
                                borderColor: '#E5E5EA',
                                borderStyle: 'solid',
                                borderRadius: 10,
                                boxShadow: '0px 10px 10px',
                                marginBottom: '10px',
                                width: '100%',
                                height: '95%'
                              }}
                            />
                          </Box>
                        ) : (
                          <Box sx={{ width: '280px', height: '436px' }}>
                            <img
                              src={images.productImage}
                              alt="women"
                              style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%'
                              }}
                            />
                          </Box>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Box
                    sx={{
                      position: 'absolute',
                      zIndex: 2,
                      display: {
                        sm: 'block',
                        xs: 'none'
                      },
                      top: { sm: '45%' },
                      left: { md: '3%', sm: '-9%' }
                    }}
                    // className={classes.prev_arrow}
                    onClick={() => handlePrev('slider')}>
                    <img src={assets.icons.Left_Arrow_Icon} alt="previous" width=" 20px" height="30px" />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      zIndex: 2,
                      display: {
                        xl: 'block',
                        lg: 'block',
                        md: 'block',
                        sm: 'block',
                        xs: 'none'
                      },

                      top: { sm: '45%' },
                      left: { md: '96%', sm: '103%' }
                    }}
                    // className={classes.next_arrow}
                    onClick={() => handleNext('slider')}>
                    <img src={assets.icons.Right_Arrow_Icon} alt="right" width=" 20px" height="30px" />
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: 'relative',
                    top: {
                      xl: '120px',
                      lg: '50px',
                      md: '50px',
                      sm: '45px'
                      // xs: "510px",
                    }
                  }}>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    ref={sliderRef}
                    // navigation={true}
                    // modules={[Navigation]}
                    className={`mySwiper ${classes.position}`}>
                    {selectedProduct?.productImages?.map((images, index: number) => (
                      <SwiperSlide className={classes.selectedImage} key={images.id}>
                        {index === imageValue ? (
                          <img
                            src={images.productImage}
                            alt="women"
                            style={{
                              borderInlineColor: 'black',
                              border: 2,
                              borderColor: '#E5E5EA',
                              borderStyle: 'solid',
                              borderRadius: 10,
                              boxShadow: '0px 10px 10px',
                              marginBottom: '10px',
                              objectFit: 'contain',
                              cursor: 'pointer'
                            }}
                          />
                        ) : (
                          <img
                            src={images.productImage}
                            alt="women"
                            style={{
                              objectFit: 'contain',
                              cursor: 'pointer'
                            }}
                            onClick={() => {
                              setImage(images.productImage);
                              setImageValue(index);
                            }}
                          />
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Box
                    sx={{
                      position: 'absolute',
                      zIndex: 2,
                      display: {
                        xl: 'block',
                        lg: 'block',
                        md: 'block',
                        sm: 'none',
                        xs: 'none'
                      },

                      top: '38%',
                      left: { lg: '2%', md: '1%' }
                    }}
                    onClick={() => handlePrev('sliderRef')}>
                    <img
                      src={assets.icons.Left_Arrow_Icon}
                      alt="previous"
                      className="icons"
                      width=" 20px"
                      height="30px"
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      zIndex: 2,
                      display: {
                        xl: 'block',
                        lg: 'block',
                        md: 'block',
                        sm: 'none',
                        xs: 'none'
                      },

                      top: '38%',
                      left: { xl: '94%', lg: '96%', md: '97%' }
                    }}
                    onClick={() => handleNext('sliderRef')}>
                    <img
                      src={assets.icons.Right_Arrow_Icon}
                      alt="right"
                      className="icons"
                      width=" 20px"
                      height="30px"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  maxWidth: {
                    sm: '50%',
                    xs: '100%'
                  },
                  mx: 'auto'
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box
                    sx={{
                      width: '142px',
                      height: '48px',
                      background: theme.palette.success.contrastText,
                      borderRadius: 3,
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      ml: { sm: 1, xs: 2 },
                      mt: { lg: 1, md: 2, sm: 1, xs: 2 }
                    }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '14px',
                        my: 'auto',
                        color: theme.palette.primary.light
                      }}>
                      Popular
                    </Typography>
                  </Box>
                  <img
                    className="heart"
                    src={assets.icons.ADD_TO_FAVOURITE}
                    alt="heart"
                    width="50px"
                    height="64px"
                  />
                </Box>

                <Box
                  sx={{
                    textAlign: 'left',
                    wordBreak: 'break-all',
                    pl: { xl: 0, lg: 0, md: 0, sm: 2, xs: 2 }
                  }}>
                  <Typography
                    sx={{
                      mt: 3,
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: {
                        xl: '48px',
                        lg: '48px',
                        md: '48px',
                        sm: '35px',
                        xs: '28px'
                      },
                      color: theme.palette.primary.light
                    }}>
                    {selectedProduct?.productName}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', pt: 2, gap: 1 }}>
                  {printStars(selectedProduct?.reviewRate)}
                  {selectedProduct?.remainingStars && printRemainingStars(selectedProduct?.remainingStars)}

                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: theme.palette.primary.light
                    }}>
                    132 Reviews
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    mt: 6,
                    pr: { xl: 2, lg: 2, md: 2, sm: 2, xs: 2 },
                    pl: { xl: 0, lg: 0, md: 0, sm: 2, xs: 2 }
                  }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      variant="fullWidth"
                      sx={{
                        '.MuiTab-root': {
                          color: theme.palette.primary.light
                        },
                        '.MuiTab-root.Mui-selected': {
                          color: theme.palette.primary.contrastText,
                          pb: 2.5,
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontWeight: 700
                        }
                      }}
                      TabIndicatorProps={{
                        style: { background: '#111827' }
                      }}>
                      {tabs.map((tab: string, index: number) => (
                        <Tab key={index} label={tab} sx={{ fontSize: '16px', color: '#1B2437' }} />
                      ))}
                    </Tabs>
                  </Box>
                  {tabs.map((_, index: number) => (
                    <TabPanel value={value} index={index} key={index}>
                      <Typography
                        sx={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          fontSize: {
                            xl: '16px',
                            lg: '16px',
                            md: '16px',
                            sm: '14px'
                          },
                          textAlign: 'left',
                          wordBreak: 'break-all',
                          color: theme.palette.secondary.dark
                        }}>
                        Dress with tulle and collar Peter Pan from REDValentino (Red Valentino). Peter Pan
                        collar, tulle panels, sleeveless model, concealed back zipper and pleated skirt. Black
                        colour.
                      </Typography>
                    </TabPanel>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { sm: 'unset', xs: 'space-between' },
                    pl: { xl: 0, lg: 0, md: 2, sm: 2, xs: 2 }
                  }}>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'left',
                        mt: 4,
                        mb: 4,
                        p: 1,
                        color: theme.palette.primary.light
                      }}>
                      Sizes
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        p: 1,
                        gap: 2
                      }}>
                      {sizes?.map((size, index: number) =>
                        sizeValue === index ? (
                          <Box
                            // label={size.slug}
                            key={size.id}
                            sx={{
                              width: '81px',
                              height: '45px',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontWeight: 700,
                              color: theme.palette.success.main,
                              background: theme.palette.primary.light,
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: 2
                            }}
                            onClick={event => {
                              dispatch(
                                productActions.addSize({
                                  selectedSize: size.id
                                })
                              );
                              handleSizeChange(event, index);
                            }}>
                            <Typography>{size.slug}</Typography>
                          </Box>
                        ) : (
                          <Box
                            key={size.id}
                            sx={{
                              width: '81px',
                              height: '45px',
                              border: 1,
                              borderColor: theme.palette.info.dark,
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center'
                            }}
                            onClick={event => {
                              dispatch(
                                productActions.addSize({
                                  selectedSize: size.id
                                })
                              );
                              handleSizeChange(event, index);
                            }}>
                            <Typography>{size.slug}</Typography>
                          </Box>
                        )
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ ml: { xl: 14, lg: 11, md: 3 } }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: theme.palette.primary.light,
                        textAlign: 'left',
                        mt: 4,
                        mb: 4,
                        p: 1
                      }}>
                      Colors
                    </Typography>
                    <Box className="colorBox">
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          p: 1,
                          gap: 2
                        }}>
                        {color?.map((col, index: number) =>
                          colorValue === index ? (
                            <Box
                              key={index}
                              sx={{
                                width: '50px',
                                height: '50px',
                                background: `${col.haxValue}`,
                                cursor: 'pointer',
                                borderRadius: 2
                              }}
                              onClick={event => {
                                dispatch(
                                  productActions.addColor({
                                    selectedColor: col.id
                                  })
                                );
                                handleColorChange(event, index);
                              }}
                            />
                          ) : (
                            <Box
                              key={index}
                              sx={{
                                width: '35px',
                                height: '35px',
                                border: 1,
                                background: `${col.haxValue}`,
                                borderColor: `${col.haxValue}`,

                                cursor: 'pointer',
                                borderRadius: 2
                              }}
                              onClick={event => {
                                dispatch(
                                  productActions.addColor({
                                    selectedColor: col.id
                                  })
                                );

                                handleColorChange(event, index);
                              }}
                            />
                          )
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    textAlign: 'left',
                    pl: { sm: 2, xs: 2 }
                  }}>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontWeight: 400,
                      color: theme.palette.primary.light,
                      mt: 4,
                      mb: 4
                    }}>
                    $
                  </Typography>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      fontFamily: 'Inter',
                      fontSize: '34px',
                      fontWeight: 400,
                      color: theme.palette.primary.light,
                      mt: 4,
                      mb: 4,
                      ml: 1
                    }}>
                    {selectedProduct?.productCurrentPrice}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: { sm: 7, xs: 3 },
                    justifyContent: { sm: 'left', xs: 'center' },
                    mt: { sm: 8, xs: 4 },
                    mb: 2
                  }}>
                  <Button
                    variant="outlined"
                    sx={{
                      background: theme.palette.primary.light,
                      maxWidth: '167px',
                      height: '54px',
                      fontSize: '18px',
                      fontFamily: 'Inter',
                      fontWeight: 700,
                      color: theme.palette.success.main,
                      ml: { sm: 1 },
                      borderRadius: 0
                    }}
                    onClick={() => {
                      if (!save) {
                        setOpen(true);
                      } else {
                        dispatch(cartActions.addProductToCart(selectedProduct));
                        navigate('/shippingpage');
                      }
                    }}>
                    Shop Now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      border: 1,
                      borderColor: theme.palette.primary.contrastText,
                      maxWidth: '167px',
                      height: '54px',
                      fontSize: '18px',
                      fontFamily: 'Inter',
                      fontWeight: 700,
                      color: theme.palette.primary.contrastText,
                      mr: { sm: 1 },

                      borderRadius: 0
                    }}
                    onClick={() => {
                      if (!save) {
                        setOpen(true);
                      } else {
                        dispatch(cartActions.addProductToCart(selectedProduct));

                        // dispatch(cartActions.addProductToCart(product));
                      }
                    }}>
                    Add to cart
                  </Button>
                </Box>
                {/* add new element above */}
              </Box>
            </Box>
          </Box>
        </Layout>
      </div>
    </AuthGuard>
  );
};

export default ItemDetailView;
