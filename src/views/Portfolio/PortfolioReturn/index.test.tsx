import { shallow } from 'enzyme';
import PortfolioReturn from './index';
import 'setupTest';

describe('PortfolioReturn Component:', () => {
  it('renders without crashing', () => {
    shallow(<PortfolioReturn />);
  });
});
