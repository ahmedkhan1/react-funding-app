import React from 'react';
import { shallow } from 'enzyme';
import 'setupTest';

const Carousel = React.lazy(() => import('./index'));

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
