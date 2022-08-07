import { mount, shallow } from 'enzyme';
import ForgetPassForm from './index';
import 'setupTest';

describe('ForgetPassForm Component:', () => {
  it('Renders without crashing', () => {
    shallow(<ForgetPassForm />);
  });
});
