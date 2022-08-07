import { shallow } from 'enzyme';
import PortfolioAllocation from './index';
import 'setupTest';

describe('PortfolioAllocation Component:', () => {
  it('renders without crashing', () => {
    shallow(<PortfolioAllocation />);
  });
});
