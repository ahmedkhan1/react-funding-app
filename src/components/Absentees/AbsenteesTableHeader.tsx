import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import PropTypes from 'prop-types';

const headCells = [
  {
    id: 'id', numeric: true, disablePadding: false, label: 'ID',
  },
  {
    id: 'name', numeric: false, disablePadding: false, label: 'Employee name',
  },
  {
    id: 'type', numeric: false, disablePadding: false, label: 'Type of absense',
  },
  {
    id: 'date', numeric: false, disablePadding: false, label: 'Period',
  },
  {
    id: 'member_note', numeric: false, disablePadding: false, label: 'Member Note',
  },
  {
    id: 'status', numeric: false, disablePadding: false, label: 'Status',
  },
  {
    id: 'admitter_note', numeric: false, disablePadding: false, label: 'Admitter Note',
  },
];

type TtableHead = {
  order: 'asc'|'desc',
  orderBy: string,
  onRequestSort: Function
};

function EnhancedTableHead({
  order,
  orderBy,
  onRequestSort,
}: TtableHead) {
  const createSortHandler = (property: string) => (event:any) => {
    if (event) event.preventDefault();
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableHead;
