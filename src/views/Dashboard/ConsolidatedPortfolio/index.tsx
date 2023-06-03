import Cards from 'components/Widgets/DashboardCards';
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
import Utils from 'utils';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const PrimaryLoader = React.lazy(() => import('components/PrimaryLoader'));

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const widget1 = 'Consolidated Portfolio Analysis';
const useStyles = makeStyles(() => ({
  chartContainer: {
    width: '100%',
    height: '270px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function ConsolidatedPortfolio(): JSX.Element {
  const classes = useStyles();
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
    <Cards title={widget1}>
      <div className={classes.chartContainer}>
        {renderChart()}
      </div>
    </Cards>
  );
}

export default ConsolidatedPortfolio;
