import { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import QuickAcessWidgets from './QuickAccessWidgets';
import statemenetIcon from '../../assets/icons/navigation/statements.png';
import etransactionIcon from '../../assets/icons/navigation/e-transaction.png';
import conversionIcon from '../../assets/icons/conversion.png';
import redemptionIcon from '../../assets/icons/redemption.png';
import PortfolioAnalysis from './PortfolioAnalysis';
import ConsolidatedPortfolio from './ConsolidatedPortfolio';
import BottomRightWidget from './BottomRightWidget';
import BottomLeftWidget from './BottomLeftWidget';

const useStyles = makeStyles(() => ({
  widgetContainer: {
    display: 'flex',
  },
  quickAccessContainer: {
    display: 'flex',
    margin: '0 10px 10px',
    '& .first-block': {

      '& div:nth-of-type(2)': {
        marginRight: '7px !important',
      },
    },
    '& .second-block': {
      '& div:nth-of-type(1)': {
        marginLeft: '7px !important',
      },
      '& div:nth-of-type(2)': {
        marginRight: '0 !important',
      },
    },
  },
  quickAccessBlock: {
    display: 'flex',
    width: '100%',
  },
  '@media (max-width: 1024px)': {
    widgetContainer: {
      flexDirection: 'column',
      '& div:nth-of-type(2)': {
        '& .card': {
          marginTop: '0 !important',
        },
      },
    },
    quickAccessContainer: {
      flexDirection: 'column',
      '& .first-block': {
        margin: '0 0 19px',
        '& div:nth-of-type(2)': {
          marginRight: '0px !important',
        },
      },
      '& .second-block': {
        '& div:nth-of-type(1)': {
          marginLeft: '0px !important',
        },
        '& div:nth-of-type(2)': {
          marginRight: '0 !important',
        },
      },
    },
  },
  '@media (max-width: 600px)': {
    widgetContainer: {
      '& div': {
        '& .card': {
          width: 'auto !important',
        },
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

export default function Dashboard() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ============= TOP WIDGETS SECTION ============= */}
      <section className={classes.widgetContainer} id="widget-top">
        <PortfolioAnalysis />
        <ConsolidatedPortfolio />
      </section>

      {/* ============= MID WIDGETS SECTION ============= */}
      <section className={classes.quickAccessContainer}>
        <div className={`${classes.quickAccessBlock} first-block`}>
          <QuickAcessWidgets title="Investment" icon={etransactionIcon} />
          <QuickAcessWidgets title="Redemption" icon={redemptionIcon} />
        </div>
        <div className={`${classes.quickAccessBlock} second-block`}>
          <QuickAcessWidgets title="Conversion" icon={conversionIcon} />
          <QuickAcessWidgets title="Statement" icon={statemenetIcon} />
        </div>
      </section>

      {/* ============= BOTTOM WIDGETS SECTION ============= */}
      <section className={classes.widgetContainer} id="bottom-widget">
        <BottomLeftWidget />
        <BottomRightWidget />
      </section>
    </>
  );
}
