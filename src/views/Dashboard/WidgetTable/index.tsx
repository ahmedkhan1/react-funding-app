import { makeStyles } from '@mui/styles';
import commonMethods from 'utils/common.methods';

const useStyles = makeStyles(() => ({
  widgetTable: {
    '& th': {
      backgroundColor: '#8c8c8c3d',
      color: 'black',
      width: '200px',
    },
    '& tbody, & thead': {
      display: 'grid',
    },
  },
  lastRowBtn: {
    display: 'contents !important',
    '& tr': {
      borderTop: '1px solid #ddd',
    },
  },
  lastRow: {
    textAlign: 'center',
    height: '26px',
  },
}));

function WidgetTable({ headingList, rowList, isButton }:
  {headingList: any[], rowList: any[], isButton: boolean }): JSX.Element {
  const classes = useStyles();

  const getTableHeader = () => (
    <thead>
      <tr>
        {headingList.map((res) => (<th key={res}>{res}</th>))}
      </tr>
    </thead>
  );

  const getRow = () => (
    <tbody className={classes.lastRowBtn}>
      <tr>
        <td
          colSpan={5}
          className={classes.lastRow}
        >
          {(!isButton) ? 'Total Amount: 2,802,2578' : <a href="/dashboard/trasactions">View All e-transactions</a>}
        </td>
      </tr>
    </tbody>
  );

  return (
    <table className={classes.widgetTable}>
      {/* ======== Table Header ======== */}
      {headingList && headingList.length > 0 && getTableHeader()}

      {/* ======== Table Body ======== */}
      <tbody>
        {rowList && rowList.map((res) => (
          <tr key={res.id}>
            {commonMethods.loopTableRowObject(res).map((el:any) => (
              <td key={el}>{el}</td>
            ))}
          </tr>
        ))}
      </tbody>

      {/* ======== Table Footer ======== */}
      {getRow()}
    </table>
  );
}

export default WidgetTable;
