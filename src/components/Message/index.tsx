import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  messageContainer: {
    margin: '5px auto',
    display: 'flex',
    height: '25px',
    alignItems: 'center',
  },
}));

export default function Message(
  {
    type, message, maxWidth, show,
  }:
  {
    type: 'success' | 'info' | 'warning' | 'error',
    message: string,
    maxWidth: string,
    show: boolean
},
) {
  const classes = useStyles();
  return (
    <Collapse in={show}>
      <Alert
        className={classes.messageContainer}
        severity={type}
        style={{ maxWidth }}
      >
        {message}
        {message.length > 45}
      </Alert>
    </Collapse>
  );
}
