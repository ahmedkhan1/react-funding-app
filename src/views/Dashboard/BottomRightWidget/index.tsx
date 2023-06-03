import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Cards from 'components/Widgets/DashboardCards';
import PrimaryLoader from 'components/PrimaryLoader';
import Utils from 'utils';
import WidgetTable from '../WidgetTable';

const useStyles = makeStyles(() => ({
  transactionFilterContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    '& Button': {
      maxWidth: '130px',
      width: '100%',
      marginRight: '5px',
      height: '30px',
      fontSize: '12px !important',
      textTransform: 'capitalize',
    },
    '& p ': {
      fontSize: '15px',
    },
  },
  transactionWidget: {
    width: '100%',
    marginBottom: '16px',
    '& table': {
      borderCollapse: 'collapse',
      width: '100%',
      height: '150px',
      borderLeft: '1px solid #ddd',
      borderRight: '1px solid #ddd',
      borderTop: '1px solid #ddd',
      fontSize: '14px',
    },
    '& tr': {
      borderBottom: '1px solid #ddd',
      '& td': {
        padding: '9px 7px',
        fontSize: '13px',
        minWidth: '50px',
        width: '23%',
      },
      '& th': {
        padding: '2px 7px',
        fontSize: '13px',
      },
    },
  },
  '@media (max-width: 650px)': {
    transactionWidget: {
      overflowX: 'auto',
      widgetTable: {
        width: '650px',
      },
      '& tr': {
        borderBottom: '1px solid #ddd',
        '& td': {
          padding: '9px 7px',
          fontSize: '13px',
          minWidth: '100px',
          width: '23%',
        },
      },
    },
  },
}));

export default function BottomRightWidget() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const widget1 = 'Consolidated Portfolio';
  const tableHeading1 = [
    'Customer ID',
    'Account Type',
    'Amount in Rs.',
    'CYTD Rs. (Gain/Loss)',
    'To Date Rs. (Gain/Loss)',
  ];
  const tableRow2 = [
    {
      id: '4535344545',
      customerID: '7878334345454',
      accountType: 'GENERAL',
      amount: '500000',
      cytd: '46.03',
      toDate: '-46.03',
    },
  ];
  const renderTable = () => {
    const con = '';
    if (isLoading) {
      setTimeout(() => { setIsLoading(false); }, 1000);
      return (<PrimaryLoader />);
    }
    if (!isLoading && con) {
      return (<p>{Utils.MESSAGES.No_RECORD_FOUND}</p>);
    }
    return (
      <>
        <div className={classes.transactionFilterContainer}>
          <p>Your Account wise investment value.</p>
        </div>
        <div className={classes.transactionWidget}>
          <WidgetTable headingList={tableHeading1} rowList={tableRow2} isButton={false} />
        </div>
      </>
    );
  };
  return (
    <Cards title={widget1}>
      {
        renderTable()
      }
    </Cards>
  );
}
