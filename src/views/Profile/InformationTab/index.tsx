import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import FormField from 'components/FormField';
import FormSelectField from 'components/FormSelectField';
import PrimaryLoader from 'components/PrimaryLoader';
import useProfile from 'hooks/useProfile';
import Utils from 'utils';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'services/Profile.service';
import { updateUserProfileFailure, updateUserProfileSuccess } from 'redux/actions/users';

const useStyles = makeStyles(() => ({
  ProfileContainer: {
    width: '100%',
    '& h3': {
      margin: 0,
    },
  },
  ProfileFormContainer: {
    width: '100%',
    marginTop: '20px',
  },
  profileFormRow: {
    display: 'flex',
  },
  profileBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& Button': {
      maxWidth: '200px',
      width: '100%',
    },
  },
  profileLoader: {
    width: '100%',
    height: '500px',
  },
  '@media (max-width: 500px)': {
    profileBtnContainer: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
  },
}));
function InformationTab() {
  const classes = useStyles();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [values, setValues, profileState, customerId] = useProfile();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setValues({ ...values, isDisabled: !values.isDisabled });
  };

  const onUpdate = async () => {
    await setValues({ ...values, isDisabled: !values.isDisabled, isLoading: true });
    const cId = (customerId?.payload !== undefined) ? customerId?.payload : '1-13465567';

    setTimeout(() => {
      dispatch(updateProfile({
        successAction: updateUserProfileSuccess,
        failureAction: updateUserProfileFailure,
        params: {
          data: { ...values, customerId: cId },
        },
      }));
    }, 500);
  };
  console.log(profileState, values);
  const renderForm = () => {
    if (values.isLoading) {
      return (<div className={classes.profileLoader}><PrimaryLoader /></div>);
    }
    return (
      <div>
        {/* ========= BASIC INFORMATION SECTION ========= */}
        <div className={classes.profileBtnContainer}>
          <h3>Basic Information</h3>
          {
            values.isDisabled
              ? (
                <Button
                  fullWidth
                  sx={{ margin: '8px 0px' }}
                  onClick={onSubmit}
                  disableElevation
                >
                  Edit
                </Button>
              )
              : (
                <Button
                  fullWidth
                  sx={{ margin: '8px 0px' }}
                  onClick={handleSubmit(onUpdate)}
                  disableElevation
                >
                  Update
                </Button>
              )
          }
        </div>

        <div className={classes.ProfileFormContainer}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled
                values={values.name}
                label="Name"
                placeHolder="Name"
                formFieldName="name"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('name', event, setValues, values)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormSelectField
                isDisabled
                menuList={['Male', 'Female']}
                values={values.gender}
                label="Gender"
                placeHolder="Gender"
                formFieldName="gender"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('gender', event, setValues, values)}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormSelectField
                isDisabled={values.isDisabled}
                menuList={['Pakistani', 'Indian', 'American']}
                values={values.nationality}
                label="Nationality"
                placeHolder="Nationality"
                formFieldName="nationality"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('nationality', event, setValues, values)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormSelectField
                isDisabled={values.isDisabled}
                menuList={['Software engineer', 'Doctor', 'Accountant', 'Banker']}
                values={values.occupation}
                label="Occupation"
                placeHolder="Occupation"
                formFieldName="occupation"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('occupation', event, setValues, values)}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormSelectField
                isDisabled={values.isDisabled}
                menuList={['Self employeed', 'Business owner', 'Employee']}
                values={values.sourceOfIncome}
                label="Source of Income"
                placeHolder="Source of Income"
                formFieldName="sourceOfIncome"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('sourceOfIncome', event, setValues, values)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled
                values={values.riskProfile}
                label="Risk Profile"
                placeHolder="Risk Profile"
                formFieldName="riskProfile"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('riskProfile', event, setValues, values)}
              />
            </Grid>
          </Grid>

        </div>

        {/* ========= CONTACT INFORMATION SECTION ========= */}
        <h3>Contact Information</h3>
        <div className={classes.ProfileFormContainer}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled={values.isDisabled}
                values={values.address}
                label="Address"
                formFieldName="address"
                placeHolder="Address"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('address', event, setValues, values)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled={values.isDisabled}
                values={values.city}
                label="City"
                placeHolder="City"
                formFieldName="city"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('city', event, setValues, values)}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled={values.isDisabled}
                values={values.country}
                label="Country"
                placeHolder="Country"
                formFieldName="country"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('country', event, setValues, values)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled={values.isDisabled}
                values={values.email}
                label="Email Address"
                placeHolder="Email Address"
                formFieldName="email"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('email', event, setValues, values)}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled={values.isDisabled}
                values={values.residentAddress}
                label="Residental Address"
                placeHolder="Residental Address"
                formFieldName="residentAddress"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('residentAddress', event, setValues, values)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled={values.isDisabled}
                values={values.officePhone}
                label="Office Phone"
                placeHolder="Office Phone"
                formFieldName="officePhone"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('officePhone', event, setValues, values)}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginBottom: '10px' }}>
            <Grid item xs={12} sm={6} md={6}>
              <FormField
                isDisabled={values.isDisabled}
                values={values.mobilePhone}
                label="Mobile Phone"
                placeHolder="Mobile Phone"
                formFieldName="mobilePhone"
                register={register}
                errors={errors}
                setFieldValue={(event:string) => Utils.commonMethods.setFormValues('mobilePhone', event, setValues, values)}
              />
            </Grid>
          </Grid>

        </div>
      </div>
    );
  };

  return (renderForm());
}

export default InformationTab;
