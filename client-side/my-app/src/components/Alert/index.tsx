import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import { cartActions } from "../../store/cart/cart.slice";
import { useDispatch } from "react-redux";

type props = {
  type: any;
  title: string;
  message: string;
  openUp: boolean;
  closeDuration: number;
  setOpenUp: (val: boolean) => void;
};

function DescriptionAlerts(props: props) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      props.setOpenUp(false);
      dispatch(cartActions.notification());
    }, props.closeDuration);
  }, []);

  return (
    <div>
      <Snackbar open={props.openUp} autoHideDuration={props.closeDuration}>
        <Alert severity={props.type}>
          <AlertTitle>{props.title}</AlertTitle>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DescriptionAlerts;
