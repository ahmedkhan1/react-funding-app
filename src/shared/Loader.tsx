import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Ttheme } from 'types/TTheme';

const useStyles = makeStyles((theme:Ttheme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Loader({ size }:{ size:any }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress
        size={(
          (Object.keys(size).length !== 0) ? size : 50
        )}
      />
    </div>
  );
}

export default Loader;
