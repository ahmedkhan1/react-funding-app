import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { ChangeEventHandler } from 'react';
import { Ttheme } from 'types/TTheme';

const useStyles = makeStyles((theme: Ttheme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      marginBottom: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export type Props = {
  id: string,
  changeEvent: ChangeEventHandler<HTMLInputElement>,
  label: string,
  value: string,
  errorMsg?: boolean,
  min?: string,
  max?: string,
}

function DatePicker({
  id,
  changeEvent,
  label,
  value,
  errorMsg,
  min,
  max,
}:Props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        error={(errorMsg)}
        InputProps={{ inputProps: { min, max } }}
        helperText={errorMsg ? 'Required!' : ''}
        id={id}
        label={label}
        type="date"
        value={value}
        onChange={changeEvent}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DatePicker.defaultProps = {
  errorMsg: false,
  min: null,
  max: null,
};

export default DatePicker;
