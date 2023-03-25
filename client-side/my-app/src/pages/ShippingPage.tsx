import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/userSlice/cartSlice";
import { RootState } from "../store/userSlice/store";

// images and icons
import creditCard from "../assets/icons/creditCard.svg";
import paypal_icon from "../assets/icons/paypal-icon.svg";
import bitcoin from "../assets/icons/bitcoin.svg";
import womenStandig from "../assets/images/womenStanding.png";

// mui imports
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { Box, Button, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import Divider from "@mui/material/Divider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";

// for date and time
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers";

const ShippingPage: React.FC = () => {
  const steps = ["Shipping", "Billing", "Confirmation"];
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);
  const [date_time, setDate_Time] = useState(dayjs());
  const [userInformation, setUserInformation] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    convinienttime: string;
    city: string;
    address: string;
    zipCode: string;
    date: string;
    time: string;
  }>();

  useEffect(() => {
    console.log("cartProducts", cartProducts);
  }, [cartProducts]);
  const [selectedValue, setSelectedValue] = useState("creditCard");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleDate = (newValue: any) => {
    setDate_Time(newValue);
    setUserInformation((prev: any) => ({
      ...prev,
      date: newValue,
    }));
  };
  const handleTime = (newValue: any) => {
    setDate_Time(newValue);
    setUserInformation((prev: any) => ({
      ...prev,
      time: newValue,
    }));
  };
  // const handleSubmit = () => {
  //   const hasEmptyFields = Object.values(userInformation:any).some(
  //     (element) => element === ""
  //   );
  // };

  const handleUserInformation = (e: any) => {
    setUserInformation((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    console.log("user", userInformation);
  }, [userInformation, date_time]);
  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "block",
          },
          // flexWrap: "wrap",
          //   maxWidth: "100%",
          //   justifyContent: "space-between",
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
          <Box
            sx={{
              width: {
                xl: "608px",
                lg: "608px",
                md: "608px",
                sm: "608px",
                xs: "300px",
              },
              paddingTop: "43px",
              mx: "auto",
            }}
          >
            <Stepper activeStep={page} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          {page === 1 && (
            <Box sx={{ maxWidth: "80%", mx: "auto" }}>
              <Box sx={{ textAlign: "left", mt: 14 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "inline-block", color: "#4F4F4F" }}
                >
                  Contact Information
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    sx={{
                      paddingBottom: 4,
                    }}
                    onChange={handleUserInformation}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    sx={{
                      paddingBottom: 4,
                    }}
                    onChange={handleUserInformation}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="address1"
                    name="emailaddress"
                    label="Email Address"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    placeholder="Youremail@gmail.com"
                    sx={{
                      paddingBottom: 4,
                    }}
                    onChange={handleUserInformation}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="address2"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    placeholder="+1-(0000 000 0000)"
                    sx={{
                      paddingBottom: 4,
                    }}
                    onChange={handleUserInformation}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          {page === 1 && (
            <Box sx={{ maxWidth: "80%", mx: "auto" }}>
              <Box sx={{ textAlign: "left", mt: 10, mb: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "inline-block", color: "#4F4F4F" }}
                >
                  Delivery Information
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ display: "inherit" }}
                  >
                    <DesktopDatePicker
                      label="Delivery Date"
                      value={date_time}
                      onChange={handleDate}
                      // minValue={dayjs()}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <TextField
                    required
                    id="convinienttime"
                    name="convinienttime"
                    label="Convinient Time"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    sx={{
                      paddingBottom: 4,
                    }}
                    onChange={handleUserInformation}
                  /> */}
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ display: "inherit" }}
                  >
                    <TimePicker
                      label="PickUp Time"
                      value={date_time}
                      onChange={handleTime}
                      // renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    City
                  </InputLabel>
                  <NativeSelect
                    defaultValue="india"
                    inputProps={{
                      name: "city",
                      id: "uncontrolled-native",
                    }}
                    onChange={handleUserInformation}
                  >
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                    <option value="unitedkingdom">United Kingdom</option>
                  </NativeSelect>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    placeholder="Akshya Nagar 1st"
                    sx={{
                      paddingBottom: 4,
                    }}
                    onChange={handleUserInformation}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="zipcode"
                    name="zipCode"
                    label="Zip Code"
                    fullWidth
                    autoComplete="zip code"
                    variant="standard"
                    placeholder="000000"
                    sx={{
                      paddingBottom: 4,
                    }}
                    onChange={handleUserInformation}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          {page === 2 && (
            <Box sx={{ maxWidth: "80%", mx: "auto" }}>
              <Box sx={{ textAlign: "left", mt: 14 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "inline-block",
                    color: "#4F4F4F",
                    fontWeight: 700,
                    mb: 5,
                  }}
                >
                  Payment Method
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Radio
                  checked={selectedValue === "creditCard"}
                  onChange={handleChange}
                  value="creditCard"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{
                    color: "#111827",
                    "&.Mui-checked": {
                      color: "#111827",
                    },
                  }}
                />

                <img
                  src={creditCard}
                  alt="creditcard"
                  style={{ paddingRight: "20px" }}
                />
                <Radio
                  checked={selectedValue === "paypal"}
                  onChange={handleChange}
                  value="paypal"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                  sx={{
                    color: "#111827",
                    "&.Mui-checked": {
                      color: "#111827",
                    },
                  }}
                />
                <img
                  src={paypal_icon}
                  alt="creditcard"
                  width="90px"
                  style={{ paddingRight: "20px" }}
                />

                <Radio
                  checked={selectedValue === "bitcoin"}
                  onChange={handleChange}
                  value="bitcoin"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                  sx={{
                    color: "#111827",
                    "&.Mui-checked": {
                      color: "#111827",
                    },
                  }}
                />
                <img src={bitcoin} alt="creditcard" />
              </Box>
              <Box sx={{ textAlign: "left", mt: 10 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "inline-block",
                    color: "#4F4F4F",
                    fontWeight: 700,
                    mb: 5,
                  }}
                >
                  Payment Details
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="cardName"
                    name="cardName"
                    label="Enter Name Card"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    sx={{
                      paddingBottom: 4,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="cardNumber"
                    name="cardNumber"
                    label="Card Number"
                    fullWidth
                    autoComplete="card number"
                    variant="standard"
                    sx={{
                      paddingBottom: 4,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="expiration"
                    name="expiration"
                    label="Expiration"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    // placeholder="Youremail@gmail.com"
                    sx={{
                      paddingBottom: 4,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="cvv"
                    name="cvv"
                    label="CVV Code"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    placeholder="123"
                    sx={{
                      paddingBottom: 4,
                    }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "#C4C4C4",
                    fontSize: "18px",
                  }}
                >
                  By Clicking *Confirm Payment* I agree to company terms of
                  services
                </Typography>
              </Box>
            </Box>
          )}
          {page === 3 && (
            <Box sx={{ mt: 11 }}>
              <Typography
                sx={{ fontFamily: "Roboto", fontSize: "24px", fontWeight: 700 }}
              >
                Your order is confirmed
              </Typography>
              <Box sx={{ mx: "auto", mt: 2 }}>
                <Typography
                  sx={{
                    py: 4,
                    textAlign: "center",
                    wordBreak: "break-all",
                    fontFamily: "Roboto",
                    fontSize: "22px",
                    fontWeight: 400,
                  }}
                >
                  Thank you for shopping with us Your order will reach you on 18
                  Jan 2022.
                </Typography>
              </Box>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexWrap: "wrap",
              mt: 15,
            }}
          >
            {page === 2 && (
              <Box
                sx={{
                  mr: 3,
                  ml: { xl: "10%", lg: "10%", md: "10%", sm: "10%", xs: "35%" },
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
              variant="outlined"
              sx={{
                backgroundColor: "#111827",
                color: "#FFFFFF",
                borderRadius: 0,
                // ml: "50%",
                mx: "auto",
                // mt: 15,
              }}
              onClick={() => setPage(page + 1)}
            >
              <Typography sx={{ ml: 5, mr: 5 }}>
                {page === 2
                  ? "Confirm Payment"
                  : page === 3
                  ? "Continue Shopping"
                  : "Proceed to Payment"}
              </Typography>
            </Button>
          </Box>
        </Box>

        {/*product card  */}
        {page !== 3 && (
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
              mt: 14.5,
            }}
          >
            <Box sx={{ backgroundColor: "#EFEFF4", borderRadius: 8 }}>
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
                cartProducts.map((product: any) => (
                  <>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
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
                        sx={{ p: 5 }}
                        onClick={() =>
                          dispatch(
                            cartActions.removeProduct({ id: product.id })
                          )
                        }
                      >
                        <DeleteOutlineIcon />
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                      <Box sx={{ width: "56px", height: "65px", pl: 3 }}>
                        <img
                          src={product.productImages[0].productImage}
                          alt="product"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Box>
                        {product.productDescription.length &&
                          product.productDescription.map((desc: any) => (
                            <Typography
                              sx={{
                                fontFamily: "Inter",
                                fontSize: "14px",
                                color: "#616161",
                                wordBreak: "break-all",
                                pl: { xl: 6, lg: 6, md: 6, sm: 6, xs: 3 },
                                pt: 1,
                              }}
                            >
                              {desc}
                            </Typography>
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
                            pl: 6,
                            pr: 9,
                            pt: 1,
                          }}
                        >
                          Quantity
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Box
                            sx={{
                              width: "26px",
                              height: "26px",
                              border: 1,
                              borderColor: "#E15113",
                              borderRadius: 2,
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
                        justifyContent: "space-between",
                        pb: 2,
                      }}
                    >
                      <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                        <Box sx={{ pl: 2, pr: 2 }}>
                          <Typography sx={{ color: "#616161" }}>
                            Size
                          </Typography>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            value={10}
                            autoWidth
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirtyssddssdfdfs</MenuItem>
                          </Select>
                        </Box>
                        <Box sx={{ pl: 0.5 }}>
                          <Typography sx={{ color: "#616161" }}>
                            Color
                          </Typography>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            value={10}
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          mr: { xl: 6, lg: 6, md: 6, sm: 3, xs: 3 },
                          mt: 7,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontFamily: "Jost",
                            fontWeight: 700,
                            color: "#616161",
                          }}
                        >
                          $ {product.quantity * product.productCurrentPrice}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ))
              ) : (
                <Typography>No Products to Order</Typography>
              )}
              <Divider />
              {cartProducts.length ? (
                <>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        Subtotal
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        $ 654.00
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        Shipping
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        $ 064.00
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        Vat,tax
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        $ 064.00
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        Total
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
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
                          px: 5,
                          wordBreak: "break-all",
                        }}
                      >
                        $ 778.00
                      </Typography>
                    </Box>
                  </Box>
                </>
              ) : (
                <Typography></Typography>
              )}
              {/* enter code above */}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ShippingPage;
