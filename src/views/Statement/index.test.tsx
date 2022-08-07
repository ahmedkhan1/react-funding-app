import { shallow } from 'enzyme';
import Statement from './index';
import 'setupTest';

describe('Statement Component:', () => {
  it('renders without crashing', () => {
    shallow(<Statement />);
  });
});
