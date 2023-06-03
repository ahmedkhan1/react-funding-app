import Utils from 'utils';
import {
  EmailRounded,
} from '@mui/icons-material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Message = React.lazy(() => import('components/Message'));
const Loader = React.lazy(() => import('components/Loader'));

const { keysExist } = Utils.commonMethods;

interface State {
  email: string;
  loader: boolean,
  message: string,
}

function ForgetPassForm(): JSX.Element {
  const [values, setValues] = useState<State>({
    email: '',
    loader: false,
    message: '',
  });
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const validationMessage = () => (
    <div>
      <Message
        type="error"
        message={values.message || Utils.errorMessage(errors, 'forgetPassword')}
        maxWidth="308px"
        show
      />
    </div>
  );

  const onSubmit = (data:any) => {
    setValues({ ...values, loader: true });
    console.log(data);
    setValues({ ...values, loader: false, message: Utils.MESSAGES.RESET_PASSWORD_FAILED });
  };

  return (
    <div className="forget_pass_container">
      {/* Form Message */}
      {(keysExist(errors) || values.message) && validationMessage()}

      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          value={values.email}
          size="small"
          {...register('email', Utils.validation.email)}
          placeholder="Email"
          onChange={handleChange('email')}
          inputProps={{ style: { fontSize: 13 } }}
          aria-describedby="outlined-weight-helper-text"
          startAdornment={<InputAdornment position="start"><EmailRounded className="opacity-point-6" /></InputAdornment>}
        />
      </FormControl>

      {
        (values.loader) ? <Loader />
          : (
            <Button
              fullWidth
              variant="contained"
              sx={{ margin: '8px 0px' }}
              onClick={handleSubmit(onSubmit)}
              disableElevation
            >
              Reset
            </Button>
          )
      }

    </div>
  );
}

export default ForgetPassForm;
