import theme from 'theme';
import { ThemeProvider } from '@mui/styles';
import { mount, shallow } from 'enzyme';
import Button, { Props as BtnProps } from './Button';
import DatePicker, { Props as DatePickerProps } from './DatePicker';
import Dropdown, { Props as dropdownPickerProps } from './Dropdown';
import 'setupTest';
import Loader from './Loader';

const currentDate = new Date().toISOString().split('T')[0];

function formSubmit() {}

const btnProps: BtnProps = {
  size: 'small',
  text: 'Export',
  submit: formSubmit,
};

const dateProps: DatePickerProps = {
  id: 'date1',
  changeEvent: formSubmit,
  label: 'From',
  value: currentDate,
  errorMsg: false,
  min: '',
  max: currentDate,
};

const dropdownProps: dropdownPickerProps = {
  label: 'Type',
  list: [
    {
      id: 1,
      label: 'Sickness',
      value: 'Sickness',
    },
    {
      id: 2,
      label: 'Vacation',
      value: 'Vacation',
    },
  ],
  onChange: formSubmit,
};

function generateButton(passProps:any) {
  const errorProps: any = {
    size: '',
    text: '',
    submit: formSubmit,
  };

  const btnProp = (passProps) ? btnProps : errorProps;
  return (
    <ThemeProvider theme={theme}>
      <Button
        size={btnProp.size}
        text={btnProp.text}
        submit={btnProp.submit}
      />
    </ThemeProvider>
  );
}

function generateDatePicker(passProps:any) {
  const errorProps: any = {
    id: 'date1',
    changeEvent: formSubmit,
    label: 'From',
    value: '',
    errorMsg: false,
    min: '',
    max: '',
  };

  const datePickerProps = (passProps) ? dateProps : errorProps;
  return (
    <ThemeProvider theme={theme}>
      <DatePicker
        id={datePickerProps.id}
        changeEvent={datePickerProps.changeEvent}
        label={datePickerProps.label}
        value={currentDate}
        errorMsg={datePickerProps.errorMsg}
        min={datePickerProps.min}
        max={currentDate}
      />
    </ThemeProvider>
  );
}

function generateDropdown(passProps:any) {
  const errorProps: any = {
    label: '',
    list: '',
    onChange: formSubmit,
  };

  const dropDownPickerProps = (passProps) ? dropdownProps : errorProps;
  return (
    <ThemeProvider theme={theme}>
      <Dropdown
        label={dropDownPickerProps.label}
        list={dropDownPickerProps.list}
        onChange={dropDownPickerProps.onChange}
      />
    </ThemeProvider>
  );
}

function generateLoader(passProps:any) {
  const loaderProps = (passProps) ? 30 : 0;
  return (
    <ThemeProvider theme={theme}>
      <Loader size={loaderProps} />
    </ThemeProvider>
  );
}

describe('Shared Components:', () => {
  describe('Button Component:', () => {
    it('renders without crashing', () => {
      shallow(generateButton(true));
    });

    describe('Button Component Props:', () => {
      const component = mount(generateButton(true));
      const ChildComponent = component.find('Btn');

      it('accepts Button props', () => {
        expect(ChildComponent.props()).toEqual(btnProps);
      });
      it('contains Button text', () => {
        const value = ChildComponent.find('button');
        expect(value.text()).toEqual('Export');
      });
    });
  });

  describe('DatePicker Component:', () => {
    it('renders without crashing', () => {
      shallow(generateDatePicker(true));
    });

    describe('DatePicker Component Props:', () => {
      const component = mount(generateDatePicker(true));
      const ChildComponent = component.find('DatePicker');
      it('accepts DatePicker props', () => {
        expect(ChildComponent.props()).toEqual(dateProps);
      });

      it('contains DatePicker input, and label values', () => {
        const input = ChildComponent.find('input');
        const label = ChildComponent.find('label');
        expect(input.props().value).toEqual(dateProps.value);
        expect(label.text()).toEqual(dateProps.label);
      });
    });
  });

  describe('Dropdown Component:', () => {
    it('renders without crashing', () => {
      shallow(generateDropdown(true));
    });

    describe('Dropdown Component Props:', () => {
      const component = mount(generateDropdown(true));
      const ChildComponent = component.find('Dropdown');
      it('accepts Dropdown props', () => {
        expect(ChildComponent.props()).toEqual(dropdownProps);
      });
      it('contains Dropdown input, and label values', () => {
        const label = ChildComponent.find('label');
        expect(label.text()).toEqual(dropdownProps.label);
      });
    });
  });

  describe('Loader Component:', () => {
    it('renders without crashing', () => {
      shallow(generateLoader(true));
    });

    describe('Loader Component Props:', () => {
      const component = mount(generateLoader(true));
      const ChildComponent = component.find('Loader');
      it('accepts Loader props', () => {
        expect(ChildComponent.props()).toEqual({ size: 30 });
      });
    });
  });
});
