import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from 'globals';

const STYLES = StyleSheet.create({
  container: { backgroundColor: COLORS.sand, flex: 1 },
  margins: { marginHorizontal: 30, marginTop: 30 },
  titleText: { ...TYPOGRAPHY.title },
  subTitleText: { color: COLORS.grey, marginTop: 8, fontSize: 12 },
  image: {
    height: 220,
    width: '100%',
    borderBottomRightRadius: 20,
  },
});

export default STYLES;
