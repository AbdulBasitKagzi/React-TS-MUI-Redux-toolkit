import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Image_Lsit } from "../assets/Constants";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Image_List = () => {
  return (
    <>
      <ImageList
        sx={{
          width: { xl: 1400, lg: 1300, md: 900, sm: 700, xs: 300 },
          //   height: 786,
          display: {
            xs: "block",
            xl: "grid",
            lg: "grid",
            md: "grid",
            sm: "grid",
          },
          objectFit: {
            xs: "contain",
            md: "fill",
          },
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {Image_Lsit.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{ height: { xs: "45%" } }}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ height: "100%", objectFit: "fill" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Image_List;
