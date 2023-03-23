import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const ShippingPage: React.FC = () => {
  const steps = ["Shipping", "Billing", "Confirmation"];
  const { cartProducts } = useSelector((state: RootState) => state.cart);

  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    console.log("cartProducts", cartProducts);
  }, [cartProducts]);
  const [selectedValue, setSelectedValue] = useState("creditCard");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
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
          flexWrap: "wrap",
          //   maxWidth: "100%",
          //   justifyContent: "space-between",
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
            border: 2,
          }}
        >
          <Box
            sx={{
              width: {
                xl: "608px",
                lg: "608px",
                md: "608px",
                sm: "608px",
                xs: "375px",
              },
              paddingTop: "43px",
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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="address2"
                    name="phonenumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    placeholder="+1-(0000 000 0000)"
                    sx={{
                      paddingBottom: 4,
                    }}
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
                      defaultValue={dayjs(new Date())}

                      // minValue={new Date()}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    City
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "city",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={10}>Australia</option>
                    <option value={20}>India</option>
                    <option value={30}>United Kingdom</option>
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
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="zipcode"
                    name="zpcode"
                    label="Zip Code"
                    fullWidth
                    autoComplete="zip code"
                    variant="standard"
                    placeholder="000000"
                    sx={{
                      paddingBottom: 4,
                    }}
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
                ml: "10%",
                // mt: 15,
              }}
              onClick={() => setPage(page + 1)}
            >
              <Typography sx={{ ml: 5, mr: 5 }}>
                {page === 2 ? "Confirm Payment" : "Proceed to Payment"}
              </Typography>
            </Button>
          </Box>
        </Box>

        {/*product card  */}
        <Box sx={{ maxWidth: "50%", border: 2, mt: 9 }}>
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                Product Name
              </Typography>
              <Box sx={{ p: 5 }}>
                <DeleteOutlineIcon />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ width: "56px", height: "65px", pl: 3 }}>
                <img
                  src={womenStandig}
                  alt="product"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    color: "#616161",
                    wordBreak: "break-all",
                    pl: 6,
                    pt: 1,
                  }}
                >
                  Product Description
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    color: "#616161",
                    wordBreak: "break-all",
                    pl: 6,
                    pt: 1,
                  }}
                >
                  Product Description
                </Typography>
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
                  >
                    <Typography sx={{ fontSize: "18px", color: "#E15113" }}>
                      -
                    </Typography>
                  </Box>
                  <Typography sx={{ pl: 1, pr: 1 }}>2</Typography>
                  <Box
                    sx={{
                      width: "26px",
                      height: "26px",
                      border: 1,
                      borderColor: "#E15113",
                      borderRadius: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", color: "#E15113" }}>
                      +
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Box sx={{ pl: 2, pr: 2 }}>
                  <Typography sx={{ color: "#616161" }}>Size</Typography>
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
                <Box>
                  <Typography sx={{ color: "#616161" }}>Color</Typography>
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
              <Box sx={{ mr: 6, mt: 7 }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Jost",
                    fontWeight: 700,
                    color: "#616161",
                  }}
                >
                  $ 165.00
                </Typography>
              </Box>
            </Box>
            {/* enter code above */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingPage;
