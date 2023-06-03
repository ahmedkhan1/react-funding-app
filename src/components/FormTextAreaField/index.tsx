import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Utils from 'utils';
import Message from 'components/Message';

const useStyles = makeStyles(() => ({
  textAreaContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& .textarea': {
      margin: '8px 0px',
    },
  },
}));

function FormTextAreaField(
  {
    values,
    label,
    formFieldName,
    isDisabled,
    register,
    errors,
    placeHolder,
  } :
  {
    values:any,
    label:string,
    formFieldName:any,
    isDisabled: boolean,
    register:any,
    errors: any,
    placeHolder: string,
  },
) {
  const classes = useStyles();

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
    <div className={classes.textAreaContainer}>
      {
        label
        && (
        <span>
          {label}
          :
        </span>
        )
      }
      <TextField
        value={values[formFieldName]}
        {...register(formFieldName, Utils.getValidations(formFieldName))}
        onChange={handleChange}
        className="textarea"
        id="outlined-multiline-static"
        disabled={isDisabled}
        multiline
        rows={2}
        placeholder={placeHolder}
      />
      {errors && showErrorMessage()}
    </div>
  );
}

export default FormTextAreaField;
