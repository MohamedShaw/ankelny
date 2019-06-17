import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const baseHorizontal = 28;
export const baseVertical = 22;

export const deviceHeight = height;
export const deviceWidth = width;

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => width / guidelineBaseWidth * size;
export const scaleVertical = size => height / guidelineBaseHeight * size;
export const scaleModerate = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;