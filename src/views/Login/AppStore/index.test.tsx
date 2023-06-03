import React from 'react';
import { shallow } from 'enzyme';
import 'setupTest';

const AppStore = React.lazy(() => import('./index'));

const content = 'Availalbe on the App store';

describe('AppStore Component:', () => {
  it('Renders without crashing', () => {
    shallow(<AppStore app="App" />);
  });

  it('Should accept app prop and set text', () => {
    const wrapper = shallow(<AppStore app="App store" />);
    expect(wrapper.find('p').text()).toEqual(content);
  });

  // it("Should render with an error on props missing", () => {
  //   const props = {};
  //   expect(shallow(<AppStore {...props} />)).not.toBeNull();
  // });
});
