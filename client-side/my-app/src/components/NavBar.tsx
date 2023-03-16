import * as React from "react";
import { useNavigate } from "react-router-dom";
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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    id: "majestic",
    value: "Majestic",
    action: "#",
  },
  {
    id: "women",
    value: "Women",
    action: "#",
  },
  {
    id: "men",
    value: "Men",
    action: "#",
  },
  {
    id: "collection",
    value: "Collection",
    action: "#",
  },
  {
    id: "outlet",
    value: "Outlet",
    action: "#",
  },
  {
    id: "categorydetail",
    value: "Categorydetail",
    action: "/categorydetail",
  },
];
const navIcons = [callVector, shoppingcartVector, likeVector];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {gender.map((item) => (
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
                onClick={() => setOpenModel(true)}
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
              justifyContent: "space-between",
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <Box
              sx={{
                color: "#fff",
                fontFamily: "Josefin Sans",
                display: "inline-block",
                // mr: "32px",
                ml: "173px",
              }}
            >
              {gender.map((item) => (
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
                  onClick={() => setOpenModel(true)}
                >
                  {item.value}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {navIcons.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#212121",
                    fontFamily: "Josefin Sans",
                    fontSize: "16px",
                    display: "inline-block",
                    mr: "32px",
                    mt: "27px",
                  }}
                >
                  <img src={item} alt="item" />
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
