import { shallow } from 'enzyme';
import LodgeComplaint from './index';
import 'setupTest';

describe('LodgeComplaint Component:', () => {
  it('renders without crashing', () => {
    shallow(<LodgeComplaint />);
  });
});
