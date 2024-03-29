import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cart.slice';

// mui imports
import { Box, Button, Typography, useTheme } from '@mui/material';

import { user } from '../../forms/userInformation/userInformation.types';

interface confirmationPageProps {
  userInformation: user;
}

function ConfirmationPage({ userInformation }: confirmationPageProps): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box sx={{ mt: 11 }}>
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontSize: '24px',
          fontWeight: 700,
          textAlign: 'center',
          color: theme.palette.info.dark
        }}>
        Your order is confirmed
      </Typography>
      <Box sx={{ mx: 'auto', mt: 2, width: { md: '490px', sm: '335px', xs: '283px' } }}>
        <Typography
          sx={{
            textAlign: 'center',
            wordBreak: 'break-all',
            fontFamily: 'Roboto',
            fontSize: {
              sm: '18px',
              xs: '16px'
            },
            color: theme.palette.info.dark,
            fontWeight: 400,
            px: 4,
            py: 4
          }}>
          Thank you for shopping with us Your order will reach you on{' '}
          {new Date(userInformation.date).toDateString()}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.success.main,
            borderRadius: 0,
            mx: 'auto',
            textTransform: 'capitalize',
            width: { xs: '50%' },
            height: '51px'
          }}
          onClick={() => {
            dispatch(cartActions.emptyCart());
            navigate('/');
          }}>
          Continue Shopping
        </Button>
      </Box>
    </Box>
  );
}

export default ConfirmationPage;
