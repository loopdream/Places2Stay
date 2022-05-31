import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from 'globals';

const STYLES = StyleSheet.create({
  container: {
    padding: 50,
    paddingVertical: 30,
    // position: 'absolute',
    width: '100%',
    zIndex: 1,

    backgroundColor: COLORS.blue,
  },
  heading: {
    ...TYPOGRAPHY.title,
    color: COLORS.white,
    paddingRight: 100,
  },
  panel: {
    marginVertical: 50,
    backgroundColor: COLORS.sand,
  },
});

export default STYLES;
