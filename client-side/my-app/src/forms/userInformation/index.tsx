import { useState } from 'react';

// mui imports
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { user } from './userInformation.types';

interface UserInformationType {
  userInformation: user;
  setUserInformation: React.Dispatch<React.SetStateAction<user>>;
  handleUserValidation: (value: user) => void;
}

function UserInformation({
  setUserInformation,
  userInformation,
  handleUserValidation
}: UserInformationType): JSX.Element {
  const [date_time, setDate_Time] = useState(dayjs());

  const handleUserInformation = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserInformation(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleDate = (newValue: any) => {
    console.log(newValue, typeof newValue);
    setDate_Time(newValue);
    setUserInformation(prev => ({
      ...prev,
      date: newValue.toString()
    }));
  };
  const handleTime = (newValue: any) => {
    setDate_Time(newValue);
    setUserInformation(prev => ({
      ...prev,
      time: newValue.toString()
    }));
  };

  return (
    <>
      <Box sx={{ maxWidth: '80%', mx: 'auto' }}>
        <Box sx={{ textAlign: 'left', mt: 14 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'inline-block', color: '#4F4F4F' }}>
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
              value={userInformation.firstName}
              fullWidth
              autoComplete="given-name"
              variant="standard"
              sx={{
                paddingBottom: 4
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
              value={userInformation.lastName}
              fullWidth
              autoComplete="family-name"
              variant="standard"
              sx={{
                paddingBottom: 4
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
              value={userInformation.emailaddress}
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              placeholder="Youremail@gmail.com"
              sx={{
                paddingBottom: 4
              }}
              onChange={handleUserInformation}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="address2"
              name="phoneNumber"
              label="Phone Number"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.toString().slice(0, 10);
              }}
              value={userInformation.phoneNumber}
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              placeholder="+1-(0000 000 0000)"
              sx={{
                paddingBottom: 4
              }}
              onChange={handleUserInformation}
            />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'left', mt: 10, mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'inline-block', color: '#4F4F4F' }}>
            Delivery Information
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ display: 'inherit' }}>
              <DesktopDatePicker
                label="Delivery Date"
                value={date_time}
                onChange={handleDate}
                sx={{ width: '500px' }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ display: 'inherit' }}>
              <TimePicker
                label="PickUp Time"
                value={date_time}
                onChange={handleTime}
                sx={{ width: '500px' }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={4}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              City
            </InputLabel>
            <NativeSelect
              value={userInformation.city}
              inputProps={{
                name: 'city',
                id: 'uncontrolled-native'
              }}
              onChange={handleUserInformation}>
              <option value="australia">Australia</option>
              <option value="india">India</option>
              <option value="unitedkingdom">United Kingdom</option>
            </NativeSelect>
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField
              id="address"
              name="address"
              label="Address"
              value={userInformation.address}
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              placeholder="Akshya Nagar 1st"
              sx={{
                paddingBottom: 4
              }}
              onChange={handleUserInformation}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="zipcode"
              name="zipCode"
              label="Zip Code"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.toString().slice(0, 6);
              }}
              value={userInformation.zipCode}
              fullWidth
              autoComplete="zip code"
              variant="standard"
              placeholder="000000"
              sx={{
                paddingBottom: 4
              }}
              onChange={handleUserInformation}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            display: { sm: 'block', xs: 'none' },
            backgroundColor: '#111827',
            color: '#FFFFFF',
            borderRadius: 0,
            mx: 'auto',
            mt: { lg: 10, sm: 5 }
          }}
          onClick={() => {
            handleUserValidation(userInformation);
          }}>
          Proceed to Payment
        </Button>
      </Box>
    </>
  );
}

export default UserInformation;
