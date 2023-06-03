import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import Utils from 'utils';

const FormSelectField = React.lazy(() => import('components/FormSelectField'));
const DatePickerField = React.lazy(() => import('components/DatePickerField'));

interface State {
    from: any;
    to: any,
    type: string;
    loader: boolean;
}

function StatementForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [values, setValues] = useState<State>({
    from: new Date(),
    to: new Date(),
    type: '',
    loader: false,
  });

  const onSubmit = (data:any) => {
    console.log(data);
    setValues({ ...values, loader: !values.loader });
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
      <Grid item xs={12} sm={3} md={3}>
        <DatePickerField
          setValue={setValues}
          values={values}
          label=""
          formFieldName="from"
          register={register}
          errors={errors}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <DatePickerField
          setValue={setValues}
          values={values}
          label=""
          formFieldName="to"
          register={register}
          errors={errors}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3} sx={{ textAlign: 'left' }}>
        <FormSelectField
          isDisabled={false}
          menuList={['Male', 'Female']}
          values={values.type}
          label=""
          placeHolder="Type"
          formFieldName="type"
          register={register}
          errors={errors}
          setFieldValue={(event:string) => Utils.commonMethods.setFormValues('type', event, setValues, values)}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <Button
          fullWidth
          sx={{ margin: '8px 0px' }}
          onClick={handleSubmit(onSubmit)}
          disableElevation
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default StatementForm;
