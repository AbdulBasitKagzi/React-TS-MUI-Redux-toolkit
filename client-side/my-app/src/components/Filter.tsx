import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { productActions } from "../store/userSlice/productSlice";
import { MouseEvent } from "react";

import {
  humanFilter,
  brandFilter,
  categoriesFilter,
  sizeFilter,
} from "../assets/Constants";

// mui imports
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import { Drawer } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

// function valuetext(value: number) {
//   return `${value}°C`;
// }

const drawerWidth = 275;

export default function FilterSlider() {
  const [filterState, setFilterState] = useState<number[]>([]);
  const [BrandFilter, setBrandFilter] = useState<number[]>([]);
  const [CategoriesFilter, setCategoriesFilter] = useState<number[]>([]);
  const [SizeFilter, setSizeFilter] = useState<number[]>([]);
  const [click, setClick] = useState<boolean>(false);
  const params = useParams();

  const dispatch = useDispatch();

  // const handleFilter = (value: number, isChecked: boolean) => {
  //   if (isChecked) {
  //     setFilterState((prev) => [...prev, value]);
  //   } else {
  //     setFilterState(filterState.filter((state) => state !== value));
  //   }
  // };
  const handleBrandFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setBrandFilter((prev) => [...prev, value]);
    } else {
      setBrandFilter(BrandFilter.filter((state) => state !== value));
    }
  };
  const handleCategoriesFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setCategoriesFilter((prev) => [...prev, value]);
    } else {
      setCategoriesFilter(CategoriesFilter.filter((state) => state !== value));
    }
  };
  const handleSizeFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setSizeFilter((prev) => [...prev, value]);
    } else {
      setSizeFilter(SizeFilter.filter((state) => state !== value));
    }
  };
  useEffect(() => {
    console.log("state", filterState);
    console.log("brand", BrandFilter);
    console.log("size", SizeFilter);
    console.log("category", CategoriesFilter);
  }, [filterState, BrandFilter, SizeFilter, CategoriesFilter]);

  useEffect(() => {
    console.log("I am dispatching");
    dispatch(productActions.filterByHuman(params.type));
  }, [params.type, dispatch]);

  useEffect(() => {
    click && dispatch(productActions.filterByHuman(filterState));
  }, [filterState, click, dispatch]);

  useEffect(() => {
    click && dispatch(productActions.filterByBrand(BrandFilter));
  }, [BrandFilter, click, dispatch]);

  useEffect(() => {
    click && dispatch(productActions.filterByCategory(CategoriesFilter));
  }, [CategoriesFilter, click, dispatch]);

  useEffect(() => {
    click && dispatch(productActions.filterBySize(SizeFilter));
  }, [SizeFilter, click, dispatch]);
  // const [value, setValue] = React.useState<number[]>([120, 300]);

  // const handleChange = (event: Event, newValue: number | number[]) => {
  //   setValue(newValue as number[]);
  // };

  // to open menu in mobile view
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          maxWidth: {
            xs: "160px",
          },
          border: 2,
          backgroundColor: "#F9FAFB",
        }}
      >
        <Box sx={{ mx: 4 }}>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontWeight: "600",
              fontSize: "16px",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#1F2937",
              marginBottom: "10px",
            }}
          >
            PRICES
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              id="range-slider"
              gutterBottom
              sx={{
                fontFamily: "Jost",
                fontWeight: "400",
                fontSize: "20px",
                letterSpacing: "0.02em",
                color: "#4B5563",
              }}
            >
              Range
            </Typography>
            <Typography
              id="range-slider"
              gutterBottom
              sx={{
                fontFamily: "Jost",
                fontWeight: "500",
                fontSize: "20px",
                letterSpacing: "0.02em",
                color: "#1F2937",
              }}
            >
              {/* ${priceFilter[0]}-$
              {priceFilter[1]} */}
            </Typography>
          </Box>
          <Slider
            sx={{
              color: "#EB5757",
              width: { xl: "376px", lg: "376px", md: "115px", sm: "115px" },
            }}
            // value={priceFilter}
            // onChange={(_, value) => setPriceFilter(value as [number, number])}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            max={2000}
            min={1}
            name="price"
            disableSwap
            getAriaLabel={() => "Minimum distance"}
          />
        </Box>
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
              ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 1 },
            }}
          >
            Filters
          </Typography>
          {humanFilter.map((human) => (
            <FormControlLabel
              control={<Checkbox />}
              label={human.value}
              sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
              onClick={() => {
                setClick(true);
                // handleFilter(human.id);
              }}
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
              ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 1 },
            }}
          >
            Brands
          </Typography>
          {brandFilter.map((brand) => (
            <FormControlLabel
              control={<Checkbox />}
              label={brand.value}
              sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                setClick(true);
                handleBrandFilter(
                  brand.id,
                  (e.target as unknown as { checked: boolean }).checked
                );
              }}
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
              ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 1 },
            }}
          >
            Categories
          </Typography>
          {categoriesFilter.map((category) => (
            <FormControlLabel
              control={<Checkbox />}
              label={category.value}
              sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                setClick(true);
                handleCategoriesFilter(
                  category.id,
                  (e.target as unknown as { checked: boolean }).checked
                );
              }}
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
              ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 1 },
            }}
          >
            Size
          </Typography>
          {sizeFilter.map((size) => (
            <FormControlLabel
              control={<Checkbox />}
              label={size.value}
              sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                setClick(true);
                handleSizeFilter(
                  size.id,
                  (e.target as unknown as { checked: boolean }).checked
                );
              }}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: {
            xs: "flex",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          },
          mt: { xs: "-4000px" },
        }}
      >
        <FilterListIcon />
      </IconButton>

      <Box
        sx={{
          maxWidth: {
            xl: "450px",
            lg: "450px",
            md: "450px",
            sm: "255px",
            xs: "160px",
          },
          maxHeight: { xl: "2000px", lg: "2000px" },
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "block",
            xs: "none",
          },
          border: 2,
          backgroundColor: "#F9FAFB",
        }}
      >
        <Box sx={{ mx: 4 }}>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontWeight: "600",
              fontSize: "16px",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#1F2937",
              marginBottom: "10px",
            }}
          >
            PRICES
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              id="range-slider"
              gutterBottom
              sx={{
                fontFamily: "Jost",
                fontWeight: "400",
                fontSize: "20px",
                letterSpacing: "0.02em",
                color: "#4B5563",
              }}
            >
              Range
            </Typography>
            <Typography
              id="range-slider"
              gutterBottom
              sx={{
                fontFamily: "Jost",
                fontWeight: "500",
                fontSize: "20px",
                letterSpacing: "0.02em",
                color: "#1F2937",
              }}
            >
              {/* ${priceFilter[0]}-$
              {priceFilter[1]} */}
            </Typography>
          </Box>
          <Slider
            sx={{
              color: "#EB5757",
              width: { xl: "376px", lg: "376px", md: "115px", sm: "115px" },
            }}
            // value={priceFilter}
            // onChange={(_, value) => setPriceFilter(value as [number, number])}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            max={2000}
            min={1}
            name="price"
            disableSwap
            getAriaLabel={() => "Minimum distance"}
          />
        </Box>
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
              mt: 10,
              ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 },
            }}
          >
            Brands
          </Typography>
          {brandFilter.map((brand) => (
            <FormControlLabel
              control={<Checkbox />}
              label={brand.value}
              sx={{ ml: { xl: 4, lg: 4, md: 4, sm: 4, xs: 0 } }}
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                setClick(true);
                handleBrandFilter(
                  brand.id,
                  (e.target as unknown as { checked: boolean }).checked
                );
              }}
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
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                setClick(true);
                handleCategoriesFilter(
                  category.id,
                  (e.target as unknown as { checked: boolean }).checked
                );
              }}
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
              onClick={(e: MouseEvent<HTMLLabelElement>) => {
                setClick(true);
                handleSizeFilter(
                  size.id,
                  (e.target as unknown as { checked: boolean }).checked
                );
              }}
            />
          ))}
        </FormGroup>
      </Box>
      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "110px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
