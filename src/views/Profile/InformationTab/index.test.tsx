import { shallow } from 'enzyme';
import InformationTab from './index';
import 'setupTest';

describe('InformationTab Component:', () => {
  it('renders without crashing', () => {
    shallow(<InformationTab />);
  });
});
