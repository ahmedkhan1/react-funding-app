import React from 'react';
import { mount, shallow } from 'enzyme';
import 'setupTest';

const ForgetPassForm = React.lazy(() => import('./index'));

describe('ForgetPassForm Component:', () => {
  it('Renders without crashing', () => {
    shallow(<ForgetPassForm />);
  });
});
