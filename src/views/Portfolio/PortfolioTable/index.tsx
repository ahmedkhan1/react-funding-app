import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Grid from 'components/Grid';

const useStyles = makeStyles(() => ({
  gridContainer: {
    width: '100%',
    marginBottom: '10px',
  },
  investHeading: {
    textAlign: 'left',
    fontSize: '14px',
  },
  downloadStatement: {
    width: '230px',
    '& Button': {
      fontSize: '12px',
      textTransform: 'capitalize',
    },
  },
}));

function PortfolioTable(): JSX.Element {
  const classes = useStyles();
  const handleSubmit = () => {
  };
  return (
    <div className={classes.gridContainer}>
      {/* ====== Portfolio Grid ====== */}
      <Grid />
      <p className={classes.investHeading}>
        The total value of your investment portfolio is
        <b> Rs. 2,800,256 (As on 23-mar-2022)</b>
      </p>
      <div className={classes.downloadStatement}>
        <Button
          fullWidth
          sx={{ margin: '8px 0px' }}
          onClick={handleSubmit}
          disableElevation
        >
          Download Portfolio Statement
        </Button>
      </div>
    </div>
  );
}

export default PortfolioTable;
