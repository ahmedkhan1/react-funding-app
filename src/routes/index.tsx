import React from 'react';
import LoginView from 'views/Login';
import AbsenteesList from 'components/Absentees/AbsenteesList';
import Porfolio from 'views/Portfolio';
import Profile from 'views/Profile';
import Statement from 'views/Statement';
import LodgeComplaint from 'views/LodgeComplaint';

const DashboardLayout = React.lazy(() => import('components/DashboardLayout'));
const NotFound = React.lazy(() => import('views/NotFound'));
const Dashboard = React.lazy(() => import('views/Dashboard'));

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
      { path: '/profile', element: <Profile /> },
      { path: '/e-transaction', element: <AbsenteesList /> },
      { path: '/statement', element: <Statement /> },
      { path: '/e-schedule', element: <AbsenteesList /> },
      { path: '/transactions', element: <AbsenteesList /> },
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
