import React from 'react';
import { purgeUserProfileState } from 'redux/actions/users';
import store from '../redux/configureStore';

const LoginView = React.lazy(() => import('views/Login'));
const AbsenteesList = React.lazy(() => import('components/Absentees/AbsenteesList'));
const Porfolio = React.lazy(() => import('views/Portfolio'));
const Transaction = React.lazy(() => import('views/Transaction'));
const Profile = React.lazy(() => import('views/Profile'));
const Statement = React.lazy(() => import('views/Statement'));
const LodgeComplaint = React.lazy(() => import('views/LodgeComplaint'));
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
