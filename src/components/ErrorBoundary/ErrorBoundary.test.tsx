import 'setupTest';
import { mount, shallow } from 'enzyme';
import ErrorBoundary from '.';

describe('ErrorBoundary Components:', () => {
  describe('ErrorBoundary Component:', () => {
    it('renders without crashing', () => {
      shallow(
        <ErrorBoundary>
          <div>children</div>
        </ErrorBoundary>,
      );
    });

    describe('ErrorBoundary Component Props:', () => {
      const component = mount(
        <ErrorBoundary>
          <div>children</div>
        </ErrorBoundary>,
      );
      it('accepts ErrorBoundary props', () => {
        const div = component.find('div');
        expect(div.text()).toEqual('children');
      });
      it('ErrorBoundary shows error', () => {
        component.setState({ hasError: true });
        expect(component.html()).toContain('We apologize, something went wrong');
      });
    });
  });
});
