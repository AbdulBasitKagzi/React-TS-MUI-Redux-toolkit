import { assets } from "../../assets";

// mui imports
import { Box } from "@mui/material";

function CategoryGrid() {
  return (
    <Box
      className="parent"
      sx={{
        display: {
          xl: "flex",
          lg: "flex",
          md: "flex",
          sm: "flex",
          xs: "grid",
        },
        justifyContent: "center",
        maxWidth: "90%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          mt: 1,
        }}
      >
        <img
          src={assets.images.handBag}
          alt="handbag"
          width="100%"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          mt: 1,
        }}
      >
        <img src={assets.images.hats} alt="hat" width="100%" />
      </Box>
      <Box
        sx={{
          mt: 1,
        }}
      >
        <img src={assets.images.heels} alt="heel" width="100%" />
      </Box>
    </Box>
  );
}

export default CategoryGrid;
