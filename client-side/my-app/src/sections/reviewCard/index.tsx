import React from 'react';

// mui imports
import { Box, Typography } from '@mui/material';

import styles from './reviewer.module.css';
import { assets } from '../../assets';

const ReviewCard: React.FC = () => {
  let arr: {
    id: string;
    image: string | undefined;
    image_1: string | undefined;
    name: string;
    profession: string;
    title: string;
    height: string;
  }[];
  arr = [
    {
      id: '1',
      image: assets.images.leatherShoe,
      image_1: assets.images.women_1,
      name: 'Kelly Hudson',
      profession: 'Fashion Activist',
      title: 'How important are shoes in your style?',
      height: '414px'
    },
    {
      id: '2',
      image: assets.images.makeUp,
      image_1: assets.images.women_2,
      name: 'Judy Garland',
      profession: 'Fashion Activist',
      title: 'Fashion trend forecast for  Summer 2021',
      height: '414px'
    },
    {
      id: '3',
      image: assets.images.clothMaking,
      image_1: assets.images.women_3,
      name: 'Rachel Green',
      profession: 'Fashion Activist',
      title: 'Spring exclusive collection for Men & Women',
      height: '414px'
    }
  ];
  return (
    <>
      <Box
        sx={{
          display: {
            sm: 'flex',
            xs: 'block'
          },
          justifyContent: 'center',
          mx: 'auto',
          mt: { xs: 8 }
        }}>
        {arr.map(arr => (
          <Box key={arr.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}>
              <img src={arr.image} alt="assets.images.leatherShoe" width="100%" height={arr.height} />
              <Box
                sx={{
                  position: 'absolute',
                  top: '370px',
                  background: '#FCFCFC',
                  width: { lg: 304 }
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                  }}>
                  <img className={styles.reviwer_image} src={arr.image_1} alt="women_1" />
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      justifyContent: 'space-between'
                    }}>
                    <Box
                      sx={{
                        display: 'flex'
                      }}>
                      <img src={assets.icons.Eye} alt="eye" width="24px" height="22px" />
                      <Typography>35</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex'
                      }}>
                      <img src={assets.icons.Heart} alt="heart" width="24px" height="22px" />
                      <Typography>35</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex'
                      }}>
                      <img src={assets.icons.Share} alt="share" width="24px" height="22px" />
                      <Typography>35</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    textAlign: 'left',
                    mt: { md: '25px', sm: '10px' }
                  }}>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      fontFamily: 'Jost',
                      fontSize: {
                        md: '16px',
                        sm: '12px'
                      },
                      fontWeight: 700
                    }}>
                    {arr.name}
                  </Typography>
                  <Typography
                    sx={{
                      display: 'inline-block',
                      ml: '21px',
                      fontSize: {
                        md: '16px',
                        sm: '12px'
                      }
                    }}>
                    {arr.profession}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mt: { md: 15, xs: 12 },
                mx: { lg: 8, xs: 1 }
              }}>
              <Typography
                variant="h4"
                textAlign="left"
                sx={{
                  fontFamily: 'Jost',
                  fontWeight: 700,
                  fontSize: { xl: 26, lg: 23, md: 21, sm: 16, xs: 20 },
                  wordBreak: 'inherit',
                  msWordBreak: 'break-all'
                }}>
                {arr.title}
              </Typography>
              <Typography
                sx={{
                  wordBreak: 'break-word',
                  fontSize: '16px',
                  fontFamily: 'Lato',
                  textAlign: 'left',
                  lineHeight: '22.4px',
                  mt: { sm: 4 }
                }}>
                Is it possible to assess a person just on the basis of their footwear? Obviously, nobody
                should criticize, but certainly, shoes say a lot about someone. It matters for the outsiders
                that we meet every day...
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                textAlign: 'left',
                ml: { lg: 8, md: 1, xs: 1 },
                my: { sm: 8, xs: 2 }
              }}>
              <Typography>Read More</Typography>
              <img
                src={assets.icons.blackArrowicon}
                alt="arrowicon"
                width="18px"
                height="18px"
                style={{ marginLeft: '16px', marginTop: '3px' }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ReviewCard;
