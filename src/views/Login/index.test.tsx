import { shallow } from 'enzyme';
import React from 'react';
import 'setupTest';

const Login = React.lazy(() => import('./index'));

describe('Login Component:', () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });
});
