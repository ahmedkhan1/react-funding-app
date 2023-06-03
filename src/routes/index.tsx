import React from 'react';
import LoginView from 'views/Login';
import AbsenteesList from 'components/Absentees/AbsenteesList';
import Porfolio from 'views/Portfolio';
import Transaction from 'views/Transaction';
import Profile from 'views/Profile';
import Statement from 'views/Statement';
import LodgeComplaint from 'views/LodgeComplaint';
import { purgeUserProfileState } from 'redux/actions/users';
import store from '../redux/configureStore';

const DashboardLayout = React.lazy(() => import('components/DashboardLayout'));
const NotFound = React.lazy(() => import('views/NotFound'));
const Dashboard = React.lazy(() => import('views/Dashboard'));
const onLeave = (action:any) => {
  store().dispatch(action());
};

const routes = [
  {
    path: '/',
    element: <LoginView />,
  },
  {
    path: '/register',
    element: <AbsenteesList />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/portfolio', element: <Porfolio /> },
      { path: '/profile', element: <Profile />, onLeave: () => onLeave(purgeUserProfileState) },
      { path: '/e-transaction', element: <AbsenteesList /> },
      { path: '/statement', element: <Statement /> },
      { path: '/e-schedule', element: <AbsenteesList /> },
      { path: '/transactions', element: <Transaction /> },
      { path: '/lodge-complaint', element: <LodgeComplaint /> },
      { path: '/feedback', element: <AbsenteesList /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
