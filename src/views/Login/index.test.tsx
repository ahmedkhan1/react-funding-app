import { mount, shallow } from 'enzyme';
import Login from './index';
import 'setupTest';

describe('Login Component:', () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });
});
