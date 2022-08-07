import { mount, shallow } from 'enzyme';
import Footer from './index';
import 'setupTest';

describe('Footer Component:', () => {
  const Component = (props:number) => {
    return <Footer form={props} loadForgetPassword={()=>{}} toLogin={()=>{}} />;
  }
  it('Renders without crashing', () => {
    shallow(Component(0));
  });

  it('Should load register footer', () => {
    const wrapper = shallow(Component(1));
    expect(mount(Component(1)).prop('form')).toBe(1);
    expect(wrapper.find('#back-login-btn').length).toEqual(1);
  });

  it('Should load reset password footer', () => {
    const wrapper = shallow(Component(2));
    expect(mount(Component(2)).prop('form')).toBe(2);
    expect(wrapper.find('#back-login-btn').length).toEqual(1);
  });

  it('Should load Login footer', () => {
    const wrapper = shallow(Component(0));
    expect(mount(Component(0)).prop('form')).toBe(0);
    expect(wrapper.find('#forget-password-link').length).toEqual(1);
  });

//   it("Should render with an error on props missing", () => {
//     const props = {form:'', loadForgetPassword:null, toLogin:null};
//     expect(shallow(<Footer {...props} />)).not.toBeNull();
//   });

});
