import React, { useState, MouseEventHandler, ChangeEventHandler } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PropTypes from 'prop-types';
import Button from 'shared/Button';
import Dropdown from 'shared/Dropdown';
import DatePicker from '../../shared/DatePicker';
import useExportAbsentees from '../../hooks/useExportAbsentees';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '10px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    cursor: 'pointer',
    margin: '8px 0',
    '& p': {
      margin: 0,
      height: '11px',
    },
  },
  formBtnContainer: {
    display: 'flex',
    height: '50px',
  },
});

export type Props = {
  errorMsg: {
    startDate: string,
    endDate: string
  },
  startDateSetter: ChangeEventHandler<HTMLInputElement>,
  endDateSetter: ChangeEventHandler<HTMLInputElement>,
  dropdownHandler: ChangeEventHandler<HTMLSelectElement>,
  startDate: string,
  endDate: string,
  submit: MouseEventHandler<HTMLElement>,
}

function AbsenteesListOption({
  errorMsg,
  startDateSetter,
  endDateSetter,
  dropdownHandler,
  startDate,
  endDate,
  submit,
}: Props) {
  const classes = useStyles();
  const { exporData } = useExportAbsentees();
  const [list] = useState([
    {
      id: 1,
      label: 'Sickness',
      value: 'Sickness',
    },
    {
      id: 2,
      label: 'Vacation',
      value: 'Vacation',
    },
  ]);
  const currentDate = new Date().toISOString().split('T')[0];
  const startDateError = !!((!errorMsg.startDate && errorMsg.endDate));
  const endDateError = !!((errorMsg.startDate && !errorMsg.endDate));

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.formContainer}>
          <DatePicker
            id="date1"
            label="From"
            errorMsg={startDateError}
            changeEvent={startDateSetter}
            value={startDate}
            max={currentDate}
          />
          <DatePicker
            id="date2"
            label="To"
            errorMsg={endDateError}
            changeEvent={endDateSetter}
            value={endDate}
            min={startDate}
          />
          <Dropdown
            label="Type"
            onChange={dropdownHandler}
            list={list}
          />
          <div className={classes.formBtnContainer}>
            <Button size="small" text="Search" submit={submit} />
            <button type="button" className={classes.downloadBtn} onClick={exporData}>
              <FileDownloadIcon />
              <p>Export</p>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

AbsenteesListOption.propTypes = {
  submit: PropTypes.func.isRequired,
  startDateSetter: PropTypes.func.isRequired,
  endDateSetter: PropTypes.func.isRequired,
  dropdownHandler: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  errorMsg: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AbsenteesListOption;
