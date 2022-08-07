import moment from 'moment';
import fileDownload from 'js-file-download';

type params = {
  from: string;
  to: string;
  selectedFrom: string;
  selectedTo: string;
}

const DATE_OBJECT = {
  date_format: 'YYYY/MM/YYYY',
  time_format_12: 'hh:mm:ss a',
  time_format_24: 'HH:MM:SS',
};

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
    return moment(date).format(DATE_OBJECT.date_format);
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
};

export default commonMethods;
