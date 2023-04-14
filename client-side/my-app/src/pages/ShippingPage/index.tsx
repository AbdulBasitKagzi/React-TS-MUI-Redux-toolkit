import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cart.slice';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { sizeFilter, colorLists } from '../../data/Constants';
import Layout from '../../layout';
import { user } from '../../forms/userInformation/userInformation.types';
import { paymentInformation } from '../../forms/userPaymentInformation/userPaymentInformation';

// mui imports
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box, Button, StepIcon, Typography, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { assets } from '../../assets';

// for date and time
import dayjs from 'dayjs';
import DescriptionAlerts from '../../components/Alert';
import AuthGuard from '../../routes/AuthGuard';
import UserInformation from '../../forms/userInformation';
import UserPaymentInformation from '../../forms/userPaymentInformation';
import ConfirmationPage from '../../sections/ConfirmationPage/index';

const ShippingPage: React.FC = () => {
  const theme = useTheme();
  const regexp = /^((0[1-9])|(1[0-2]))[/]*((2[3-9]))$/;
  const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const string = /[a-zA-Z]/;
  const navigate = useNavigate();
  const steps = ['Shipping', 'Billing', 'Confirmation'];
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  console.log('cart', cartProducts);
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  let shipping: number = 64.0;
  let vat_tax: number = 64.0;

  const [date_time, setDate_Time] = useState(dayjs());
  const [selectedValue, setSelectedValue] = useState('creditCard');
  const [userInformation, setUserInformation] = useState<user>({
    firstName: '',
    lastName: '',
    emailaddress: '',
    phoneNumber: '',
    city: 'australia',
    address: '',
    zipCode: '',
    date: date_time.toString(),
    time: date_time.toString()
  });
  const [paymentInformation, setPaymentInformation] = useState<paymentInformation>({
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    radio_buttons: selectedValue
  });

  const [openUp, setOpenUp] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: string;
    title: string;
    message: string;
  }>({
    type: '',
    title: '',
    message: ''
  });

  useEffect(() => {
    cartProducts.length === 0 && navigate('/');
  }, [cartProducts.length, navigate]);

  const filteration = (
    data: Array<number>,
    array: {
      id?: number;
      value?: string;
      slug?: string;
      haxValue?: string;
      name?: string;
    }[]
  ) => {
    let filteredata;
    filteredata = data.map(data => {
      return array.filter(fill => fill.id === data);
    });

    return filteredata;
  };

  const handlePaymentValidation = () => {
    if (paymentInformation.cardName.length === 0) {
      setOpenUp(true);
      setAlert({
        type: 'error',
        title: 'Error',
        message: "Please fill card holder's name."
      });
    } else if (string.test(paymentInformation.cardNumber)) {
      setOpenUp(true);
      setAlert({
        type: 'error',
        title: 'Error',
        message: 'Please enter valid card number.'
      });
      return;
    } else if (paymentInformation.cardNumber.length < 16) {
      setOpenUp(true);
      setAlert({
        type: 'error',
        title: 'Error',
        message: 'Please enter 16 digit card number.'
      });
      return;
    } else if (paymentInformation.cvv.length < 3) {
      setOpenUp(true);
      setAlert({
        type: 'error',
        title: 'Error',
        message: 'Please enter 3 digit CVV number.'
      });
      return;
    } else if (!regexp.test(paymentInformation.expiration)) {
      setOpenUp(true);
      setAlert({
        type: 'error',
        title: 'Error',
        message: 'Please enter correct expiration date.'
      });
      return;
    } else {
      setPage(page + 1);
    }
  };
  function CustomStepIcon(props: any) {
    const { active, completed } = props;
    return (
      <StepIcon
        icon={
          completed ? (
            <img src={assets.icons.stepperComplete} alt="stepperComplete" />
          ) : (
            <img src={assets.icons.stepperIncomplete} alt="stepperIncomplete" />
          )
        }
        active={active}
        completed={completed}
      />
    );
  }

  useEffect(() => {
    let totalAmount: number;
    totalAmount = cartProducts.reduce((acc: number, curr) => {
      totalAmount = acc + curr.quantity * curr.productCurrentPrice;
      return totalAmount;
    }, 0);
    setTotal(totalAmount);
  }, [cartProducts]);

  return (
    <AuthGuard>
      <Box sx={{ maxWidth: '1600px', mx: 'auto' }}>
        {openUp && (
          <DescriptionAlerts
            openUp={openUp}
            setOpenUp={setOpenUp}
            type={alert.type}
            title={alert.title}
            message={alert.message}
            closeDuration={2000}
            backgroundColor="#cc0000"
          />
        )}
        <Layout>
          <Box sx={{}}>
            <Box
              sx={{
                width: {
                  lg: '1000px',
                  md: '725px',
                  sm: '600px',
                  xs: '100%'
                },
                paddingTop: '43px',
                ml: { sm: page === 3 ? 'auto' : 0, xs: 'auto' },
                mr: { sm: page === 3 ? 'auto' : 0, xs: 'auto' }
                // mx: page === 3 ? 'auto' : 0
              }}>
              <Stepper
                activeStep={page}
                alternativeLabel
                sx={{
                  '.MuiStep-root': {
                    color: theme.palette.primary.contrastText
                  },
                  '.Mui-completed': {
                    color: theme.palette.primary.contrastText
                  }
                }}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                sm: 'flex',
                xs: 'block'
              },
              justifyContent: 'space-evenly',
              flexDirection: 'row-reverse'
            }}>
            {page !== 3 && (
              <Box
                sx={{
                  width: { lg: '35%', md: '40%', sm: '50%', xs: '100%' },
                  mt: { xs: 4 },
                  px: { md: 0, sm: 2, xs: 1.5 }
                }}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.info.contrastText,
                    borderRadius: 8
                  }}>
                  <Box sx={{ pt: 2, mb: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '18px',
                        color: theme.palette.info.main,
                        textAlign: 'left',
                        mx: 4
                      }}>
                      Your Order
                    </Typography>
                  </Box>
                  <Divider />
                  {cartProducts.length ? (
                    cartProducts.map(product => (
                      <>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mx: 4,
                            my: 3
                          }}>
                          <Typography
                            sx={{
                              fontFamily: 'Inter',
                              fontWeight: 800,
                              fontSize: '18px',
                              color: theme.palette.info.main,
                              wordBreak: 'break-all'
                            }}>
                            {product.productName}
                          </Typography>
                          <Box
                            sx={{ cursor: 'pointer' }}
                            onClick={() => dispatch(cartActions.removeProduct({ id: product.id }))}>
                            <DeleteOutlineIcon />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mx: 4,
                            my: 3
                          }}>
                          <Box sx={{ width: '75px', height: '65px' }}>
                            <img
                              src={product.productImages[0].productImage}
                              alt="product"
                              width="100%"
                              height="100%"
                            />
                          </Box>
                          <Box>
                            {product.productDescription.length &&
                              product.productDescription.map((desc: string) => (
                                <Box>
                                  <Typography
                                    sx={{
                                      fontFamily: 'Inter',
                                      fontSize: '14px',
                                      color: theme.palette.info.main,
                                      wordBreak: 'break-all',
                                      textAlign: 'left',

                                      pt: 1
                                    }}>
                                    {desc}
                                  </Typography>
                                </Box>
                              ))}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#616161',
                                wordBreak: 'break-all',

                                pt: 1
                              }}>
                              Quantity
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                              <Box
                                sx={{
                                  width: '26px',
                                  height: '26px',
                                  border: 1,
                                  borderColor: '#E15113',
                                  borderRadius: 2,
                                  cursor: 'pointer'
                                }}
                                onClick={() => dispatch(cartActions.decrement({ id: product.id }))}>
                                <Typography
                                  sx={{
                                    fontSize: '18px',
                                    color: theme.palette.secondary.contrastText,
                                    textAlign: 'center'
                                  }}>
                                  -
                                </Typography>
                              </Box>
                              <Typography sx={{ pl: 1, pr: 1 }}>{product.quantity}</Typography>
                              <Box
                                sx={{
                                  width: '26px',
                                  height: '26px',
                                  border: 1,
                                  borderColor: theme.palette.secondary.contrastText,
                                  borderRadius: 2,
                                  cursor: 'pointer'
                                }}
                                onClick={() => dispatch(cartActions.increment({ id: product.id }))}>
                                <Typography
                                  sx={{
                                    fontSize: '18px',
                                    color: theme.palette.secondary.contrastText,
                                    textAlign: 'center'
                                  }}>
                                  +
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: {
                              sm: 'space-between',
                              xs: 'space-between'
                            },
                            pb: 2,
                            mx: 4
                          }}>
                          <Box sx={{ display: 'flex', mt: 2, gap: 2 }}>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Box sx={{ pl: { xl: 0, xs: 0 } }}>
                              <Typography sx={{ color: theme.palette.info.main }}>Size</Typography>
                              <Select
                                sx={{ width: { md: '137px', sm: '100px', xs: '100px' } }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={product.selectedSize}
                                // value={product.selectedSize}
                                label="Age"
                                // onChange={handleSelection}
                                placeholder="Select Size">
                                {filteration(product?.size, sizeFilter)
                                  .flatMap(i => i)
                                  .map((data: { id?: number; value?: string; slug?: string }) => {
                                    return <MenuItem value={data.id}>{data.slug}</MenuItem>;
                                  })}
                              </Select>
                            </Box>
                            <Box sx={{ pl: 0.5 }}>
                              <Typography sx={{ color: theme.palette.info.main }}>Color</Typography>
                              <Select
                                sx={{ width: { sm: '75px', xs: '50px' } }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={product.selectedColor}
                                // value={age}
                                label="Age"
                                // value={color}
                                // onChange={handleChange}
                                // onChange={handleColor}
                              >
                                {filteration(product?.color, colorLists)
                                  .flatMap(i => i)
                                  .map((data: { id?: number; name?: string; slug?: string }) => {
                                    return <MenuItem value={data.id}>{data.name}</MenuItem>;
                                  })}
                              </Select>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mr: {
                                sm: 0,
                                xs: '20px'
                              },
                              mt: 7
                            }}>
                            <Typography
                              sx={{
                                fontSize: { sm: '18px', xs: '16px' },
                                fontFamily: 'Jost',
                                fontWeight: 700,
                                color: theme.palette.info.main
                                // pr: { md: 5, sm: 2, xs: 0 }
                              }}>
                              $ {product.quantity * product.productCurrentPrice}
                              .00
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    ))
                  ) : (
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '30px',
                        fontFamily: 'Jost',
                        p: 2
                      }}>
                      No Products to Order
                    </Typography>
                  )}
                  <Divider />
                  {cartProducts.length ? (
                    <>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '18px',
                                xs: '16px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pl: 5,
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            Subtotal
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '18px',
                                xs: '16px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pr: 5,
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            $ {total}.00
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '18px',

                                xs: '15px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pl: 5,
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            Shipping
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '18px',
                                xs: '16px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pr: 5,
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            $ 0{shipping}.00
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '18px',
                                xs: '16px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pl: 5,
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            Vat,tax
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '18px',
                                xs: '16px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pr: 5,
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            $ 0{vat_tax}.00
                          </Typography>
                        </Box>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '24px',
                                xs: '20px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pl: 5,
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            Total
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: 'Jost',
                              fontWeight: 800,
                              fontSize: {
                                md: '24px',
                                xs: '20px'
                              },
                              color: theme.palette.info.main,
                              // py: 2,
                              // pr: { md: '16px', xs: '24px' },
                              mx: 4,
                              my: 2,
                              wordBreak: 'break-all'
                            }}>
                            $ {total + vat_tax + shipping}.00
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <Typography></Typography>
                  )}

                  {/* enter code above */}
                </Box>
                {/* button on small screen */}
                {/* <Box
                  sx={{
                    display: {
                      sm: 'none',
                      xs: 'flex'
                    },
                    justifyContent: 'start',
                    flexWrap: 'wrap',
                    mt: 6
                  }}>
                  {page === 2 && (
                    <Box
                      sx={{
                        mb: { sm: 2, xs: 2 },
                        mx: 'auto'
                      }}>
                      <Button variant="outlined" sx={{ borderRadius: 0 }} onClick={() => setPage(page - 1)}>
                        <Typography>Back</Typography>
                      </Button>
                    </Box>
                  )}

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.contrastText,
                      color: theme.palette.success.main,
                      borderRadius: 0,
                      // ml: "50%",
                      mx: 'auto',
                      mb: { sm: 2, xs: 2 }
                      // mt: 15,
                    }}
                    onClick={() => {
                      if (page === 1) {
                        // handleUserValidation();
                      } else if (page === 2) {
                        handlePaymentValidation();
                      } else {
                        dispatch(cartActions.emptyCart());
                        navigate('/');
                      }
                    }}>
                    <Typography sx={{ ml: 5, mr: 5 }}>
                      {page === 2
                        ? `Confirm Payment of: $ ${total + vat_tax + shipping}.00`
                        : page === 3
                        ? 'Continue Shopping'
                        : 'Proceed to Payment'}
                    </Typography>
                  </Button>
                </Box> */}
              </Box>
            )}
            <Box
              sx={{
                maxWidth: {
                  sm: '50%',
                  xs: '100%'
                }
              }}>
              {/*product card  */}

              {page === 1 && (
                <UserInformation
                  userInformation={userInformation}
                  setUserInformation={setUserInformation}
                  setPage={setPage}
                  page={page}
                  // handleUserValidation={handleUserValidation}
                />
              )}

              {page === 2 && (
                <UserPaymentInformation
                  page={page}
                  setPage={setPage}
                  total={total + vat_tax + shipping}
                  setSelectedValue={setSelectedValue}
                  setPaymentInformation={setPaymentInformation}
                  paymentInformation={paymentInformation}
                  selectedValue={selectedValue}
                  // handlePaymentValidation={handlePaymentValidation}
                />
              )}
              {page === 3 && <ConfirmationPage userInformation={userInformation} />}
            </Box>
          </Box>
        </Layout>
      </Box>
    </AuthGuard>
  );
};

export default ShippingPage;
