import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FC } from "react";
interface Props {
  tabs: Array<Object>;
}
const CategoryTab: FC<Props> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs?.map((tab: any) => (
          <Tab label={tab.value} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTab;
