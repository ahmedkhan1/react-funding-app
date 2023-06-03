import React from 'react';
import norton from '../../../assets/images/norton-logo.png';

const AppStore = React.lazy(() => import('../AppStore'));
/* eslint-disable */

function Footer(
  { form, loadForgetPassword, toLogin }:
  { form: number, loadForgetPassword:any, toLogin:any},
): JSX.Element {

  const loadFooter = () => {
    switch (form) {
      case 1:
      case 2: return (
        <div className="form_footer">
          <span className="pointer" id="back-login-btn" onClick={toLogin} >Go back</span>
        </div>
      );
      default: return (
        <div className="form_footer">
          <span className="pointer" id="forget-password-link" onClick={loadForgetPassword}>Forget password?</span>
          <div><img src={norton} alt="norton" /></div>
          <div className="flex-center footer-wrapper">
            <a href="/" target='_blank' aria-label="App store"><AppStore app="App store" /></a>
            <a href="/" target='_blank' aria-label="Play store"><AppStore app="Play store" /></a>
          </div>
        </div>
      );
    }
  };

  return (<>{loadFooter()}</>);
}

export default Footer;
