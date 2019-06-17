import _ from 'lodash';
import rules from './rules';
import messages from './messaes';
import DeviceInfo from "react-native-device-info";

export default class Validator {
  /**
   * constructor
   * @param {object} props
   */
  constructor(form) {
    this.form = form || [];
    this.errors = [];
    this.rules = rules;
    this.messages = messages;
    this.deviceLocale = DeviceInfo.getDeviceLocale().toString();

  }

  /**
   * Validate form
   * @param fields
   * @param form
   * @return {boolean}
   */
  validate(fields, form) {

    this.form = form ? form : this.form;
    // Reset errors
    this._resetErrors();
    // Iterate over inner state
    for (const key of Object.keys(this.form)) {
      // Check if child name is equals to fields array set up in parameters
      const rules = fields[key];

      rules && this._checkRules(key, rules, this.form[key]);
    }
    return this.isFormValid();
  }

  /**
   * check rules on a spefific field
   * @param fieldName
   * @param rules
   * @param value
   */
  _checkRules(fieldName, rules, value) {
    for (const key of Object.keys(rules)) {
      const isRuleFn = (typeof this.rules[key] === 'function');
      const isRegExp = (this.rules[key] instanceof RegExp);
      if ((isRuleFn && !this.rules[key](rules[key], value)) || (isRegExp && !this.rules[key].test(value))) {
        this._addError(fieldName, key, rules[key], isRuleFn);
      }
    }
  }

  /**
   * Add error ex: [{ fieldName: "name", messages: ["The field name is required."] }]
   * @param fieldName
   * @param rule
   * @param value
   * @param isFn
   */
  _addError(fieldName, rule, value, isFn) {
    //alert(DeviceInfo.getDeviceLocale())
    const errMsg = this.messages[this.deviceLocale][rule].replace('{0}', _.capitalize(fieldName.replace('_', ' '))).replace('{1}', value);
    let [error] = this.errors.filter(err => err.fieldName === fieldName);


    // error already exists
    if (error) {
      // Update existing element
      const index = this.errors.indexOf(error);
      error.messages.push(errMsg);
      this.errors[index] = error;
    } else {
      // Add new item
      this.errors.push({
        fieldName,
        messages: [errMsg]
      });
    }
  }

  /**
   * Reset error fields
   */
  _resetErrors() {
    this.errors = [];
  }

  /**
   * check if the field is in error
   * @param fieldName
   * @return {boolean}
   */
  isFieldInError(fieldName) {
    return (this.errors && this.errors.filter(err => err.fieldName === fieldName).length > 0);
  }

  /**
   * Check if no erros
   * @return {boolean}
   */
  isFormValid() {
    return this.errors.length === 0;
  }

  /**
   * Concatenate each error messages
   * @param separator
   * @return {string}
   */
  getErrorMessages(separator='\n') {
    return this.errors.map((err) => err.messages.join(separator)).join(separator);
  }

  /**
   * return errors on a specific field
   * @param fieldName
   * @return {Array}
   */
  getErrorsInField(fieldName) {
    const foundError = this.errors.find(err => err.fieldName === fieldName);
    if (!foundError) {
      return [];
    }
    return foundError.messages;
  }

  /**
   * get all form errors
   * @return {object}
   */
  getErrors() {
    let foundErrors = {};

    this.errors.map(err => foundErrors[err.fieldName] = err.messages);

    return foundErrors;
  }
}