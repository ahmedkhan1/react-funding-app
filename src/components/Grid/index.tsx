import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import PrimaryLoader from 'components/PrimaryLoader';
import useFetchAbsenteesList from '../../hooks/tableOptions';
import EnhancedTableHead from '../Absentees/AbsenteesTableHeader';

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
    rows,
  } = useFetchAbsenteesList();
  const classes = useStyles();
  const [order, setOrder] = useState<'asc'|'desc'>('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  return (
    <Paper sx={{ backgroundColor: '#0000', boxShadow: 'none', border: '1px solid #ccc' }}>
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
                    <TableRow>
                      <TableCell colSpan={7} style={{ textAlign: 'center' }}>
                        <PrimaryLoader />
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
  );
}
