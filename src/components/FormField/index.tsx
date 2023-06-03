import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import Utils from 'utils';
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
    setFieldValue,
    icon,
  } :
  {
    values:any,
    label?:string,
    formFieldName:any,
    register:any,
    errors: any,
    isDisabled: boolean,
    placeHolder: string,
    setFieldValue: any,
    icon?: string,
  },
) {
  const handleChange = (form?:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(form, event.target.value);
    setFieldValue(event.target.value);
  };

  const fieldIcon = (icon) ? <InputAdornment position="start">{Utils.commonMethods.getFieldIcon(icon)}</InputAdornment> : false;

  const showErrorMessage = () => {
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
  };
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
      <fieldset className={isDisabled ? 'input-field-set' : ''} disabled={isDisabled}>
        <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
          <OutlinedInput
            type="text"
            value={values}
            {...register(formFieldName, Utils.getValidations(formFieldName))}
            size="small"
            placeholder={(placeHolder) || ''}
            onChange={handleChange(formFieldName)}
            inputProps={{ style: { fontSize: 13 } }}
            aria-describedby="outlined-weight-helper-text"
            startAdornment={fieldIcon}
          />
        </FormControl>
      </fieldset>

      {errors && showErrorMessage()}
    </div>
  );
}

FormField.defaultProps = {
  icon: '',
  label: '',
};

export default FormField;
