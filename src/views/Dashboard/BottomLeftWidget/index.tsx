import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Cards from 'components/Widgets/DashboardCards';
import PrimaryLoader from 'components/PrimaryLoader';
import Utils from 'utils/constants';
import { Button } from '@mui/material';
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

export default function BottomLeftWidget() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (filter: string) => {
    console.log(filter);
  };

  const widget1 = 'Latest Transactions';
  const filterList = ['Executed', 'In Progress', 'Scheduled'];
  const tableRow1 = [
    {
      id: '13443434',
      customerID: 'RF-334345454',
      date: '11-jan-2021',
      investType: 'Redemption',
      fundCode: 'UMMF',
      amount: '500000',
    },
    {
      id: '677567567567',
      customerID: '234334345454',
      date: '11-apr-2021',
      investType: 'Investment',
      fundCode: 'AICF',
      amount: '80000',
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
          {
            filterList.map((res:any) => (
              <Button
                key={res}
                fullWidth
                sx={{ margin: '8px 0px' }}
                onClick={() => handleSubmit(res)}
                disableElevation
              >
                {res}
              </Button>
            ))
          }
        </div>
        <div className={classes.transactionWidget}>
          <WidgetTable headingList={[]} rowList={tableRow1} isButton />
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
