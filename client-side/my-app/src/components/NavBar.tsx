import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice/userSlice";
import { gender } from "../assets/Constants";

// images and icons import
import callVector from "../assets/icons/callVector.svg";
import shoppingcartVector from "../assets/icons/shoppingcartVector.svg";
import likeVector from "../assets/icons/likeVector.svg";

// mui imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavbarModel from "./NavbarModel";
import { RootState } from "../store/userSlice/store";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = [
//   {
//     id: "majestic",
//     value: "Majestic",
//     action: "#",
//   },
//   {
//     id: "women",
//     value: "Women",
//     action: "#",
//   },
//   {
//     id: "men",
//     value: "Men",
//     action: "#",
//   },
//   {
//     id: "collection",
//     value: "Collection",
//     action: "#",
//   },
//   {
//     id: "outlet",
//     value: "Outlet",
//     action: "#",
//   },
//   {
//     id: "categorydetail",
//     value: "Categorydetail",
//     action: "/categorydetail",
//   },
// ];

export default function DrawerAppBar(props: Props) {
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navIcons = [
    { id: 1, value: callVector },
    { id: 2, value: shoppingcartVector },
    { id: 3, value: likeVector },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {gender.map((item: { id: number; value: string; slug: string }) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.value}
                sx={{
                  color: "#212121",
                  fontFamily: "Josefin Sans",
                  fontSize: "16px",
                  display: "inline-block",
                  // mr: "32px",
                  // mt: "27px",
                }}
                onClick={() => {
                  dispatch(userActions.makeRoute(item.slug));
                  setOpenModel(true);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [openModel, setOpenModel] = React.useState<boolean>(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {openModel && (
        <NavbarModel openModel={openModel} setOpenModel={setOpenModel} />
      )}
      <AppBar
        component="nav"
        sx={{
          background: "transparent",
          boxShadow: "none",
          position: "static",
          maxWidth: "1600px",
          mx: "auto",
        }}
      >
        <Toolbar sx={{ display: "block" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: {
                xl: "space-between",
                lg: "space-between",
                md: "space-between",
                sm: "end",
                xs: "end",
              },
              mt: { xl: 0, lg: 0, md: 0, sm: "-8%", xs: -6 },
              mr: { xl: 0, lg: 0, md: 0, sm: 0, xs: -5 },
            }}
          >
            <Box
              className="class"
              sx={{
                color: "#fff",
                fontFamily: "Josefin Sans",
                // display: "inline-block",
                // mr: "32px",
                ml: "173px",
                cursor: "pointer",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {gender.map(
                (item: { id: number; value: string; slug: string }) => (
                  <Typography
                    key={item.id}
                    sx={{
                      color: "#212121",
                      fontFamily: "Josefin Sans",
                      fontSize: "16px",
                      display: "inline-block",
                      mr: "32px",
                      mt: "27px",
                    }}
                    onClick={() => {
                      item.id === 0
                        ? navigate("/")
                        : dispatch(userActions.makeRoute(item.slug));
                      if (item.id !== 0) {
                        setOpenModel(true);
                      }
                    }}
                  >
                    {item.value}
                  </Typography>
                )
              )}
            </Box>
            <Box
              sx={{
                // display: {
                //   xs: "flex",
                //   sm: "flex",
                //   md: "flex",
                //   lg: "flex",
                //   xl: "flex",
                // },
                display: "flex",
                // justifyContent: "left",
              }}
            >
              {navIcons.map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    color: "#212121",
                    fontFamily: "Josefin Sans",
                    fontSize: "16px",
                    display: "inline-block",
                    mr: "32px",
                    mt: "27px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    item.id === 2 && cartProducts.length !== 0
                      ? navigate("/shippingpage")
                      : console.log("hi");
                  }}
                >
                  <img src={item.value} alt="item" />
                </Typography>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
