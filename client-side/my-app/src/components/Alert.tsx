import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function DescriptionAlerts(props: any) {
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
