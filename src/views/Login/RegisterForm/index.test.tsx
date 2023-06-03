import { mount, shallow } from 'enzyme';
import React from 'react';
import 'setupTest';

const RegisterForm = React.lazy(() => import('./index'));

describe('RegisterForm Component:', () => {
  it('Renders without crashing', () => {
    shallow(<RegisterForm />);
  });
});
