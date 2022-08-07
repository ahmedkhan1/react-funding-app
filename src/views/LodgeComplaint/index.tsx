import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Cards from 'components/Widgets/DashboardCards';
import Grid from '@mui/material/Grid';
import FormSelectField from 'components/FormSelectField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormTextAreaField from 'components/FormTextAreaField';

const useStyles = makeStyles(() => ({
  lodgeComplaintContainer: {
    width: '100%',
    '& .card': {
      height: 'calc( 100vh - 130px)',
      minHeight: '370px',
    },
  },
  formSection: {
    width: '100%',
    marginTop: '10px',
    '& h3': {
      margin: '10px 0 0 20px 0',
    },
  },
  pageTitle: {
    margin: '20px 0 0 10px',
  },
  '@media (max-width: 728px)': {
    formSection: {
      '& .grid-container > div': {
        marginRight: '0 !important',
      },
    },
  },
  '@media (max-width: 600px)': {
    lodgeComplaintContainer: {
      '& .card': {
        width: 'auto !important',
        height: '100% !important',
      },
    },
  },
}));

interface State {
    customerAccount: any;
    type: string;
    subType: string,
    category: string;
    desc: string;
    textArea: string,
    loader: boolean;
}

function LodgeComplaint(): JSX.Element {
  const classes = useStyles();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [values, setValues] = useState<State>({
    customerAccount: '',
    type: '',
    subType: '',
    category: '',
    textArea: '',
    desc: '',
    loader: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data:any) => {
    console.log(data);
    setValues({ ...values, loader: !values.loader });
  };

  return (
    <div className={classes.lodgeComplaintContainer}>
      <h3 className={classes.pageTitle}>New Complaint</h3>
      <Cards title="">
        {/* ========== FORM SECTION ========== */}
        <section className={classes.formSection}>
          <h3>Create Complaint Service Request</h3>
          <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={5} md={4} style={{ marginRight: '7rem' }}>
              <FormSelectField
                isDisabled={false}
                menuList={['Male', 'Female']}
                values={values.customerAccount}
                label="Customer Account"
                placeHolder="Customer Account"
                formFieldName="customerAccount"
                register={register}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <FormSelectField
                isDisabled={false}
                menuList={['Male', 'Female']}
                values={values.type}
                label="Type"
                placeHolder="Type"
                formFieldName="type"
                register={register}
                errors={errors}
              />
            </Grid>
          </Grid>
          <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={5} md={4} style={{ marginRight: '7rem' }}>
              <FormSelectField
                isDisabled={false}
                menuList={['Male', 'Female']}
                values={values.subType}
                label="Sub Type"
                placeHolder="Sub Type"
                formFieldName="subType"
                register={register}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <FormSelectField
                isDisabled={false}
                menuList={['Male', 'Female']}
                values={values.category}
                label="Category"
                placeHolder="Category"
                formFieldName="category"
                register={register}
                errors={errors}
              />
            </Grid>
          </Grid>

          <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={5} md={4} style={{ marginRight: '7rem' }}>
              <FormTextAreaField
                isDisabled={false}
                values={values.textArea}
                label="Description"
                placeHolder="Description"
                formFieldName="description"
                register={register}
                errors={errors}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={2} md={2} sx={{ textAlign: 'left' }}>
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
        </section>
      </Cards>
    </div>
  );
}

export default LodgeComplaint;
