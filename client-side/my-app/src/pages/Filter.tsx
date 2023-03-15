import * as React from "react";
import Box from "@mui/material/Box";

import {
  humanFilter,
  brandFilter,
  categoriesFilter,
  sizeFilter,
} from "../assets/Constants";

// mui imports
import { Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}
export default function FilterSlider() {
  const [value, setValue] = React.useState<number[]>([120, 300]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Box
      sx={{
        maxWidth: {
          xl: "450px",
          lg: "450px",
          md: "450px",
          sm: "255px",
          xs: "160px",
        },
        border: 2,
        backgroundColor: "#F9FAFB",
      }}
    >
      {/* <Box sx={{ width: 500 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box> */}
      <FormGroup>
        <Typography
          textAlign="left"
          sx={{
            fontFamily: "Jost",
            fontWeight: 600,
            fontSize: "16px",
            color: "Grey/grey-800",
            ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 },
          }}
        >
          Filters
        </Typography>
        {humanFilter.map((human) => (
          <FormControlLabel
            control={<Checkbox />}
            label={human.value}
            sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
          />
        ))}

        <Typography
          textAlign="left"
          sx={{
            fontFamily: "Jost",
            fontWeight: 600,
            fontSize: "16px",
            color: "Grey/grey-800",
            mt: 10,
            ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 },
          }}
        >
          Brands
        </Typography>
        {categoriesFilter.map((category) => (
          <FormControlLabel
            control={<Checkbox />}
            label={category.value}
            sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
          />
        ))}
        <Typography
          textAlign="left"
          sx={{
            fontFamily: "Jost",
            fontWeight: 600,
            fontSize: "16px",
            color: "Grey/grey-800",
            mt: 10,
            ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 },
          }}
        >
          Categories
        </Typography>
        {categoriesFilter.map((category) => (
          <FormControlLabel
            control={<Checkbox />}
            label={category.value}
            sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
          />
        ))}
        <Typography
          textAlign="left"
          sx={{
            fontFamily: "Jost",
            fontWeight: 600,
            fontSize: "16px",
            color: "Grey/grey-800",
            mt: 10,
            ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 },
          }}
        >
          Size
        </Typography>
        {sizeFilter.map((size) => (
          <FormControlLabel
            control={<Checkbox />}
            label={size.value}
            sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
