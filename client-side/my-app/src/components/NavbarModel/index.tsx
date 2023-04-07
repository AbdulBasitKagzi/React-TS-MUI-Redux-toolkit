import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { brandFilter, categoriesFilter } from "../../data/Constants";
import { assets } from "../../assets";

// mui imports
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { RootState } from "../../store/store";

const style = {
  ml: "50%",
  mt: "53px",
  height: { xl: "550px", md: "350px", xs: "550px" },
  width: { xl: "100%", lg: "100%", md: "100%", xs: "90%" },
  bgcolor: {
    xl: "#FFFFFF",
    lg: "#FFFFFF",
    md: "#FFFFFF",
    sm: "#FFFFFF",
    xs: "#F9FAFB",
  },
  border: 0,
  borderRadius: "0px 0px 25px 25px",
  p: 4,
  maxWidth: "1600px",
  mx: "auto",
  overflowX: "auto",
};

type props = {
  openModel: boolean;
  setOpenModel: (value: boolean) => void;
  setBackground: (value: string) => void;
  setValue: (value: number) => void;
};

const NavbarModel: React.FC<props> = ({
  openModel,
  setOpenModel,
  setBackground,
  setValue,
}) => {
  const handleClose = () => {
    setBackground("transparent");
    setOpenModel(false);
    setValue(-1);
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
        <Box sx={style}>
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
                overflowX: "auto",
                // height: "100%",
              }}
            >
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "block",
                    xs: "block",
                  },
                  gap: "30px",
                  // flexWrap: "wrap",
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
                <img src={assets.images.photo} alt="abdul" width="100%" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default NavbarModel;
