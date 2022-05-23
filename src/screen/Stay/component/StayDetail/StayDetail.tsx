import React, { FC } from 'react';
import {
  View as StayDetailView,
  View as TitleWrapper,
  View as ItemView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { Text } from 'components/base/Text';
import { colors } from 'globals';

export type StayDetailProps = {
  title: string;
  items: {
    itemLabel: string;
    itemDetail: string;
  }[];
  style?: ViewStyle | ViewStyle[];
};

const StayDetail: FC<StayDetailProps> = ({ title, items, style }) => (
  <StayDetailView style={[styles.container, style]}>
    <TitleWrapper style={styles.titleWrapper}>
      <Text style={styles.titleText}>{title}</Text>
    </TitleWrapper>
    {items.map((item, i) => (
      <ItemView key={i} style={styles.item}>
        <Text style={styles.itemText}>{item.itemLabel}</Text>
        <Text style={styles.itemText}>{item.itemDetail}</Text>
      </ItemView>
    ))}
  </StayDetailView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGrey,
    borderRadius: 8,
    padding: 30,
  },
  image: {},
  titleWrapper: {
    backgroundColor: colors.blue,
    overflow: 'hidden',
    position: 'absolute',
    padding: 8,
    borderBottomRightRadius: 8,
  },
  titleText: {
    color: colors.white,
  },
  item: { flexDirection: 'row', justifyContent: 'space-between' },
  itemText: {},
});

export default StayDetail;
