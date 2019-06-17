import {
  StyleSheet,
  Platform
} from 'react-native';

export const colors = {
  primary: '#002f65',
  secondary: '#82848A',
  green: '#59D654',
  grey0: '#D5D6D8',
  grey1: '#A2AAB5',
  grey2: '#c1c1c1',
  grey3: '#858585',
  disabled: '#dadee0',
  white: '#FFFFFF',
  black: '#000000',
  facebook: '#2672CB',
  twitter: '#4FC4FF',
  googlePlus: '#FC3850',
  error: '#ff190c',
  red: '#e82006',
  textPrimary: '#1f314a',
  rateColor: '#274c6d',
  test:'#666666',
  change:''
};

export const navigatorStyle = {
  navigationBarColor: 'black',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  navBarBackgroundColor: '#163258',
  statusBarTextColorScheme: 'light',
  navBarHidden: true
};

export const fontFamily = Platform.OS === 'android' ? 'A.Jannat.LT.Bold' : 'AJannatLT-Bold';

export const theme = StyleSheet.create({
  btnLinkTextPrimary: {
    color: colors.primaryDark
  },
  btnLinkTextSecondary: {
    color: colors.grey3,
    textAlign: 'center'
  }
});