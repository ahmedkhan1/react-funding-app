import { shallow } from 'enzyme';
import Profile from './index';
import 'setupTest';

describe('Profile Component:', () => {
  it('renders without crashing', () => {
    shallow(<Profile />);
  });
});
