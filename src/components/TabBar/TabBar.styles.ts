import { StyleSheet } from 'react-native';
import { TYPOGRAPHY, COLORS } from 'globals';

const STYLES = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGrey,
    justifyContent: 'space-evenly',
    borderRadius: 32,
    overflow: 'hidden',
  },
  indicator: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    height: '100%',
    width: 100,
  },
  tabItem: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  tabItemText: {
    ...TYPOGRAPHY.base,
  },
});
export default STYLES;
