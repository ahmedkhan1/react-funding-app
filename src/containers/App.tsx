import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { Suspense } from 'react';
import theme from '../theme';
import routes from '../routes';
import ErrorBoundary from '../components/ErrorBoundary';

function App(): JSX.Element {
  const Routes = () => { const elements = useRoutes(routes); return elements; };
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
