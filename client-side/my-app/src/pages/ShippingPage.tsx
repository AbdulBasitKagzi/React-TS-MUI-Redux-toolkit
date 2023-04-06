import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart/cart.slice";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { sizeFilter, colorLists } from "../data/Constants";
import { cartProducts } from "../store/cart/cart.types";
import Layout from "../components/Layout";

// mui imports
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box, Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";

// for date and time
import dayjs from "dayjs";
import DescriptionAlerts from "../components/alert/Alert";
import AuthGuard from "../routes/AuthGuard";
import { assets } from "../assets";
import UserInformation from "../sections/userInformation/UserInformation";
import UserPaymentInformation from "../sections/userPaymentInformation/UserPaymentInformation";
import ConfirmationPage from "../sections/confirmationPage/ConfirmationPage";

export interface user {
  firstName: string;
  lastName: string;
  emailaddress: string;
  phoneNumber: string;
  city: string;
  address: string;
  zipCode: string;
  date: string;
  time: string;
}

const ShippingPage: React.FC = () => {
  const regexp = /^((0[1-9])|(1[0-2]))[/]*((2[3-9]))$/;
  const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const navigate = useNavigate();
  const steps = ["Shipping", "Billing", "Confirmation"];
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  let shipping: number = 64.0;
  let vat_tax: number = 64.0;

  const [date_time, setDate_Time] = useState(dayjs());
  const [selectedValue, setSelectedValue] = useState("creditCard");
  const [userInformation, setUserInformation] = useState<user>({
    firstName: "",
    lastName: "",
    emailaddress: "",
    phoneNumber: "",
    city: "australia",
    address: "",
    zipCode: "",
    date: date_time.toString(),
    time: date_time.toString(),
  });
  const [paymentInformation, setPaymentInformation] = useState<{
    radio_buttons: string;
    cardName: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
  }>({
    cardName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
    radio_buttons: selectedValue,
  });

  const [openUp, setOpenUp] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: string;
    title: string;
    message: string;
  }>({
    type: "",
    title: "",
    message: "",
  });

  useEffect(() => {
    cartProducts.length === 0 && navigate("/");
  }, [cartProducts.length]);

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
    filteredata = data.map((data: number) => {
      return array.filter(
        (fill: {
          id?: number;
          value?: string;
          slug?: string;
          haxValue?: string;
          name?: string;
        }) => fill.id === data
      );
    });

    return filteredata;
  };

  const handleUserValidation = (information: Object) => {
    const hasEmptyFields = Object.values(information).some(
      (element) => element === ""
    );
    if (hasEmptyFields) {
      setOpenUp(hasEmptyFields);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please fill all the fields.",
      });
    } else if (!emailRegexp.test(userInformation.emailaddress)) {
      setOpenUp(true);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please enter correct email address.",
      });
      return;
    } else if (userInformation.phoneNumber.length < 10) {
      setOpenUp(true);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please enter 10 digit phone number.",
      });
      return;
    } else if (userInformation.zipCode.length < 6) {
      setOpenUp(true);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please enter 6 digit zip code.",
      });
      return;
    } else {
      setPage(page + 1);
    }
  };

  const handlePaymentValidation = (information: Object) => {
    const hasEmptyFields = Object.values(information).some(
      (element) => element === ""
    );
    if (hasEmptyFields) {
      setOpenUp(hasEmptyFields);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please fill all the fields.",
      });
    } else if (paymentInformation.cardNumber.length < 16) {
      setOpenUp(true);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please enter 16 digit card number.",
      });
      return;
    } else if (paymentInformation.cvv.length < 3) {
      setOpenUp(true);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please enter 3 digit CVV number.",
      });
      return;
    } else if (!regexp.test(paymentInformation.expiration)) {
      setOpenUp(true);
      setAlert({
        type: "error",
        title: "Error",
        message: "Please enter correct expiration date.",
      });
      return;
    } else {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    let totalAmount: number;
    totalAmount = cartProducts.reduce((acc: number, curr: cartProducts) => {
      totalAmount = acc + curr.quantity * curr.productCurrentPrice;
      return totalAmount;
    }, 0);
    setTotal(totalAmount);
  }, [cartProducts]);

  return (
    <AuthGuard>
      <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
        {openUp && (
          <DescriptionAlerts
            openUp={openUp}
            setOpenUp={setOpenUp}
            type={alert.type}
            title={alert.title}
            message={alert.message}
            closeDuration={2000}
          />
        )}
        <Layout>
          <Box
            sx={{
              display: {
                xl: "flex",
                lg: "flex",
                md: "flex",
                sm: "flex",
                xs: "block",
              },

              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                maxWidth: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "50%",
                  xs: "100%",
                },
                // border: 2,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    width: {
                      xl: "608px",
                      lg: "608px",
                      md: "608px",
                      sm: "400px",
                      xs: "300px",
                    },
                    paddingTop: "43px",
                    mr: "auto",
                    ml: { sm: "unset", xs: "auto" },
                  }}
                >
                  <Stepper
                    activeStep={1}
                    alternativeLabel
                    sx={{
                      ".MuiStep-root": {
                        color: "#111827",
                      },
                      ".Mui-completed": {
                        color: "#111827",
                      },
                    }}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Box>
              {page === 1 && (
                <UserInformation
                  setOpenUp={setOpenUp}
                  setAlert={setAlert}
                  page={page}
                  setPage={setPage}
                  userInformation={userInformation}
                  setUserInformation={setUserInformation}
                  handleUserValidation={handleUserValidation}
                />
              )}

              {page === 2 && (
                <UserPaymentInformation
                  setOpenUp={setOpenUp}
                  setAlert={setAlert}
                  page={page}
                  setPage={setPage}
                  total={total + vat_tax + shipping}
                  setSelectedValue={setSelectedValue}
                  setPaymentInformation={setPaymentInformation}
                  paymentInformation={paymentInformation}
                  selectedValue={selectedValue}
                  handlePaymentValidation={handlePaymentValidation}
                />
              )}
              {page === 3 && (
                <ConfirmationPage userInformation={userInformation} />
              )}
            </Box>

            {/*product card  */}
            {page !== 3 && (
              <Box
                sx={{
                  width: { lg: "35%", md: "40%", sm: "50%", xs: "100%" },
                  mt: 14.5,
                  px: { xl: 0, lg: 0, md: 0, sm: 2, xs: 1.5 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#EFEFF4",
                    borderRadius: 8,
                  }}
                >
                  <Box sx={{ pt: 2, mb: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#616161",
                      }}
                    >
                      Your Order
                    </Typography>
                  </Box>
                  <Divider />
                  {cartProducts.length ? (
                    cartProducts.map((product: cartProducts) => (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Inter",
                              fontWeight: 800,
                              fontSize: "18px",
                              color: "#616161",
                              p: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            {product.productName}
                          </Typography>
                          <Box
                            sx={{ p: 5, cursor: "pointer" }}
                            onClick={() =>
                              dispatch(
                                cartActions.removeProduct({ id: product.id })
                              )
                            }
                          >
                            <DeleteOutlineIcon />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ width: "75px", height: "65px", pl: 3 }}>
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
                                      fontFamily: "Inter",
                                      fontSize: "14px",
                                      color: "#616161",
                                      wordBreak: "break-all",
                                      textAlign: "left",
                                      // pl: { xl: 6, lg: 6, md: 6, sm: 6, xs: 3 },
                                      pt: 1,
                                    }}
                                  >
                                    {desc}
                                  </Typography>
                                </Box>
                              ))}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "Inter",
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#616161",
                                wordBreak: "break-all",
                                pl: "19px",
                                pr: 6,
                                pt: 1,
                              }}
                            >
                              Quantity
                            </Typography>
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Box
                                sx={{
                                  width: "26px",
                                  height: "26px",
                                  border: 1,
                                  borderColor: "#E15113",
                                  borderRadius: 2,
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  dispatch(
                                    cartActions.decrement({ id: product.id })
                                  )
                                }
                              >
                                <Typography
                                  sx={{ fontSize: "18px", color: "#E15113" }}
                                >
                                  -
                                </Typography>
                              </Box>
                              <Typography sx={{ pl: 1, pr: 1 }}>
                                {product.quantity}
                              </Typography>
                              <Box
                                sx={{
                                  width: "26px",
                                  height: "26px",
                                  border: 1,
                                  borderColor: "#E15113",
                                  borderRadius: 2,
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  dispatch(
                                    cartActions.increment({ id: product.id })
                                  )
                                }
                              >
                                <Typography
                                  sx={{ fontSize: "18px", color: "#E15113" }}
                                >
                                  +
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: {
                              md: "space-between",
                              sm: "space-between",
                              xs: "space-between",
                            },
                            pb: 2,
                          }}
                        >
                          <Box sx={{ display: "flex", mt: 2 }}>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Box sx={{ pl: 2, pr: 2 }}>
                              <Typography sx={{ color: "#616161" }}>
                                Size
                              </Typography>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={product.selectedSize}
                                // value={product.selectedSize}
                                label="Age"
                                // onChange={handleSelection}
                                placeholder="Select Size"
                              >
                                {filteration(product?.size, sizeFilter)
                                  .flatMap((i) => i)
                                  .map(
                                    (data: {
                                      id?: number;
                                      value?: string;
                                      slug?: string;
                                    }) => {
                                      return (
                                        <MenuItem value={data.id}>
                                          {data.slug}
                                        </MenuItem>
                                      );
                                    }
                                  )}
                              </Select>
                            </Box>
                            <Box sx={{ pl: 0.5 }}>
                              <Typography sx={{ color: "#616161" }}>
                                Color
                              </Typography>
                              <Select
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
                                  .flatMap((i) => i)
                                  .map(
                                    (data: {
                                      id?: number;
                                      name?: string;
                                      slug?: string;
                                    }) => {
                                      return (
                                        <MenuItem value={data.id}>
                                          {data.name}
                                        </MenuItem>
                                      );
                                    }
                                  )}
                              </Select>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              mr: {
                                lg: 0,
                                md: 0,
                                sm: 0,
                                xs: "20px",
                              },
                              mt: 7,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: { sm: "22px", xs: "18px" },
                                fontFamily: "Jost",
                                fontWeight: 700,
                                color: "#616161",
                                pr: { xs: 3 },
                              }}
                            >
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
                        fontSize: "30px",
                        fontFamily: "Jost",
                        p: 2,
                      }}
                    >
                      No Products to Order
                    </Typography>
                  )}
                  <Divider />
                  {cartProducts.length ? (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                md: "18px",
                                sm: "16px",
                                xs: "16px",
                              },
                              color: "#616161",
                              py: 2,
                              pl: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            Subtotal
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                md: "18px",
                                sm: "16px",
                                xs: "16px",
                              },
                              color: "#616161",
                              py: 2,
                              pr: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            $ {total}.00
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                md: "18px",
                                sm: "16px",
                                xs: "15px",
                              },
                              color: "#616161",
                              py: 2,
                              pl: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            Shipping
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                md: "18px",
                                sm: "16px",
                                xs: "16px",
                              },
                              color: "#616161",
                              py: 2,
                              pr: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            $ 0{shipping}.00
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                md: "18px",
                                sm: "16px",
                                xs: "16px",
                              },
                              color: "#616161",
                              py: 2,
                              pl: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            Vat,tax
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                md: "18px",
                                sm: "16px",
                                xs: "16px",
                              },
                              color: "#616161",
                              py: 2,
                              pr: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            $ 0{vat_tax}.00
                          </Typography>
                        </Box>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "24px",
                                lg: "24px",
                                md: "24px",
                                sm: "20px",
                                xs: "20px",
                              },
                              color: "#616161",
                              py: 2,
                              pl: 5,
                              wordBreak: "break-all",
                            }}
                          >
                            Total
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: "Jost",
                              fontWeight: 800,
                              fontSize: {
                                xl: "24px",
                                lg: "24px",
                                md: "24px",
                                sm: "20px",
                                xs: "20px",
                              },
                              color: "#616161",
                              py: 2,
                              pr: { md: "16px", xs: "24px" },
                              wordBreak: "break-all",
                            }}
                          >
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
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      xl: "none",
                      lg: "none",
                      md: "none",
                      sm: "none",
                    },
                    justifyContent: "start",
                    flexWrap: "wrap",
                    mt: 15,
                  }}
                >
                  {page === 2 && (
                    <Box
                      sx={{
                        mr: 3,
                        // ml: {
                        //   xl: "10%",
                        //   lg: "10%",
                        //   md: "10%",
                        //   sm: "10%",
                        //   xs: "35%",
                        // },
                        mb: { md: 2, sm: 2, xs: 2 },
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{ borderRadius: 0 }}
                        onClick={() => setPage(page - 1)}
                      >
                        <Typography>Back</Typography>
                      </Button>
                    </Box>
                  )}

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#111827",
                      color: "#FFFFFF",
                      borderRadius: 0,
                      // ml: "50%",
                      mx: "auto",
                      // mt: 15,
                    }}
                    onClick={() => {
                      if (page === 1) {
                        handleUserValidation(userInformation);
                        // setPage(page + 1);
                      } else if (page === 2) {
                        handlePaymentValidation(paymentInformation);
                        // setPage(page + 1);
                      } else {
                        dispatch(cartActions.emptyCart());
                        navigate("/");
                      }
                    }}
                  >
                    <Typography sx={{ ml: 5, mr: 5 }}>
                      {page === 2
                        ? `Confirm Payment of: $ ${
                            total + vat_tax + shipping
                          }.00`
                        : page === 3
                        ? "Continue Shopping"
                        : "Proceed to Payment"}
                    </Typography>
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Layout>
      </Box>
    </AuthGuard>
  );
};

export default ShippingPage;
