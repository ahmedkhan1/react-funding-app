import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { TAbsences } from 'types/TAbsences';
import Loader from 'shared/Loader';
import Utils from 'utils';
import AbsenteesListOption from './AbsenteesListOption';
// import Cards from '../Widgets/DashboardCards';
import useFetchAbsenteesList from '../../hooks/tableOptions';
import EnhancedTableHead from './AbsenteesTableHeader';

const useStyles = makeStyles(() => ({
  statusContainer: {
    border: '1px solid',
    width: '80px',
    textAlign: 'center',
    padding: '5px',
    borderRadius: '50px',
    color: '#fff',
  },
  statusRequested: {
    background: '#23def1',
  },
  statusConfirmed: {
    background: '#69d162',
  },
  statusRejected: {
    background: '#f12323',
  },
  cardMarginTop: {
    marginTop: '55px',
  },
}));

export default function EnhancedTable() {
  /* Initialize Tables State &&  Varibles */
  const {
    loader,
    setLoader,
    setWidgets,
    rows,
    setRow,
    rowList,
  } = useFetchAbsenteesList();
  const classes = useStyles();
  const [order, setOrder] = useState<'asc'|'desc'>('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [errorMsg, setErrorMsg] = useState({
    startDate: '',
    endDate: '',
  });

  const calculateWidgets = (list: Array<any>) => {
    let absenses = 0;
    let requested = 0;
    list.forEach((el) => {
      if (el.status === 'Requested') {
        requested += 1;
      } else if (el.status === 'Confirmed') {
        absenses += 1;
      }
    });

    setWidgets({
      totalAbsence: absenses,
      totalRequested: requested,
    });
  };

  const formSubmit = () => {
    emptyRows = 0;
    setPage(0);
    if ((startDate && !endDate) || (!startDate && endDate)) {
      setErrorMsg({
        startDate,
        endDate,
      });
    } else {
      setErrorMsg({
        startDate: '',
        endDate: '',
      });
      setLoader(!loader);
      let list = [];
      if ((startDate && endDate)) {
        list = rowList.filter((el: TAbsences) => Utils.commonMethods.dateRange({
          from: el.startDate,
          to: el.endDate,
          selectedFrom: startDate,
          selectedTo: endDate,
        }));
        setRow(list);
        if (dropdown) list = list.filter((el: TAbsences) => el.type === dropdown.toLowerCase());
        if (list) calculateWidgets(list);
      } else {
        list = rowList;
        if (dropdown) list = list.filter((el: TAbsences) => el.type === dropdown.toLowerCase());
        if (list) calculateWidgets(list);
      }
      setRow(list);
      setLoader(false);
    }
  };

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event:any, newPage:number) => {
    event.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startDateSetter = (date: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = date.target;
    setStartDate(value);
    setEndDate('');
  };

  const endDateSetter = (date: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = date.target;
    setEndDate(value);
  };

  const dropdownHandler = (event: any) => {
    const { value } = event.target;
    setDropdown(value);
  };

  return (
    <>
      {/* <Cards widgets={widgets} /> */}
      <AbsenteesListOption
        startDateSetter={startDateSetter}
        endDateSetter={endDateSetter}
        dropdownHandler={dropdownHandler}
        startDate={startDate}
        endDate={endDate}
        submit={formSubmit}
        errorMsg={errorMsg}
      />
      <div>
        <Paper>
          <TableContainer>
            <Table
              aria-labelledby="tableTitle"
              size="medium"
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              {(loader || rows.length)
                ? (
                  <TableBody>
                    { (!loader) ? rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            tabIndex={-1}
                            key={labelId}
                          >
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                              {row.id}
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell><span className="text-caps">{row.type}</span></TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.memberNote}</TableCell>
                            <TableCell>
                              <div
                                className={`${classes.statusContainer} ${
                                  ((row.status === 'Requested') && classes.statusRequested)
                                  || ((row.status === 'Confirmed') && classes.statusConfirmed)
                                  || (classes.statusRejected)}`}
                              >
                                {row.status}
                              </div>
                            </TableCell>
                            <TableCell>{row.admitterNote}</TableCell>
                          </TableRow>
                        );
                      })
                      : (
                        <TableRow style={{ height: (53) * emptyRows }}>
                          <TableCell colSpan={7} style={{ textAlign: 'center' }}>
                            <Loader size="" />
                          </TableCell>
                        </TableRow>
                      )}

                  </TableBody>
                )
                : (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={7} style={{ textAlign: 'center' }}>
                        <span>No result found.</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={handleChangePage}
          />
        </Paper>
      </div>
    </>
  );
}
