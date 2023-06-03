import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const StatementForm = React.lazy(() => import('./Form'));
const Cards = React.lazy(() => import('components/Widgets/DashboardCards'));

const useStyles = makeStyles(() => ({
  statementContainer: {
    width: '100%',
  },
  formSection: {
    width: '100%',
    display: 'flex',
    marginTop: '10px',
  },
  pdfSection: {
    width: '100%',
    marginBottom: '1.2rem',
    background: '#00000024',
    height: '490px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > p': {
      margin: '0 auto',
      height: 'fit-content',
    },
  },
  pageTitle: {
    margin: '20px 0 0 10px',
  },
  '@media (max-width: 600px)': {
    statementContainer: {
      '& .card': {
        width: 'auto !important',
      },
    },
  },
}));

function Statement(): JSX.Element {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.statementContainer}>
      <h3 className={classes.pageTitle}>Statement</h3>
      <Cards title="">
        {/* ========== FORM SECTION ========== */}
        <section className={classes.formSection}>
          <StatementForm />
        </section>

        {/* ========== PDF VIEW SECTION ========== */}
        <section className={classes.pdfSection}>
          <p>No record found</p>
        </section>
      </Cards>
    </div>
  );
}

export default Statement;
