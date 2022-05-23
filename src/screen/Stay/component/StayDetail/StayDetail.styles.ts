import { StyleSheet } from 'react-native';
import { COLORS } from 'globals';

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.lightGrey,
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingTop: 45,
    paddingBottom: 15,
    overflow: 'hidden',
  },
  titleWrapper: {
    backgroundColor: COLORS.blue,
    overflow: 'hidden',
    position: 'absolute',
    padding: 8,
    borderBottomRightRadius: 8,
  },
  titleText: {
    color: COLORS.white,
    fontSize: 12,
  },
  itemText: {
    fontSize: 12,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default STYLES;
