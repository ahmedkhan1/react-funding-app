import 'setupTest';
import { mount, shallow } from 'enzyme';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
import theme from 'theme';
import AbsenteesListOption, { Props as AbsenteesProp } from './AbsenteesListOption';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

const store = configureStore();
const currentDate = new Date().toISOString().split('T')[0];
const abenteesProps: AbsenteesProp = {
  errorMsg: {
    startDate: currentDate,
    endDate: currentDate,
  },
  startDateSetter: () => {},
  endDateSetter: () => {},
  dropdownHandler: () => {},
  startDate: currentDate,
  endDate: currentDate,
  submit: () => {},
};

describe('AbsenteesListOption Components:', () => {
  describe('NavItem Component:', () => {
    it('renders without crashing', () => {
      shallow(
        <ToastProvider>
          <AbsenteesListOption
            errorMsg={abenteesProps.errorMsg}
            startDateSetter={abenteesProps.startDateSetter}
            endDateSetter={abenteesProps.endDateSetter}
            dropdownHandler={abenteesProps.dropdownHandler}
            startDate={currentDate}
            endDate={currentDate}
            submit={abenteesProps.submit}
          />
        </ToastProvider>,
      );
    });

    describe('AbsenteesListOption Component Props:', () => {
      const component = mount(
        <Provider store={store}>
          <ToastProvider
            autoDismiss
            placement="bottom-left"
            autoDismissTimeout={3000}
          >
            <BrowserRouter>
              <ThemeProvider theme={theme}>
                <AbsenteesListOption
                  errorMsg={abenteesProps.errorMsg}
                  startDateSetter={abenteesProps.startDateSetter}
                  endDateSetter={abenteesProps.endDateSetter}
                  dropdownHandler={abenteesProps.dropdownHandler}
                  startDate={currentDate}
                  endDate={currentDate}
                  submit={abenteesProps.submit}
                />
              </ThemeProvider>
            </BrowserRouter>
          </ToastProvider>
        </Provider>,
      );
      const ChildComponent = component.find('AbsenteesListOption');
      it('accepts AbsenteesListOption Component props', () => {
        expect(ChildComponent.props()).toEqual(abenteesProps);
      });
    });
  });
});
