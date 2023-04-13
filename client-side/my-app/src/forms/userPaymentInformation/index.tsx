// mui imports
import { Box, Button, Grid, TextField, Typography, Radio, useTheme, InputAdornment } from '@mui/material';
import { assets } from '../../assets';
import { paymentInformation } from './userPaymentInformation';

interface userPaymentInformationprops {
  page: number;
  setPage: (value: number) => void;
  total: number;
  handlePaymentValidation: (value: paymentInformation) => void;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  setPaymentInformation: React.Dispatch<React.SetStateAction<paymentInformation>>;
  paymentInformation: paymentInformation;
}

function UserPaymentInformation({
  page,
  setPage,
  total,
  handlePaymentValidation,
  selectedValue,
  setPaymentInformation,
  paymentInformation,
  setSelectedValue
}: userPaymentInformationprops): JSX.Element {
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setPaymentInformation(prev => ({
      ...prev,
      radio_buttons: event.target.value
    }));
  };

  const handlePaymentInformation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInformation(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Box sx={{ maxWidth: '80%', mx: 'auto' }}>
      <Box sx={{ textAlign: 'left', mt: 14 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: 'inline-block',
            color: theme.palette.error.contrastText,
            fontWeight: 700,
            mb: 5
          }}>
          Payment Method
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Radio
            checked={selectedValue === 'creditCard'}
            onChange={handleChange}
            value="creditCard"
            name="radio_buttons"
            inputProps={{ 'aria-label': 'A' }}
            sx={{
              color: '#111827',
              '&.Mui-checked': {
                color: '#111827'
              }
            }}
          />
          <img src={assets.icons.Credit_Card} alt="creditcard" style={{ paddingRight: '20px' }} />
        </Box>
        <Box>
          <Radio
            checked={selectedValue === 'paypal'}
            onChange={handleChange}
            value="paypal"
            name="radio_buttons"
            inputProps={{ 'aria-label': 'B' }}
            sx={{
              color: theme.palette.primary.contrastText,
              '&.Mui-checked': {
                color: theme.palette.primary.contrastText
              }
            }}
          />
          <img
            src={assets.icons.Paypal_Icon}
            alt="creditcard"
            width="90px"
            style={{ paddingRight: '20px' }}
          />
        </Box>
        <Box>
          <Radio
            checked={selectedValue === 'bitcoin'}
            onChange={handleChange}
            value="bitcoin"
            name="radio_buttons"
            inputProps={{ 'aria-label': 'B' }}
            sx={{
              color: theme.palette.primary.contrastText,
              '&.Mui-checked': {
                color: theme.palette.primary.contrastText
              }
            }}
          />
          <img src={assets.icons.Bitcoin} alt="creditcard" />
        </Box>
      </Box>
      <Box sx={{ textAlign: 'left', mt: 10 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: 'inline-block',
            color: theme.palette.error.contrastText,
            fontWeight: 700,
            mb: 5
          }}>
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
            value={paymentInformation.cardName}
            fullWidth
            placeholder="alex patel"
            autoComplete="given-name"
            variant="standard"
            sx={{
              paddingBottom: 4
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
            value={paymentInformation.cardNumber}
            fullWidth
            autoComplete="card number"
            placeholder="4444 4444 4444 4444"
            variant="standard"
            sx={{
              paddingBottom: 4
            }}
            onChange={handlePaymentInformation}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={assets.images.visa} alt="visa" />
                </InputAdornment>
              )
            }}
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
            value={paymentInformation.expiration}
            autoComplete="shipping address-line1"
            variant="standard"
            placeholder="01/23"
            sx={{
              paddingBottom: 4
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
            value={paymentInformation.cvv}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            placeholder="123"
            sx={{
              paddingBottom: 4
            }}
            onChange={handlePaymentInformation}
          />
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          sx={{
            display: 'inline-block',
            color: theme.palette.warning.contrastText,
            fontSize: '18px'
          }}>
          By Clicking *Confirm Payment* I agree to company terms of services
        </Typography>
      </Box>
      <Box
        sx={{
          display: { sm: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 5,
          gap: { sm: 5 }
        }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 0,
            mb: { md: 0, sm: 2, xs: 2 },
            display: { sm: 'block', xs: 'none' }
          }}
          onClick={() => setPage(page - 1)}>
          <Typography>Back</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            display: { sm: 'block', xs: 'none' },
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.success.main,
            borderRadius: 0,
            mb: { md: 0, sm: 2 }
          }}
          onClick={() => {
            handlePaymentValidation(paymentInformation);
          }}>
          Confirm Payment of: $ {total}
        </Button>
      </Box>
    </Box>
  );
}

export default UserPaymentInformation;
