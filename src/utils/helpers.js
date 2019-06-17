import _ from 'lodash';
import {
  Linking,
  Platform,
  Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('window');
import ShortId from './shortId';

const helpers = {
  /**
   * Generate a new guid
   * @return {string}
   */
  newGuid: function () {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  },
  generateShortId() {
    let uid = new ShortId();
    return uid.randomUUID(8);
  },
  /**
   * Split array into chunks
   * @param arr
   * @param n
   * @return {Array}
   */
  chunk: (arr, n) => {
    return Array.from(Array(Math.ceil(arr.length / n)), (_, i) => arr.slice(i * n, (i * n) + n));
  },
  /**
   * Email validation
   * @param email
   * @return {boolean}
   */
  isEmail: function (email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  /**
   * Check if string is empty
   * @param str
   * @return {boolean}
   */
  stringIsEmpty: function (str) {
    return (!str || /^\s*$/.test(str));
  },
  /**
   * Check object if null or empty
   * @param obj
   * @return {boolean}
   */
  isNullOrEmpty: function (obj) {
    return !!(_.isNull(obj) || _.isEmpty(obj) || _.isUndefined(obj));

  },
  /**
   * Check object if null or undefined
   * @param obj
   * @return {boolean}
   */
  isNullOrUndefined: function (obj) {
    return !!(_.isNull(obj) || _.isUndefined(obj));

  },
  /**
   * Resize image
   * @param image_width
   * @param image_height
   * @param imageWidth
   * @return {{width: *, height: number}}
   */
  resizeImage: function (image_width, image_height, imageWidth) {
    let imageSize = {
      width: imageWidth,
      height: (imageWidth * image_height) / image_width
    }
    return imageSize;
  },
  /**
   * Integer casting
   * @param input
   * @param output
   * @return {*}
   */
  convertToInt: function (input, output) {
    try {
      return parseInt(input);
    } catch (e) {
      return output
    }
  },
  convertMinsToHrsMins: function (mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}`;
  },
  /**
   * Float casting
   * @param numeric
   * @param decimals
   * @return {*}
   */
  floatToString: function (numeric, decimals) {
    if (numeric) {
      return numeric.toFixed(decimals).toString();
    }
    return '';
  },
  objectToQueryString: function (obj) {
    let query = Object.keys(obj)
      .filter(key => obj[key] !== '' && obj[key] !== null && obj[key] !== undefined)
      .map(key => key + '=' + obj[key])
      .join('&');
    return query.length > 0 ? '?' + query : null;
  },
  calculateAge: function (dob) {
    if (!dob) return '';

    let birthday = +new Date(dob);
    return ~~((Date.now() - birthday) / (31557600000));
  },
  /*
   * LaunchURL. Open an url based on app-objects: phone, email, websites
   * (copied from: react-native-communications\AKCommunications.js)
   * @param url
   */
  LaunchURL: function (url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An unexpected error happened', err));
  },
  //copy from: https://scotch.io/tutorials/how-to-encode-and-decode-strings-with-base64-in-javascript
  base64: {
    chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    btoa: (input: string = '') => {
      let str = input;
      let output = '';

      for (let block = 0, charCode, i = 0, map = this.chars;
           str.charAt(i | 0) || (map = '=', i % 1);
           output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

        charCode = str.charCodeAt(i += 3 / 4);

        if (charCode > 0xFF) {
          throw new Error(`'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.`);
        }

        block = block << 8 | charCode;
      }

      return output;
    },
    atob: (input: string = '') => {
      let str = input.replace(/=+$/, '');
      let output = '';

      if (str.length % 4 == 1) {
        throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
      }
      for (let bc = 0, bs = 0, buffer, i = 0;
           buffer = str.charAt(i++);

           ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
           bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
      ) {
        buffer = this.chars.indexOf(buffer);
      }

      return output;
    }
  },
  isFloat: (val) => {
    var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val))
      return false;

    val = parseFloat(val);
    if (isNaN(val))
      return false;
    return true;
  },

  isInt: (val) => {
    var intRegex = /^-?\d+$/;
    if (!intRegex.test(val))
      return false;

    var intVal = parseInt(val, 10);
    return parseFloat(val) == intVal && !isNaN(intVal);
  },
  removeNonNumber: (string = "") => string.replace(/[^\d]/g, ""),
  removeLeadingSpaces: (string = "") => string.replace(/^\s+/g, ""),
  isIphoneX: () => {
    const screenCheck = (height / width).toFixed(2) == 2.17
    const osCheck = Platform.OS === 'ios';
    return (screenCheck && osCheck)
  },
  getFont: () => {
    return Platform.OS === 'ios'? 'System': 'System'
  },
  wp: (percentage, viewportWidth) => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  },
  shuffle: (arr) => {
    return arr.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
  }
};

export default helpers;
