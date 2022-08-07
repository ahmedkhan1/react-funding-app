import 'setupTest';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import DashboardLayout from 'components/DashboardLayout';
import NotFound from 'views/NotFound';
import App from 'containers/App';

describe('Routes Test:', () => {
  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(DashboardLayout)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  it('valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(DashboardLayout)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});
