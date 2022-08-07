import { colors } from '@mui/material';
import {
  createTheme,
  // experimental_sx as sx,
} from '@mui/material/styles';
import shadows from './shadows';
import typography from './typography';

const primary = '#174a82';
const navbar = '#f3f4f5';
const card = '#f5f7f8';
const white = '#fff';

const theme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        style: {
          backgroundColor: navbar,
          color: '#000',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        style: {
          backgroundColor: primary,
          color: white,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        style: {
          backgroundColor: card,
          width: '100%',
          // height: '320px',
        },
      },
    },
    MuiTableHead: {
      defaultProps: {
        style: {
          backgroundColor: '#ccc',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: primary,
    },
    text: {
      primary,
      secondary: '#6b778c',
    },
  },
  shadows,
  ...typography,
});

export default theme;
