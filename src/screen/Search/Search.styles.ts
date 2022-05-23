import { StyleSheet } from 'react-native';
import { COLORS } from 'globals';

const STYLES = StyleSheet.create({
  container: {
    padding: 50,
    paddingVertical: 30,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  textInput: {
    backgroundColor: COLORS.white,
    borderRadius: 100,
    padding: 20,
    color: COLORS.grey,
    fontStyle: 'normal',
    fontSize: 16,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    textAlign: 'center',
  },
});

export default STYLES;
