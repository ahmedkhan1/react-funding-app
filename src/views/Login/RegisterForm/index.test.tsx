import { mount, shallow } from 'enzyme';
import RegisterForm from './index';
import 'setupTest';

describe('RegisterForm Component:', () => {
  it('Renders without crashing', () => {
    shallow(<RegisterForm />);
  });
});
