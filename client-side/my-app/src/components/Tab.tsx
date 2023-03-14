import * as React from "react";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { productActions } from "../store/userSlice/productSlice";

// mui imports
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface Props {
  tabs: Array<Object>;
}
const CategoryTab: FC<Props> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        // textColor="#212121"
        sx={{ textColor: "#212121" }}
        indicatorColor="secondary"
        onChange={handleChange}
        centered
      >
        {tabs?.map((tab: any) => (
          <Tab
            sx={{
              color: "#212121",
              border: 1,
              borderColor: "#F5F5F5",
              mr: 1,
              fontSize: {
                xl: "0.875rem",
                lg: "0.875rem",
                md: "0.875rem",
                sm: "0.875rem",
                xs: 7,
              },
              padding: {
                xl: "12px 16px",
                lg: "12px 16px",
                md: "12px 16px",
                sm: "12px 16px",
                xs: "12px 5px",
              },
              minWidth: {
                xs: 0,
                xl: 90,
                lg: 90,
                md: 90,
                sm: 90,
              },
            }}
            label={tab.value}
            onClick={() => {
              console.log("clicked");
              dispatch(productActions.filterProduct(tab.id));
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTab;
