import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Work from 'src/pages/Work';
import NotFound from 'src/pages/NotFound';
import Settings from 'src/pages/Settings';
import Top from 'src/pages/Top';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'profile', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'top', element: <Top /> },
      { path: 'work', element: <Work /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Top /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
