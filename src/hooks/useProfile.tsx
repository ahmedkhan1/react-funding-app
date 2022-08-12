import { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from 'services/Profile.service';
import commonMethods from 'utils/common.methods';
import {
  getUserProfileSuccess,
  getUserProfileFailure,
} from '../redux/actions/users';
import { RootState } from '../redux/reducers/rootReducer';
import { TProfileState } from '../types/TState';

/**
 *
 * @method {useProfile}
 *
 */

 interface State {
  name: string;
  email: string,
  gender: string;
  nationality: string;
  occupation: string;
  sourceOfIncome: string,
  riskProfile: string,
  residentAddress: string,
  mobilePhone: string,
  country: string,
  officePhone :string,
  address: string,
  city: string,
  isLoading: boolean,
  isDisabled: boolean,
}

const useProfile = (): [State, any, TProfileState, {payload:string}] => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const profileState:TProfileState = useSelector((state: RootState) => state.profile);
  const customerId:{payload:string} = useSelector((state: RootState) => state.customerId);
  const [values, setValues] = useState<State>(commonMethods.getProfileState());

  async function getProfileData() {
    if (profileState?.payload) {
      const profileStates:any = profileState.payload;
      console.log(profileStates);
      await setValues({
        ...values,
        ...{
          isDisabled: true,
          isLoading: false,
          name: profileStates.name,
          email: profileStates.email,
          gender: profileStates.gender,
          nationality: profileStates.nationality,
          occupation: profileStates.occupation,
          sourceOfIncome: profileStates.sourceOfIncome,
          riskProfile: profileStates.riskProfile,
          residentAddress: profileStates.city,
          mobilePhone: profileStates.phone,
          country: profileStates.country,
          officePhone: profileStates.officePhone,
          address: profileStates.address,
          city: profileStates.city,
        },
      });
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    if (profileState?.error) {
      const msg = commonMethods.generateErrorMessage(profileState.error);
      addToast(msg, { appearance: 'error' });
      setValues({ ...values, isLoading: false });
    } else if (profileState?.updated && profileState?.updated.length && profileState?.updated[0]) {
      const msg = 'Profile Updated successfully';
      addToast(msg, { appearance: 'success' });
      setValues({ ...values, isLoading: false });
    } else if (!localStorage.getItem('customerId') && profileState?.payload) {
      getProfileData();
    } else {
      setValues({ ...values, isLoading: true });
      // setTimeout(() => {
      const cId = (customerId?.payload !== undefined) ? customerId?.payload : '1-13465567';
      localStorage.setItem('customerId', '');
      dispatch(getProfile({
        successAction: getUserProfileSuccess,
        failureAction: getUserProfileFailure,
        params: { customerId: cId },
      }));
      // }, 1000);
    }
    return () => {
      abortController.abort(); // cancel pending API
    };
  }, [profileState, customerId]);

  return [
    values,
    setValues,
    profileState,
    customerId,
  ];
};

export default useProfile;
