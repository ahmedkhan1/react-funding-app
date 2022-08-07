import { FormControl, OutlinedInput } from '@mui/material';
import Utils from 'utils/helpers/validation.helper';
import Message from 'components/Message';

function FormField(
  {
    values,
    label,
    formFieldName,
    register,
    errors,
    isDisabled,
    placeHolder,
  } :
  {
    values:any,
    label:string,
    formFieldName:any,
    register:any,
    errors: any,
    isDisabled: boolean,
    placeHolder: string,
  },
) {
  const handleChange = (form?:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(form, event);
  };
  function showErrorMessage() {
    const message = Utils.errorMessageType(errors[formFieldName], formFieldName, 20);
    if (message) {
      return (
        <Message
          type="error"
          message={message}
          maxWidth="100%"
          show
        />
      );
    }
    return '';
  }
  return (
    <div>
      {
        label
        && (
        <span>
          {label}
          :
        </span>
        )
      }
      <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
        <OutlinedInput
          type="text"
          value={values[formFieldName]}
          {...register(formFieldName, Utils.getValidations(formFieldName))}
          size="small"
          disabled={isDisabled}
          placeholder={(placeHolder) || ''}
          onChange={handleChange(formFieldName)}
          inputProps={{ style: { fontSize: 13 } }}
          aria-describedby="outlined-weight-helper-text"
        />
      </FormControl>
      {errors && showErrorMessage()}
    </div>
  );
}

export default FormField;
