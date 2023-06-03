import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Utils from 'utils';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const Cards = React.lazy(() => import('components/Widgets/DashboardCards'));
const PrimaryLoader = React.lazy(() => import('components/PrimaryLoader'));

ChartJS.register(ArcElement, Tooltip, Legend);

const widget1 = 'Consolidated Portfolio Returns';
const useStyles = makeStyles(() => ({
  chartContainer: {
    width: '100%',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function PortfolioAnalysis(): JSX.Element {
  const classes = useStyles();
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
    <Cards title={widget1}>
      <div className={classes.chartContainer}>
        {renderChart()}
      </div>
    </Cards>
  );
}

export default PortfolioAnalysis;
