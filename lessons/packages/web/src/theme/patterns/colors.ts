import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  black: { value: '#000', name: 'Black' },
  blue: { value: '#1890FF', name: 'Blue' },
  gray: { value: '#E8E8E8', name: 'Gray' },
  red: { value: '#FF0000', name: 'Red' },
  green: { value: '#008000', name: 'Green' },
  lightBlue: { value: '#F2F8FF', name: 'LightBlue' },
  lightBlack: { value: '#697B8D', name: 'LightBlack' },
  lightGray: { value: '#D9D9D9', name: 'LightGray' },
  blueGray: { value: '#F7F9FC', name: 'BlueGray' },
  darkGray: { value: '#CECECE', name: 'DarkGray' },
  grayText: { value: '#697B8D', name: 'GrayText' },
  grayBg: { value: '#5b6474', name: 'GrayBg' },
  limeGreen: { value: '#52c41a', name: 'LimeGreen' },
  darkLateGray: { value: '#323639', name: 'DarkLateGray' },
  orange: { value: '#fc906b', name: 'Orange' },
  ghostWhite: { value: '#F5F7FB', name: 'ghostWhite' },
  purple: { value: '#F9F0FF', name: 'Purple' },
  darkPurple: { value: '#722ED1', name: 'DarkPurple' },
  lightPurple: { value: '#D3ADF7', name: 'LightPurple' },
  grayishBlue: { value: '#354052', name: 'GrayishBlue' },
  paleBlue: { value: '#E9F3FE', name: 'PaleBlue' },
  yellow: { value: '#FAAD14', name: 'Yellow' },
  veryPaleBlue: { value: '#f0f1f2', name: 'veryPaleBlue' },
  blueAlice: { value: '#e6f7ff', name: 'blueAlice' },
};

export const getColor = (colorKey: string) =>
  R.path([colorKey, 'value'], colorScheme);

const getColorsMap = () =>
  R.compose(
    R.reduce(
      (acc: any, [key, scheme]: any) => R.assoc(key, scheme.value, acc),
      {},
    ),
    R.toPairs,
  )(colorScheme);

const colors = getColorsMap();

export default colors;
