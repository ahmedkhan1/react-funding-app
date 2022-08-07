import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import configureStore from './redux/configureStore';
import App from './containers/App';
import './styles/styles.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider
      autoDismiss
      placement="bottom-left"
      autoDismissTimeout={3000}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </Provider>,
  document.getElementById('root'),
);
