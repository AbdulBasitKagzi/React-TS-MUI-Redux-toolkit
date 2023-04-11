// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import './swiperstyles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box, Typography, useTheme } from '@mui/material';
import { assets } from '../../assets';
const ImageSlider: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%' },
        opacity: '70%',
        background: '#212121',
        mt: 12
      }}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Box
            sx={{
              position: 'relative',

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <img src={assets.images.outletBerlin} alt="india" style={{ zIndex: 3 }} />
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                zIndex: 3,
                opacity: 0.7,
                background: '#212121'
              }}
            />
            <Box sx={{ position: 'absolute', zIndex: 3 }}>
              <Typography
                sx={{
                  fontFamily: 'Jost',
                  fontSize: {
                    lg: '39px',
                    sm: '29px',
                    xs: '15px'
                  },
                  fontWeight: 400,
                  color: theme.palette.success.dark
                }}>
                Visit our outlets in{' '}
                <Typography
                  sx={{
                    fontSize: {
                      lg: '95px',
                      sm: '75px',
                      xs: '45px'
                    },
                    color: theme.palette.success.main
                  }}>
                  Berlin
                </Typography>
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: 'relative',

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <img src={assets.images.outletBerlin} alt="india" />
            <Box
              sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                zIndex: 3,
                opacity: 0.7,
                background: '#212121'
              }}
            />
            <Box sx={{ position: 'absolute', zIndex: 3 }}>
              <Typography
                sx={{
                  fontFamily: 'Jost',
                  fontSize: {
                    lg: '39px',
                    sm: '29px',
                    xs: '15px'
                  },
                  fontWeight: 400,
                  color: theme.palette.success.dark
                }}>
                Visit our outlets in{' '}
                <Typography
                  sx={{
                    fontSize: {
                      lg: '95px',
                      sm: '75px',
                      xs: '45px'
                    },
                    color: theme.palette.success.main
                  }}>
                  India
                </Typography>
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
