import 'setupTest';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from '@mui/styles';
import theme from 'theme';
import Cards from './DashboardCards';

const widgets = {
  title: '',
  content: '',
};

function generateWidgets(passProps:any) {
  const errorProps: any = {
    title: '',
    content: '',
  };

  const widgetsProps = (passProps) ? widgets : errorProps;
  return (
    <ThemeProvider theme={theme}>
      <Cards title={widgetsProps.title} />
    </ThemeProvider>
  );
}

describe('DashboardCards Components:', () => {
  describe('DashboardCards Component:', () => {
    it('renders without crashing', () => {
      shallow(generateWidgets(true));
    });

    describe('DashboardCards accepts Props:', () => {
      it('accepts DashboardCards props', () => {
        const component = mount(generateWidgets(true));
        const ChildComponent = component.find('DashboardCards');
        expect(ChildComponent.props()).toEqual({ widgets });
      });

      it('DashboardCards on empty props shows zero', () => {
        const component = mount(generateWidgets(false));
        const totalAbsence = component.find('.total_absence_container');
        const totalRequested = component.find('.total_Request_container');
        const obj = {
          totalAbsence: totalAbsence.text(),
          totalRequested: totalRequested.text(),
        };
        expect(obj).toEqual({
          totalAbsence: '0',
          totalRequested: '0',
        });
      });
    });
  });
});
