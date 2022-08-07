import formvalidation from 'utils/helpers/validation.helper';
import CommonMethods from 'utils/common.methods';
import Message from 'components/Message';
import {
  EmailRounded,
  Lock,
  Visibility,
  VisibilityOff,
  Phone,
  AccountCircleRounded,
} from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const { keysExist } = CommonMethods;

interface State {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword:string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

function RegisterForm(): JSX.Element {
  const [values, setValues] = useState<State>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });
  const { register, formState: { errors }, handleSubmit } = useForm();
  // const [message, setMessage] = useState<string>('');

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (data:any) => console.log(data);

  const validationMessage = () => (
    <div>
      <Message
        type="error"
        message={formvalidation.errorMessage(errors, 'register')}
        maxWidth="308px"
        show
      />
    </div>
  );

  return (
    <div className="register_form_container">
      {/* Form Message */}
      {(keysExist(errors)) && validationMessage()}

      {/* Name Field */}
      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          value={values.name}
          {...register('name', formvalidation.validation.name)}
          size="small"
          placeholder="Name"
          onChange={handleChange('name')}
          inputProps={{ style: { fontSize: 13 } }}
          aria-describedby="outlined-weight-helper-text"
          startAdornment={<InputAdornment position="start"><AccountCircleRounded className="opacity-point-6" /></InputAdornment>}
        />
      </FormControl>

      {/* Email Field */}
      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          value={values.email}
          {...register('email', formvalidation.validation.email)}
          size="small"
          placeholder="Email"
          onChange={handleChange('email')}
          inputProps={{ style: { fontSize: 13 } }}
          aria-describedby="outlined-weight-helper-text"
          startAdornment={<InputAdornment position="start"><EmailRounded className="opacity-point-6" /></InputAdornment>}
        />
      </FormControl>

      {/* Phone number Field */}
      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          value={values.phone}
          {...register('phone', formvalidation.validation.PhoneNumber)}
          size="small"
          placeholder="Phone number"
          onChange={handleChange('phone')}
          inputProps={{ style: { fontSize: 13 } }}
          aria-describedby="outlined-weight-helper-text"
          startAdornment={<InputAdornment position="start"><Phone className="opacity-point-6" /></InputAdornment>}
        />
      </FormControl>

      {/* Password Field */}
      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          {...register('password', formvalidation.validation.Password)}
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

      {/* Confirm Password Field */}
      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          type={values.showConfirmPassword ? 'text' : 'password'}
          value={values.confirmPassword}
          {...register('confirmPassword', formvalidation.validation.Password)}
          size="small"
          placeholder="Confirm Password"
          onChange={handleChange('confirmPassword')}
          inputProps={{ style: { fontSize: 13 } }}
          aria-describedby="outlined-weight-helper-text"
          startAdornment={<InputAdornment position="start"><Lock className="opacity-point-6" /></InputAdornment>}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showConfirmPassword ? <VisibilityOff className="opacity-point-6" /> : <Visibility className="opacity-point-6" />}
              </IconButton>
            </InputAdornment>
          )}
        />
      </FormControl>

      <Button
        fullWidth
        variant="contained"
        sx={{ margin: '8px 0px' }}
        disableElevation
        onClick={handleSubmit(onSubmit)}
      >
        Register
      </Button>

    </div>
  );
}

export default RegisterForm;
