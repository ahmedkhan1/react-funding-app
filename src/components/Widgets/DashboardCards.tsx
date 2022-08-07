import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Ttheme } from 'types/TTheme';

type ContainerProps = {
  title: string,
  children?: any,
}

const useStyles = makeStyles((theme: Ttheme) => ({
  cardContainer: {
    width: '100%',
    // height: '320px',
    margin: '20px 10px',
    '& h4': {
      color: '#686664',
      margin: '15px 0 0 15px',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  cardContent: {
    paddingBottom: '0 !important',
    paddingTop: '0 !important',
    // textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& span': {
      // fontSize: '30px',
      color: '#686664',
    },
  },
}));

function Cards({ title, children }:ContainerProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.cardWrapper}>
      <Card className={`${classes.cardContainer} card`}>
        { title && <h4>{title}</h4> }
        <CardContent className={classes.cardContent}>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

Cards.defaultProps = {
  children: '',
};

export default Cards;
