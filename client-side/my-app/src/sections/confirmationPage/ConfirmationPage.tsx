import { user } from "../../pages/ShippingPage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart.slice";
import { Box, Button, Typography } from "@mui/material";

interface confirmationPageProps {
  userInformation: user;
}

function ConfirmationPage({
  userInformation,
}: confirmationPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box sx={{ mt: 11 }}>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontSize: "24px",
          fontWeight: 700,
        }}
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
            fontSize: {
              xl: "22px",
              lg: "22px",
              md: "22px",
              sm: "22px",
              xs: "16px",
            },
            fontWeight: 400,
          }}
        >
          Thank you for shopping with us Your order will reach you on{" "}
          {new Date(userInformation.date).toDateString()}
        </Typography>
      </Box>
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
          dispatch(cartActions.emptyCart());
          navigate("/");
        }}
      >
        Continue Shopping
      </Button>
    </Box>
  );
}

export default ConfirmationPage;
