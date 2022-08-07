import { TextField } from '@mui/material';
import Utils from 'utils/helpers/validation.helper';
// import CommonMethods from 'utils/common.methods';
import Message from 'components/Message';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function DatePickerField(
  {
    values,
    label,
    formFieldName,
    register,
    errors,
    setValue,
  } :
  {
    values: any,
    label: string,
    formFieldName: any,
    register: any,
    errors: any,
    setValue: any,
  },
) {
  const handleChange = (form?:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(form, event);
    const formVal = (event?.target?.value) ? event?.target?.value : event;
    setValue({ ...values, [formFieldName]: formVal });
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
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          sx={{ m: '8px 0px', width: '100%' }}
          inputVariant="outlined"
          disableFuture
          dateFormat="dd/mm/yyyy"
          value={values[formFieldName]}
          {...register(formFieldName, Utils.getValidations(formFieldName))}
          size="small"
          onChange={handleChange(formFieldName)}
          renderInput={(params:any) => <TextField size="small" sx={{ m: '8px 0px', width: '100%' }} {...params} />}
          inputProps={{ style: { fontSize: 13 } }}
        />
      </LocalizationProvider>
      {errors && showErrorMessage()}
    </div>
  );
}

export default DatePickerField;
