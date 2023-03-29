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
  position: "relative",
  mt: { xl: "53px", lg: "340px", md: "484px", sm: "484px", xs: "600px" },
  // top: { xl: "56%", lg: "60%", md: "60%", sm: "55%", xs: "55%" },
  ml: "50%",
  transform: "translate(-50%, -50%)",
  width: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "80%" },
  height: "100%",
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
  //   const handleOpen = () => setOpenModel(true);
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
          // overflow: "auto",
          // ".MuiModal-root": {
          //   overflowY: "scroll",
          //   overflowX: "scroll",
          // },
        }}
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        // style={{ overflow: "scroll" }}
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
                    xs: "flex",
                  },
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <List>
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
                  <List>
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
                  <List>
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
