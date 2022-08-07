import { mount, shallow } from 'enzyme';
import LoginForm from './index';
import 'setupTest';

describe('LoginForm Component:', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  });
});
