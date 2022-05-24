import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from 'globals';

const STYLES = StyleSheet.create({
  container: {
    padding: 50,
    paddingVertical: 30,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  textInput: {
    ...TYPOGRAPHY.base,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    color: COLORS.grey,
    fontSize: 16,
    fontStyle: 'normal',
    padding: 20,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    textAlign: 'center',
  },
  resultList: { marginTop: 30 },
  resultListItem: { paddingVertical: 12 },
});

export default STYLES;
