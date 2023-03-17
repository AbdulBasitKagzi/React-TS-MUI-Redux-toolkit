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
  //   position: "absolute",
  mt: { xl: "23%", lg: "25%", md: "40%", sm: "50%", xs: "150%" },
  ml: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "#FFFFFF",
  borderRadius: "0px 0px 25px 25px",
  //   boxShadow: 24,
  p: 4,
};

type props = {
  openModel: boolean;
  setOpenModel: (value: boolean) => void;
};

const NavbarModel: React.FC<props> = ({ openModel, setOpenModel }) => {
  //   const handleOpen = () => setOpenModel(true);
  const handleClose = () => setOpenModel(false);
  const { routeValue } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Box sx={{ maxWidth: "90%", display: "flex", mx: "auto" }}>
              <Box
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "flex",
                    sm: "flex",
                    xs: "block",
                  },
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
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                        onClick={() => {
                          handleClose();
                          navigate(
                            `/categorydetail/${routeValue}/${category.id}`
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
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                        onClick={() => {
                          handleClose();
                          navigate(`/categorydetail/${routeValue}/${brand.id}`);
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
                <img src={photo} alt="abdul" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default NavbarModel;
