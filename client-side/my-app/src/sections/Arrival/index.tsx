import { newArrival } from '../../data/Constants';

// mui imports
import { Box, Typography, useTheme } from '@mui/material';

const Arrival: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Jost',
            fontSize: '39px',
            fontWeight: 700,
            textAlign: 'center',
            color: theme.palette.primary.dark
          }}>
          Checkout New Arrivals
        </Typography>
      </Box>
      <Box
        sx={{
          display: {
            sm: 'flex',
            xs: 'grid'
          },
          justifyContent: 'center',
          overflow: 'hidden',
          maxWidth: '90%',
          mx: 'auto'
        }}>
        {newArrival.map(arr => (
          <Box
            key={arr.id}
            sx={{
              mr: { sm: 1 },
              mt: { xs: 2 }
            }}>
            <img src={arr.image} alt="images" width="100%" height="100%" style={{ objectFit: 'contain' }} />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default Arrival;
