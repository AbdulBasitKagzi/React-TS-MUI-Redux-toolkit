import { Box } from "@mui/material";
import { assets } from "../../assets";

function ImageGrid(): JSX.Element {
  return (
    <Box
      sx={{
        // display: "flex",
        // justifyContent: "center",
        // alignContent: "center",
        mt: { xl: 12, lg: 12, md: 12, sm: 8, xs: 5 },
        maxWidth: "90%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: { lg: "flex", md: "flex", sm: "flex" },
          justifyContent: "center",
          gap: 1,
          width: { xl: "100%" },
          // pl: 2,
        }}
      >
        <Box
          sx={{
            // width: { xl: 782, lg: 500, md: 400, sm: 300, xs: 330 },
            // height: { xl: 782, lg: 500, md: 400, sm: 300, xs: 280 },
            mb: { xs: 1 },
            // mr: 1,
            textAlign: "center",
          }}
        >
          <img
            src={assets.images.urbanStories}
            alt="urban"
            width="100%"
            height="99%"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={
            {
              // width: { xl: 782, lg: 500, md: 400, sm: 300, xs: 330 },
              // height: { xl: 782, lg: 500, md: 400, sm: 300, xs: 280 },
            }
          }
        >
          <img
            src={assets.images.countryLights}
            alt="countylights"
            width="100%"
            height="98%"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ImageGrid;
