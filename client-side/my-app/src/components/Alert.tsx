import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

type props = {
  type: any;
  title: string;
  message: string;
  openUp: boolean;
  closeDuration: number;
};

function DescriptionAlerts(props: props) {
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
