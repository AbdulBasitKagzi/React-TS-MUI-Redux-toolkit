import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Image_Lsit } from '../../data/Constants';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  };
}

const ImageListComponent = (): JSX.Element => {
  return (
    <>
      <ImageList
        sx={{
          display: {
            xs: 'block',
            sm: 'grid'
          },
          objectFit: {
            xs: 'contain'
          }
        }}
        variant="quilted"
        cols={4}>
        {Image_Lsit.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              '.MuiImageListItem-img': {
                objectFit: 'contain',
                height: 'unset'
              }
            }}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{}}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ImageListComponent;
