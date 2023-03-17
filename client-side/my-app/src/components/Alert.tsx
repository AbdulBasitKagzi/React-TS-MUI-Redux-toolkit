import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

type props = {
  type: any;
  title: string;
  message: string;
};

function DescriptionAlerts(props: props) {
  return (
    <div>
      <Alert severity={props.type}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
      </Alert>
    </div>
  );
}

export default DescriptionAlerts;
