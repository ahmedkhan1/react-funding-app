import {
  EmailRounded,
  Lock,
  Visibility,
  VisibilityOff,
  Phone,
  AccountCircleRounded,
} from '@mui/icons-material';
import moment from 'moment';
import fileDownload from 'js-file-download';
import DATE_CONFIG from '../constants/date.constant';

type params = {
  from: string;
  to: string;
  selectedFrom: string;
  selectedTo: string;
}

const commonMethods = {
  dateRange({
    from,
    to,
    selectedFrom,
    selectedTo,
  }:params) {
    return moment(from).isSameOrAfter(moment(selectedFrom))
    && moment(to).isSameOrBefore(moment(selectedTo));
  },
  dateFormater(date: string) {
    return moment(date).format(DATE_CONFIG.date_format);
  },
  exporter(Data: string) {
    const fileName = `file${Math.random()}s`;
    fileDownload(Data, `${fileName}.ics`);
  },
  generateErrorMessage(error: {message: string}) {
    return (error.message) ? error.message : 'An Error has occured';
  },
  attachEventListner(
    { selector, event, method }:
    {selector: string, event: string, method: any},
  ) {
    const element = document.querySelector(selector);
    console.log(element);
    if (element) element?.addEventListener(event, method);
  },
  removeEventListner(
    { selector, event, method }:
    {selector: string, event: string, method: any},
  ) {
    const element = document.querySelector(selector);
    element?.removeEventListener(event, method);
  },
  keysExist(object:any) {
    return Object.keys(object).length !== 0;
  },
  numberFormat(number:number) {
    return (number).toLocaleString(undefined, { maximumFractionDigits: 2 });
  },
  loopTableRowObject(obj:any) {
    return Object.values(obj);
  },
  minDateGetter(date:any) {
    return (date) ? new Date(date) : new Date('1990-01-01');
  },
  getProfileState() {
    return {
      name: '',
      gender: '',
      country: '',
      mobilePhone: '',
      nationality: '',
      residentAddress: '',
      officePhone: '',
      occupation: '',
      sourceOfIncome: '',
      riskProfile: '',
      email: '',
      address: '',
      city: '',
      isLoading: true,
      isDisabled: true,
    };
  },
  setFormValues(formName:string, formVal:string, setValues: any, values:any) {
    setValues({ ...values, [formName]: formVal });
  },
  async delay(ms:any, callback:any) {
    await setTimeout(() => { callback(); }, ms);
  },
  getFieldIcon(iconName: string) {
    const icons:any = {
      name: <AccountCircleRounded className="opacity-point-6" />,
      email: <EmailRounded className="opacity-point-6" />,
      phone: <Phone className="opacity-point-6" />,
      password: <Lock className="opacity-point-6" />,
      showPassword: <Visibility className="opacity-point-6" />,
      hidePassword: <VisibilityOff className="opacity-point-6" />,
    };
    return icons[iconName];
  },
  formatNumber(number: number) {
    if (
      navigator.userAgent.indexOf('Safari') !== -1
      || navigator.userAgent.indexOf('Firefox') !== -1
    ) {
      return new Intl.NumberFormat().format(number);
    }
    return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
  },
};

export default commonMethods;
