import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { brandFilter, categoriesFilter } from "../assets/Constants";
import photo from "../assets/images/photo.png";

// images and icon import
// mui imports
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { RootState } from "../store/userSlice/store";

const style = {
  ml: "50%",
  mt: "53px",
  height: { xl: "400px", xs: "550px" },
  width: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "90%" },
  bgcolor: {
    xl: "#FFFFFF",
    lg: "#FFFFFF",
    md: "#FFFFFF",
    sm: "#FFFFFF",
    xs: "#F9FAFB",
  },
  border: 0,
  borderRadius: "0px 0px 25px 25px",
  //   boxShadow: 24,
  p: 4,
  maxWidth: "1600px",
  mx: "auto",
  // overflow: "auto",
};

type props = {
  openModel: boolean;
  setOpenModel: (value: boolean) => void;
  setBackground: (value: string) => void;
};

const NavbarModel: React.FC<props> = ({
  openModel,
  setOpenModel,
  setBackground,
}) => {
  const handleClose = () => {
    setBackground("transparent");
    setOpenModel(false);
  };
  const { routeValue } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        sx={{
          ".MuiModal-backdrop": {
            background: "none",
          },
        }}
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style} style={{ overflow: "scroll" }}>
          <Box>
            <Box
              sx={{
                maxWidth: "90%",
                display: "flex",
                mx: "auto",
                justifyContent: {
                  xl: "space-between",
                  lg: "space-between",
                  md: "space-between",
                  sm: "space-between",
                  xs: "center",
                },
                overflow: "auto",
                // height: "100%",
              }}
            >
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "flex",
                    xs: "block",
                  },
                  // flexWrap: "wrap",
                }}
              >
                <Box>
                  <List sx={{ paddingRight: { lg: 10, md: 5 } }}>
                    <ListItem
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      Products
                    </ListItem>
                    {categoriesFilter.map((category) => (
                      <ListItem
                        key={category.id}
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 400,
                          cursor: "pointer",
                          "&:hover": {
                            mb: 2,
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => {
                          handleClose();
                          navigate(
                            `/categorydetail/${routeValue}/${category.slug}`
                          );
                        }}
                      >
                        {category.value}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <List sx={{ paddingRight: { lg: 10, md: 5 } }}>
                    <ListItem
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      Designers
                    </ListItem>
                    {brandFilter.map((brand) => (
                      <ListItem
                        key={brand.id}
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 400,
                          cursor: "pointer",
                          "&:hover": {
                            mb: 2,
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => {
                          handleClose();
                          navigate(
                            `/categorydetail/${routeValue}/${brand.slug}`
                          );
                        }}
                      >
                        {brand.value}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <List sx={{ paddingRight: { lg: 10, md: 5 } }}>
                    <ListItem
                      sx={{
                        fontFamily: "Inter",
                        fontSize: "24px",
                        fontWeight: 400,
                      }}
                    >
                      Archived collections
                    </ListItem>
                    {categoriesFilter.map((category) => (
                      <ListItem
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 400,
                          cursor: "pointer",
                          "&:hover": {
                            mb: 2,
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {category.value}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
              <Box
                sx={{
                  width: { xl: "450px", lg: "450px", md: "450px", sm: "350px" },
                  height: "340px",
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "block",
                    xs: "none",
                  },
                }}
              >
                <img src={photo} alt="abdul" width="100%" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default NavbarModel;
