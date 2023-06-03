import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Utils from 'utils';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import PrimaryLoader from 'components/PrimaryLoader';

ChartJS.register(ArcElement, Tooltip, Legend);

const useStyles = makeStyles(() => ({
  chartContainer: {
    width: '50%',
    marginBottom: '10px',
    marginRight: '15px',
    '& h4': {
      textAlign: 'left',
      margin: '1.5rem 0 1rem 0',
    },
  },
  charWrapper: {
    border: '1px solid #ccc',
    height: '270px',
    padding: '10px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '@media (max-width: 1024px)': {
    chartContainer: {
      width: '100% !important',
    },
  },
}));

function PortfolioAllocation(): JSX.Element {
  const classes = useStyles();
  const charTitle = 'Portfolio Allocation';
  const [isLoading, setIsLoading] = useState(true);
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: Utils.CHART_CONFIG.colors,
        borderColor: Utils.CHART_CONFIG.borders,
        borderWidth: 1,
      },
    ],
  };

  const renderChart = () => {
    const con = '';
    if (isLoading) {
      setTimeout(() => { setIsLoading(false); }, 1000);
      return (<PrimaryLoader />);
    }
    if (!isLoading && con) {
      return (<p>{Utils.MESSAGES.No_RECORD_FOUND}</p>);
    }
    return (<Doughnut data={data} options={Utils.CHART_CONFIG.options('top')} height="100%" />);
  };

  return (
    <div className={classes.chartContainer}>
      <h4>{charTitle}</h4>
      <div className={classes.charWrapper}>
        {renderChart()}
      </div>
    </div>
  );
}

export default PortfolioAllocation;
