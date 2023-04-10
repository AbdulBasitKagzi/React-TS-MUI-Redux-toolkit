import { Box, Button, Typography } from '@mui/material';
import { assets } from '../../assets';

interface advertiseProps {
  title?: string;
  subtitle: string;
  message: string;
  buttontitle: string;
  image: string | undefined;
}
function Advertise({ title, subtitle, message, buttontitle, image }: advertiseProps): JSX.Element {
  return (
    <Box
      sx={{
        mt: { xs: 6 },
        maxWidth: '90%',
        mx: 'auto'
      }}>
      <Box
        sx={{
          display: { sm: 'flex' },
          justifyContent: 'center',
          gap: 1
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',

            background: '#EEEEEE',
            width: '100%',

            mb: { xs: 1 },

            mx: 'auto'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { sm: 'start', xs: 'center' },
              justifyContent: 'center',

              ml: { xl: 13, lg: 9, md: 6, sm: 6 },
              mx: { xs: 'auto' }
            }}>
            <Typography
              sx={{
                fontFamily: 'Jost',
                fontSize: {
                  xl: '35px',
                  lg: '29px',
                  md: '25px',
                  sm: '20px',
                  xs: '20px'
                },
                fontWeight: 700,
                color: '#616161',

                paddingTop: { xs: '40px' }
              }}>
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Jost',
                fontSize: {
                  lg: '50px',
                  md: '35px',
                  sm: '25px',
                  xs: '29px'
                },
                fontWeight: 700,
                color: '#212121',
                wordBreak: 'break-all'
              }}>
              {subtitle}
            </Typography>
            <Typography
              sx={{
                textAlign: 'left',
                fontFamily: 'Jost',
                fontSize: {
                  lg: '18px',
                  md: '14px',
                  sm: '12px',
                  xs: '12px'
                },
                fontWeight: 400,
                color: '#212121',

                width: {
                  lg: '423px',
                  md: '360px',
                  sm: '270px',
                  xs: '240px'
                },
                wordBreak: 'break-all'
              }}>
              {message}
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: '#212121',
                width: {
                  xl: 256,
                  lg: 200,
                  md: 150,
                  xs: 100,
                  sm: 110
                },
                height: { xl: 61, lg: 50, xs: 30 },
                mt: { lg: 10, md: 5, xs: 3 },
                mb: 2,
                fontSize: { lg: '15px', xs: '9px' }
              }}>
              {buttontitle}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%'
          }}>
          <img src={image} alt="womenstanding" width="100%" height="98.5%" />
          <Box position="relative" sx={{ bottom: 70, display: 'flex', justifyContent: 'center' }}>
            <Button variant="text">
              <Typography color="#FFFFFF">
                Outfit
                <img src={assets.images.arrowIcon} alt="arrow" width="15px" />
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Advertise;
