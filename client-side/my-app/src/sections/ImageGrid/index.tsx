import { Box } from '@mui/material';
import { assets } from '../../assets';

function ImageGrid(): JSX.Element {
  return (
    <Box
      sx={{
        mt: { md: 12, sm: 8, xs: 5 },
        maxWidth: '90%',
        mx: 'auto'
      }}>
      <Box
        sx={{
          display: { md: 'flex', sm: 'flex' },
          justifyContent: 'center',
          gap: 1,
          width: { xl: '100%' }
        }}>
        <Box
          sx={{
            mb: { xs: 1 },
            // mr: 1,
            textAlign: 'center'
          }}>
          <img
            src={assets.images.urbanStories}
            alt="urban"
            width="100%"
            height="99%"
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Box>
          <img
            src={assets.images.countryLights}
            alt="countylights"
            width="100%"
            height="98%"
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ImageGrid;
