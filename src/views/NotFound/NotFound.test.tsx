import { shallow } from 'enzyme';
import NotFound from 'views/NotFound';
import '../../setupTest';

const msg = {
  heading: '404: The page you are looking for isn’t here',
  subHeading: 'You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation',
};

describe('NotFound Component:', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />);
  });

  it('renders Account header', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('.msg_container').text()).toEqual(msg.heading);
    expect(wrapper.find('.subheading_container').text()).toEqual(msg.subHeading);
  });
});
