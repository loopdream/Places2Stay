import { StyleSheet } from 'react-native';
import { TYPOGRAPHY, COLORS } from 'globals';

const STYLES = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGrey,
    justifyContent: 'space-evenly',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 6,
    borderColor: COLORS.lightGrey,
  },
  indicator: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    height: '100%',
    width: '50%',
    borderRadius: 100,
  },
  tabItem: {
    padding: 12,
    flex: 1,
    alignItems: 'center',
  },
  tabItemText: {
    ...TYPOGRAPHY.base,
  },
});

export default STYLES;
