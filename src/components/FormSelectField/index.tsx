import {
  FormControl, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import Utils from 'utils';
import Message from 'components/Message';

const placeholder = 'Select ';
function FormField(
  {
    values,
    label,
    formFieldName,
    register,
    errors,
    menuList,
    isDisabled,
    placeHolder,
    setFieldValue,
  } :
  {
    values:any,
    label:string,
    formFieldName:any,
    register:any,
    errors: any,
    menuList: any[],
    isDisabled: boolean,
    placeHolder: string,
    setFieldValue:any,
  },
) {
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setFieldValue(event.target.value);
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
      <fieldset className={isDisabled ? 'input-field-set' : ''} disabled={isDisabled}>
        <FormControl sx={{ m: '8px 0px', width: '100%' }} variant="outlined">
          <Select
            value={values}
            {...register(formFieldName, Utils.getValidations(formFieldName))}
            onChange={handleChange}
            displayEmpty
            size="small"
            defaultValue=""
            inputProps={{ style: { fontSize: 13 } }}
          >
            <MenuItem value="" selected sx={{ fontStyle: 'unset !important' }}>
              <em>
                {placeholder + placeHolder || ''}
              </em>
            </MenuItem>
            {
              menuList.map((res:any) => (
                <MenuItem value={res} key={res}>{res}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </fieldset>
      {errors && showErrorMessage()}
    </div>
  );
}

export default FormField;
