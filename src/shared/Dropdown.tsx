import React, { EventHandler, useState } from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Ttheme } from 'types/TTheme';

const useStyles = makeStyles((theme: Ttheme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginRight: '15px',
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

type TDropDownList = {
  id: number,
  label: string,
  value: string,
}

export type Props = {
  label: string,
  list: TDropDownList[],
  onChange: EventHandler<any>,
}

function Dropdown({
  label,
  list,
  onChange,
}: Props) {
  const classes = useStyles();
  const [dropdownVal, setDropdownVal] = useState('');

  const handleChange = (event: SelectChangeEvent<any>) => {
    setDropdownVal(event.target.value);
    onChange(event);
  };

  return (
    <FormControl className={classes.container}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dropdownVal}
        label={label}
        onChange={handleChange}
        className={classes.textField}
      >
        <MenuItem value="">Select</MenuItem>
        {
          list.map((res) => (
            <MenuItem
              value={res.value}
              key={res.id}
            >
              {res.label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
