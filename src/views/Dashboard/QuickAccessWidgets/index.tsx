import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  quickWidgetItem: {
    position: 'relative',
    color: '#fff',
    background: '#174a81',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #c7c7c7',
    width: '100%',
    textAlign: 'left',
    height: '30px',
    fontSize: '14px',
    padding: '5px',
    borderRadius: '5px',
    marginRight: '15px',
    cursor: 'pointer',
  },
  cardIcon: {
    position: 'absolute',
    left: '11px',
    // width: '20px',
    height: '20px',
  },
}));

function QuickAcessWidgets({ title, icon }: {title: string, icon: string}): JSX.Element {
  const classes = useStyles();
  return (
    <div className={`${classes.quickWidgetItem} quick-card`}>
      {icon && <img src={icon} alt={title} className={classes.cardIcon} />}
      <p>{title}</p>
    </div>
  );
}

export default QuickAcessWidgets;
