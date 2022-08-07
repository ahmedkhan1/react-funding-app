import { makeStyles } from '@mui/styles';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Utils from 'utils/constants';
import PrimaryLoader from 'components/PrimaryLoader';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const useStyles = makeStyles(() => ({
  chartContainer: {
    width: '50%',
    marginBottom: '10px',
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

function PortfolioReturns(): JSX.Element {
  const classes = useStyles();
  const charTitle = 'Portfolio Returns';
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: Utils.CHART_CONFIG.colors,
        borderColor: Utils.CHART_CONFIG.borders,
      },
      {
        label: 'Dataset 2',
        data: [12, 29, 33, 35, 42, 53],
        backgroundColor: Utils.CHART_CONFIG.colors,
        borderColor: Utils.CHART_CONFIG.borders,
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
    return (<Line data={data} options={Utils.CHART_CONFIG.options('top')} />);
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

export default PortfolioReturns;
