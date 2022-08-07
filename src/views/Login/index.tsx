// import Message from 'components/Message';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Carousel from './Carousel';
import ForgetPassForm from './ForgetPassForm';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import logo from '../../assets/images/logo.jpg';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  loginContainer: {
    display: 'flex',
    height: '100%',
  },
  formContainer: {
    maxWidth: '340px',
    width: '100%',
    height: '22rem',
    margin: '7px 10px 10px 10px',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '50%',
  },
  carouselContainer: {
    background: '#fff',
    minHeight: '100%',
    height: 'auto',
    position: 'fixed',
    top: '0',
    right: '0',
    width: '50%',
  },
  logo: {

  },
  formHeader: {
    textAlign: 'center',
    margin: '10px',
    '& h1': { margin: '10px' },
    '& p': { margin: '5px' },
  },
  formTabs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '0 10px',
    '& button:nth-of-type(1)': {
      width: '100px',
    },
    '& button': {
      border: 'none',
      background: '#0000',
      height: '35px',
      fontSize: '16px',
      borderRadius: '5px',
      marginRight: '1px',
      cursor: 'pointer',
      width: '200px',
    },
  },
  tabActive: {
    background: '#242483 !important',
    color: '#fff',
  },
  resetPassword: {
    margin: '0',
    fontWeight: '700',
    marginTop: '1.15rem',
  },
  '@media (max-width: 769px)': {
    carouselContainer: {
      display: 'none',
    },
    formWrapper: {
      width: '100%',
    },
  },
}));

function LoginView() {
  const classes = useStyles();
  const [form, setForm] = useState<number>(0);
  // const [message] = useState<boolean>(false);

  const loadForm = () => {
    switch (form) {
      case 1: return <RegisterForm />;
      case 2: return <ForgetPassForm />;
      default: return <LoginForm />;
    }
  };

  return (
    <div className={classes.loginContainer}>

      {/* ============= FORM SECTION ============= */}
      <div className={classes.formWrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.formHeader}>
          <h1>
            Welcome to
            <span className="primary_color"> UBL Funds </span>
            Online
          </h1>
          <p>Funding with confidence.</p>
        </div>

        {
          (form === 0 || form === 1)
            ? (
              <div className={classes.formTabs}>
                <button
                  type="button"
                  className={(form === 0 && classes.tabActive) || ''}
                  onClick={() => setForm(0)}
                >
                  Login
                </button>
                <button
                  type="button"
                  className={(form === 1 && classes.tabActive) || ''}
                  onClick={() => setForm(1)}
                >
                  Open SMART e-Account
                </button>
              </div>
            ) : (
              <p className={classes.resetPassword}>
                Reset Password
              </p>
            )
        }
        <div className={classes.formContainer}>
          {loadForm()}
          <Footer form={form} loadForgetPassword={() => setForm(2)} toLogin={() => setForm(0)} />
        </div>
      </div>

      {/* ============= CAROUSEL SECTION ============= */}
      <div className={classes.carouselContainer}>
        <Carousel />
      </div>
    </div>
  );
}

export default LoginView;
