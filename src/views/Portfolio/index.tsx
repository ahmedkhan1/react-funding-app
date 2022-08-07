import { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Cards from 'components/Widgets/DashboardCards';
import PortfolioAllocation from './PortfolioAllocation';
import PortfolioReturns from './PortfolioReturn';
import PortfolioTable from './PortfolioTable';

const useStyles = makeStyles(() => ({
  portfolioContainer: {
    width: '100%',
  },
  chartSection: {
    width: '100%',
    marginBottom: '10px',
    display: 'flex',
  },
  pageTitle: {
    margin: '20px 0 0 10px',
  },
  '@media (max-width: 1024px)': {
    chartSection: {
      flexDirection: 'column',
      '& div:nth-of-type(2)': {
        '& .card': {
          marginTop: '0 !important',
        },
      },
    },
    portfolioContainer: {
      '& .card': {
        width: 'auto !important',
      },
    },
  },
}));

function Portfolio(): JSX.Element {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.portfolioContainer}>
      <h3 className={classes.pageTitle}>Portfolio Summary</h3>
      <Cards title="">
        {/* ========== CHARTS SECTION ========== */}
        <section className={classes.chartSection}>
          <PortfolioAllocation />
          <PortfolioReturns />
        </section>

        {/* ========== TABLE SECTION ========== */}
        <section className={classes.chartSection}>
          <PortfolioTable />
        </section>
      </Cards>
    </div>
  );
}

export default Portfolio;
