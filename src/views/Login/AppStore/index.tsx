import { Apple } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import playStore from '../../../assets/images/playstore-icon.png';

const useStyles = makeStyles(() => ({
  appStoreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #c7c7c7',
    width: '150px',
    maxWidth: '138px',
    textAlign: 'left',
    fontSize: '12px',
    padding: '5px',
    borderRadius: '5px',
    '& p': {
      margin: '0 0 0 5px',
    },
    '& img': {
      width: '20px !important',
      margin: '0 !important',
    },
  },
}));

function AppStore({ app }: {app: string}): JSX.Element {
  const classes = useStyles();

  const loadIcon = () => ((app === 'App store') ? <Apple /> : <img src={playStore} alt="playstore" />);
  return (
    <div className={classes.appStoreContainer}>
      {loadIcon()}
      <p>
        Availalbe on the
        <b>
          {' '}
          {app}
        </b>
      </p>
    </div>
  );
}

export default AppStore;
