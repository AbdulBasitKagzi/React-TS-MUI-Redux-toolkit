import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";

type props = {
  type: any;
  title: string;
  message: string;
  openUp: boolean;
  closeDuration: number;
  setOpenUp: (val: boolean) => void;
};

function DescriptionAlerts(props: props) {
  useEffect(() => {
    console.log(" i am here");
    setTimeout(() => {
      console.log("here");
      props.setOpenUp(false);
      console.log(props.openUp);
    }, 6000);
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
