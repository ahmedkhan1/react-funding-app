import { shallow } from 'enzyme';
import Portfolio from './index';
import 'setupTest';

describe('Portfolio Component:', () => {
  it('renders without crashing', () => {
    shallow(<Portfolio />);
  });
});
