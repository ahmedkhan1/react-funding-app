import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { Ttheme } from 'types/TTheme';
import { MouseEventHandler } from 'react';

const useStyles = makeStyles((theme: Ttheme) => ({
  btnContainer: {
    margin: theme.spacing(1),
    background: '#ff941c',
  },
}));

export type Props = {
  size: 'small' | 'medium' | 'large',
  submit: MouseEventHandler<HTMLElement>,
  text: string
};

function Btn({
  size,
  submit,
  text,
}: Props) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      size={size}
      onClick={submit}
      className={classes.btnContainer}
    >
      {text}
    </Button>
  );
}

Btn.propTypes = {
  size: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Btn;
