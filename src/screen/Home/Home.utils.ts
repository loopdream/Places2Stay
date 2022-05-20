import styles from './Home.styles';
import { DataProps } from './homeMockData';

const keyExtractor = (item: DataProps, index: number) => `${item}-${index}`;

const getHorizontalItemStyles = (
  data: DataProps | DataProps[],
  index: number,
) => {
  const isFirstItem = !index;
  // @ts-ignore todo
  const isLastItem = index === data.length - 1;
  if (isFirstItem) {
    return {
      ...styles.horizontalListItem,
      ...styles.horizontalListItemFirst,
    };
  }
  if (isLastItem) {
    return {
      ...styles.horizontalListItem,
      ...styles.horizontalListItemLast,
    };
  }
  return styles.horizontalListItem;
};

export { keyExtractor, getHorizontalItemStyles };
