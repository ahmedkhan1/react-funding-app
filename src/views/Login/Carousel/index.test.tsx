import { shallow } from 'enzyme';
import Carousel from './index';
import 'setupTest';

const content = 'Availalbe on the App store';

describe('Carousel Component:', () => {
  it('Renders without crashing', () => {
    shallow(<Carousel />);
  });

  it('Should have three Carousels', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('.slider').length).toEqual(3);
  });
});
