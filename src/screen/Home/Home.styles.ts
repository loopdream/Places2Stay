import { StyleSheet, Platform } from 'react-native';
import { COLORS, TYPOGRAPHY } from 'globals';

const HORIZONTAL_LIST_ITEM_WIDTH = 120;
const HORIZONTAL_LIST_ITEM_SPACING = 25;
const HORIZONTAL_LIST_INSET_SPACING = 50;
const SEARCH_HEADER_HEIGHT = 130; // Platform.OS === 'ios' ? 150 : 50;

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  list: {},
  horizontalList: {
    margin: 0,
    marginBottom: 50,
    paddingHorizontal:
      // contentInset alternative for Android - Horizontal spacing before and after the ScrollView
      Platform.OS === 'android' ? HORIZONTAL_LIST_INSET_SPACING : 0,
  },
  horizontalListItem: {
    width: HORIZONTAL_LIST_ITEM_WIDTH,
    margin: 0,
    marginRight: HORIZONTAL_LIST_ITEM_SPACING,
  },
  contentInset: {
    bottom: 0,
    left: HORIZONTAL_LIST_INSET_SPACING,
    right: HORIZONTAL_LIST_ITEM_SPACING,
    top: 0,
  },
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
  sectionHeader: {},
  title: {
    fontSize: 24,
  },
  searchInputContainer: {
    paddingHorizontal: 50,
    height: SEARCH_HEADER_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    zIndex: 1,
  },
  onScrollSearchInputContainer: {
    position: 'absolute',
    transform: [{ translateY: -SEARCH_HEADER_HEIGHT }],
    backgroundColor: COLORS.sand,
  },
  searchInput: {
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
});

export {
  HORIZONTAL_LIST_ITEM_WIDTH,
  HORIZONTAL_LIST_ITEM_SPACING,
  HORIZONTAL_LIST_INSET_SPACING,
  SEARCH_HEADER_HEIGHT,
};
export default STYLES;
