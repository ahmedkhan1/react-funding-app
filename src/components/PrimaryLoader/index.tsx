import Box from '@mui/material/Box';
import Utils from 'utils/constants';

export default function PrimaryLoader() {
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',
    }}
    >
      <img src={Utils.IMAGES.gif_loader} alt="loader" width="120px" />
    </Box>
  );
}
