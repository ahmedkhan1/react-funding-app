import Utils from 'utils';
// import CONSTANTS from 'utils/constants';
import { useNavigate } from 'react-router-dom';
import {
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Message = React.lazy(() => import('components/Message'));
const Loader = React.lazy(() => import('components/Loader'));
const FormField = React.lazy(() => import('components/FormField'));

const { keysExist } = Utils.commonMethods;

interface State {
  email: string;
  password: string;
  showPassword: boolean;
  loader: boolean,
  message: string
}

function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false,
    loader: false,
    message: '',
  });
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value, message: '' });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validationMessage = () => (
    <div id="message-container">
      <Message
        type="error"
        message={values.message || Utils.errorMessage(errors, 'login')}
        maxWidth="308px"
        show
      />
    </div>
  );

  const onSubmit = (data:any) => {
    setValues({ ...values, loader: true });
    console.log(data);
    navigate('/dashboard', { replace: true });
    // setValues({ ...values, loader: false, message: CONSTANTS.MESSAGES,LOGIN_FAILED });
  };

  return (
    <div className="login_form_container">
      {/* Form Message */}
      {(keysExist(errors) || values.message) && validationMessage()}

      {/* ========= EMAIL FIELD ========= */}
      <FormField
        errors
        isDisabled={false}
        values={values.email}
        placeHolder="Email"
        formFieldName="email"
        register={register}
        icon="email"
        setFieldValue={(event:string) => Utils.commonMethods.setFormValues('email', event, setValues, values)}
      />

      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          {...register('password', Utils.validation.Password)}
          size="small"
          placeholder="Password"
          onChange={handleChange('password')}
          inputProps={{ style: { fontSize: 13 } }}
          aria-describedby="outlined-weight-helper-text"
          startAdornment={<InputAdornment position="start"><Lock className="opacity-point-6" /></InputAdornment>}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff className="opacity-point-6" /> : <Visibility className="opacity-point-6" />}
              </IconButton>
            </InputAdornment>
          )}
        />
      </FormControl>

      {
        (values.loader) ? <Loader />
          : (
            <Button
              id="login-btn"
              fullWidth
              sx={{ margin: '8px 0px' }}
              onClick={handleSubmit(onSubmit)}
              disableElevation
            >
              Login
            </Button>
          )
      }

    </div>
  );
}

export default LoginForm;
