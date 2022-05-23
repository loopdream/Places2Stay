import { StyleSheet } from 'react-native';

import COLORS from './colors';

const TYPOGRAPHY = StyleSheet.create({
  base: {
    fontFamily: 'EncodeSans-Regular',
    fontSize: 16,
    color: COLORS.black,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Bitter-Regular',
    color: COLORS.black,
  },
});

export default TYPOGRAPHY;
