import React from "react";

// mui imports
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  OutlinedInput,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box sx={{ maxWidth: "90%", mx: "auto", mt: 5 }}>
        <Box
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "flex",
              // xs: "flex",
            },
            justifyContent: "space-between",

            // mt: 14,
          }}
        >
          <Box
            sx={{
              display: {
                xl: "flex",
                lg: "flex",
                md: "flex",
                sm: "flex",
                xs: "flex",
              },
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ textAlign: { xs: "center" } }}>
              <List>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#212121",
                  }}
                >
                  Company Info
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  About Us
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Affiliate
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Fashion Blogger
                </ListItem>
              </List>
            </Box>
            <Box>
              <List>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#212121",
                  }}
                >
                  Help & Support
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Shipping Info
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Refunds
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  How to Order
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  How to Track
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Size Guides
                </ListItem>
              </List>
            </Box>
            <Box>
              <List>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#212121",
                  }}
                >
                  Customer Care
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Contact Us
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Payment Methods
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "16px",
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: "#616161",
                  }}
                >
                  Bonus Point
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: "20px",
                fontWeight: 700,
                color: "#212121",
              }}
            >
              Signup For The Latest News
            </Typography>
            <FormControl
              sx={{ m: 1, width: { xl: "275px", lg: "275px" } }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Enter Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      //   onClick={handleClickShowPassword}
                      //   onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="email"
              />
            </FormControl>
            <Box
              sx={{
                fontFamily: "Jost",
                fontSize: "16px",
                fontWeight: 400,
                color: "#616161",
                mt: { xl: 7, lg: 7, md: 7, sm: 7, xs: 2 },
                ml: { xs: 4, sm: 0, md: 0, lg: 0, xl: 0 },
                display: "flex",
              }}
            >
              <MailOutlineIcon sx={{ color: "#212121" }} />
              <Typography sx={{ ml: 1 }}>something@email.com</Typography>
            </Box>
            <Box
              sx={{
                fontFamily: "Jost",
                fontSize: "16px",
                fontWeight: 400,
                color: "#616161",
                mt: { xl: 2, lg: 2, md: 2, sm: 2, xs: 2 },
                mb: 2,
                ml: { xs: 4, sm: 0, md: 0, lg: 0, xl: 0 },
                display: "flex",
              }}
            >
              <PhoneIcon sx={{ color: "#212121" }} />
              <Typography sx={{ ml: 1 }}>+2321354524</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mb: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 } }}>
          <FacebookIcon sx={{ mr: 6 }} />
          <InstagramIcon sx={{ mr: 6 }} />
          <YouTubeIcon sx={{ mr: 6 }} />
          <TwitterIcon sx={{ mr: 6 }} />
        </Box>
        <Box>
          <Divider variant="middle" />
        </Box>
        <Box textAlign="left" display="flex" sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontSize: "14px",
              color: "#7E92B2",
              mr: 1,
            }}
          >
            All rights Reserved
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontSize: "14px",
              color: "#7E92B2",
              fontWeight: 700,
            }}
          >
            &copy; Your Company, 2021
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
