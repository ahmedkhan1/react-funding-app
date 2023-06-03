import { mount, shallow } from 'enzyme';
import LoginForm from './index';
import 'setupTest';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('LoginForm Component:', () => {
  function Component() {
    return (
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  }

  it('Renders without crashing', () => {
    shallow(Component());
  });

  it('Should contain Email and Password fields', () => {
    const wrapper:any = mount(Component());
    const doc = wrapper.find('.login_form_container input');
    expect(doc.length).toEqual(2);
    expect(doc.at(0).props().placeholder).toEqual('Email');
    expect(doc.at(1).props().placeholder).toEqual('Password');
  });

  it('Should show Email is required message', async () => {
    // Test second render and componentDidUpdate
    let wrapper:any;
    act(() => {
      wrapper = mount(Component());
    });
    const btn = wrapper.find('#login-btn').at(0);

    await act(async () => {
      btn.simulate('click');
    });
    const doc = wrapper.find('.login_form_container').at(0);
    console.log(doc.debug());
    expect(doc.text()).toEqual('Email is required.');
  });
});
