import { shallow } from 'enzyme';
import Dashobard from './index';
import 'setupTest';

describe('Dashobard Component:', () => {
  it('renders without crashing', () => {
    shallow(<Dashobard />);
  });
});
