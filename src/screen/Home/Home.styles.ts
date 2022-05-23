import { StyleSheet } from 'react-native';

const HORIZONTAL_LIST_ITEM_WIDTH = 120;
const HORIZONTAL_LIST_ITEM_SPACING = 25;
const HORIZONTAL_LIST_INSET_SPACING = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 100,
  },
  horizontalList: {
    margin: 0,
    marginBottom: 130,
  },
  horizontalListItem: {
    width: HORIZONTAL_LIST_ITEM_WIDTH,
    margin: 0,
    marginLeft: HORIZONTAL_LIST_ITEM_SPACING,
  },
  contentInset: {},
  horizontalListItemFirst: {
    marginLeft: HORIZONTAL_LIST_INSET_SPACING,
  },
  horizontalListItemLast: {
    margin: 0,
    marginRight: HORIZONTAL_LIST_INSET_SPACING,
  },
  horizontalMargin: {
    marginHorizontal: 50,
  },
  sectionHeader: {
    // fontSize: 32,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
  },
});

export {
  HORIZONTAL_LIST_ITEM_WIDTH,
  HORIZONTAL_LIST_ITEM_SPACING,
  HORIZONTAL_LIST_INSET_SPACING,
};
export default styles;
