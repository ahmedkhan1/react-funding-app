export default {
  validation: {
    email: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-]\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}[^\s-]$/i,
    },
    Password: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z0-9]{2,30}[^\s-]+$/,
    },
    name: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z ]{2,30}[^\s-]+$/,
    },
    PhoneNumber: {
      required: true,
      maxLength: 20,
      pattern: /^[0-9]*$/i,
    },
    textArea: {
      required: true,
      maxLength: 200,
      pattern: /^[^\s-][a-zA-Z0-9 #@,-?.()]{2,30}[^\s-]$/,
    },
    Amount: {
      required: true,
      maxLength: 35,
      pattern: /^[0-9]*$/i,
    },
    mobileNumber: {
      required: true,
      maxLength: 20,
      pattern: /^[0-9]*$/i,
    },
    address: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z0-9- ]{2,30}[^\s-]+$/,
    },
    gender: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z ]{2,30}[^\s-]+$/,
    },
    nationality: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z ]{2,30}[^\s-]+$/,
    },
    occupation: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z ]{2,30}[^\s-]+$/,
    },
    sourceOfIncome: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z ]{2,30}[^\s-]+$/,
    },
    riskProfile: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z ]{2,30}[^\s-]+$/,
    },
    residentAddress: {
      required: true,
      maxLength: 35,
      pattern: /^[^\s-][a-zA-Z0-9- ]{2,30}[^\s-]+$/,
    },
    country: {
      required: true,
      pattern: /^[^\s-][a-zA-Z ][^\s-]+$/,
    },
    city: {
      required: true,
      pattern: /^[^\s-][a-zA-Z ]{2,30}[^\s-]+$/,
    },
    officePhone: {
      required: true,
      maxLength: 20,
      pattern: /^[0-9]*$/i,
    },
    mobilePhone: {
      required: true,
      maxLength: 20,
      pattern: /^[0-9]*$/i,
    },
    from: {
      required: true,
      maxLength: 20,
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i,
    },
    to: {
      required: true,
      maxLength: 20,
      pattern: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i,
    },
    type: {
      required: true,
      pattern: /^[a-zA-Z ]+$/,
    },
    subType: {
      required: true,
      pattern: /^[a-zA-Z ]+$/,
    },
    category: {
      required: true,
      pattern: /^[a-zA-Z ]+$/,
    },
    description: {
      required: true,
      pattern: /^[a-zA-Z ]+$/,
    },
    customerAccount: {
      required: true,
      pattern: /^[a-zA-Z0-9 ]+$/,
    },
  },
  fieldNames(key: string) {
    const obj: any = {
      name: 'Name',
      email: 'Email',
      password: 'Password',
      gender: 'Gender',
      nationality: 'Nationality',
      occupation: 'Occupation',
      sourceOfIncome: 'Source of Income',
      riskProfile: 'Risk Profile',
      address: 'Address',
      city: 'City',
      country: 'Country',
      mobilePhone: 'Mobile Phone',
      officePhone: 'Office Phone',
      residentAddress: 'Residental Address',
      phone: 'Phone',
      from: 'From',
      to: 'To',
      type: 'Type',
      confirmPassword: 'Confirm Password',
      subType: 'Sub Type',
      category: 'Category',
      desc: 'Description',
      description: 'Description',
      customerAccount: 'Customer Account',
    };
    return obj[key];
  },
  getValidations(key: string) {
    const validationObj:any = this.validation;
    return validationObj[key];
  },
  // Order of all forms field
  formOrder: {
    login: ['email', 'password'],
    forgetPassword: ['email'],
    register: ['name', 'email', 'phone', 'password', 'confirmPassword'],
  },
  // Error messages Formatting
  errorMessage(errors:any, form:string):string {
    let message = '';
    const charLen = 20;
    const errorField:any = (this.formOrder as any)[form];
    for (let i = 0; i < errorField.length; i += 1) {
      message = this.errorMessageType(errors[errorField[i]], errorField[i], charLen);
      if (message) {
        break;
      }
    }
    return message;
  },
  errorMessageType(errorField:any, field:string, charLen: number):string {
    // console.log(errorField?.type);
    let message = '';
    if (errorField?.type === 'required') {
      message = `${this.fieldNames(field)} is required.`;
    } else if (errorField?.type === 'pattern') {
      message = `Invalid ${this.fieldNames(field)}.`;
    } else if (errorField?.type === 'maxLength') {
      message = `Max length of ${this.fieldNames(field)} is ${charLen} characters.`;
    }
    return message;
  },
};
