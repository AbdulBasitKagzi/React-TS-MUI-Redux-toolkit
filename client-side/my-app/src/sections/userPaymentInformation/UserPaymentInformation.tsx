import { useState } from "react";

// mui imports
import { Box, Button, Grid, TextField, Typography, Radio } from "@mui/material";
import { assets } from "../../assets";

type props = {
  setOpenUp: (value: boolean) => void;
  setAlert: (val: { type: string; title: string; message: string }) => void;
  page: number;
  setPage: (value: number) => void;
  total: number;
  handlePaymentValidation: (value: {
    radio_buttons: string;
    cardName: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
  }) => void;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  setPaymentInformation: React.Dispatch<
    React.SetStateAction<{
      radio_buttons: string;
      cardName: string;
      cardNumber: string;
      expiration: string;
      cvv: string;
    }>
  >;
  paymentInformation: {
    radio_buttons: string;
    cardName: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
  };
};

function UserPaymentInformation(props: props): JSX.Element {
  const regexp = /^((0[1-9])|(1[0-2]))[/]*((2[3-9]))$/;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSelectedValue(event.target.value);
    props.setPaymentInformation((prev) => ({
      ...prev,
      radio_buttons: event.target.value,
    }));
  };

  const handlePaymentInformation = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setPaymentInformation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
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
        <Box>
          <Radio
            checked={props.selectedValue === "creditCard"}
            onChange={handleChange}
            value="creditCard"
            name="radio_buttons"
            inputProps={{ "aria-label": "A" }}
            sx={{
              color: "#111827",
              "&.Mui-checked": {
                color: "#111827",
              },
            }}
          />

          <img
            src={assets.icons.Credit_Card}
            alt="creditcard"
            style={{ paddingRight: "20px" }}
          />
        </Box>
        <Box>
          <Radio
            checked={props.selectedValue === "paypal"}
            onChange={handleChange}
            value="paypal"
            name="radio_buttons"
            inputProps={{ "aria-label": "B" }}
            sx={{
              color: "#111827",
              "&.Mui-checked": {
                color: "#111827",
              },
            }}
          />
          <img
            src={assets.icons.Paypal_Icon}
            alt="creditcard"
            width="90px"
            style={{ paddingRight: "20px" }}
          />
        </Box>
        <Box>
          <Radio
            checked={props.selectedValue === "bitcoin"}
            onChange={handleChange}
            value="bitcoin"
            name="radio_buttons"
            inputProps={{ "aria-label": "B" }}
            sx={{
              color: "#111827",
              "&.Mui-checked": {
                color: "#111827",
              },
            }}
          />
          <img src={assets.icons.Bitcoin} alt="creditcard" />
        </Box>
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
            value={props.paymentInformation.cardName}
            fullWidth
            placeholder="alex patel"
            autoComplete="given-name"
            variant="standard"
            sx={{
              paddingBottom: 4,
            }}
            onChange={handlePaymentInformation}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card Number"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.toString().slice(0, 16);
            }}
            value={props.paymentInformation.cardNumber}
            fullWidth
            autoComplete="card number"
            placeholder="4444 4444 4444 4444"
            variant="standard"
            sx={{
              paddingBottom: 4,
            }}
            onChange={handlePaymentInformation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="expiration"
            name="expiration"
            label="Expiration"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.toString().slice(0, 5);
            }}
            fullWidth
            value={props.paymentInformation.expiration}
            autoComplete="shipping address-line1"
            variant="standard"
            placeholder="01/23"
            sx={{
              paddingBottom: 4,
            }}
            onChange={handlePaymentInformation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cvv"
            name="cvv"
            label="CVV Code"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.toString().slice(0, 3);
            }}
            value={props.paymentInformation.cvv}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            placeholder="123"
            sx={{
              paddingBottom: 4,
            }}
            onChange={handlePaymentInformation}
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
          By Clicking *Confirm Payment* I agree to company terms of services
        </Typography>
      </Box>
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
          alignItems: "center",
          mr: 3,
          //   ml: {
          //     xl: "10%",
          //     lg: "10%",
          //     md: "45%",
          //     sm: "40%",
          //     xs: "10%",
          //   },

          mt: 5,
        }}
      >
        <Button
          variant="outlined"
          sx={{ borderRadius: 0, mb: { md: 2, sm: 2, xs: 2 } }}
          onClick={() => props.setPage(props.page - 1)}
        >
          <Typography>Back</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            display: { sm: "block", xs: "none" },
            backgroundColor: "#111827",
            color: "#FFFFFF",
            borderRadius: 0,
            // ml: "50%",
            //   mx: "auto",
            // mt: 15,
          }}
          onClick={() => {
            props.handlePaymentValidation(props.paymentInformation);
          }}
        >
          Confirm Payment of: $ {props.total}
        </Button>
      </Box>
    </Box>
  );
}

export default UserPaymentInformation;