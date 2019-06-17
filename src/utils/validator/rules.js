import moment from 'moment';

const rules = {
  numbers: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
  email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
  required: /\S+/,
  mobile: /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/,
  username: /^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$/,
  date(format='YYYY-MM-DD', value) {
    const d = moment(value, format);
    return !(d === null || !d.isValid());

  },
  minlength(length, value) {
    if (length === void(0)) {
      throw 'ERROR: It is not a valid length, checkout your minlength settings.';
    } else if(value.length > length) {
      return true;
    }
    return false;
  },
  maxlength(length, value) {
    if (length === void(0)) {
      throw 'ERROR: It is not a valid length, checkout your maxlength settings.';
    } else if (value.length > length) {
      return false;
    }
    return true;
  },
  match(value1, value2) {
    return value2 === value1;
  },
  password(value1, value2) {
    return value2.length >= 6;
  },
  username_or_email(value) {
    return this.email.test() || this.username.test();
  }
};

export default rules;