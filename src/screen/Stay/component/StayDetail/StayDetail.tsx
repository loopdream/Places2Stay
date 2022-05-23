import React, { FC } from 'react';
import {
  View as StayDetailView,
  View as TitleWrapper,
  View as ItemView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { COLORS } from 'globals';
import { Text as TitleText, Text as ItemText } from 'components/base/Text';

export type StayDetailProps = {
  items: {
    itemLabel: string;
    itemDetail: string;
  }[];
  style?: ViewStyle | ViewStyle[];
  title: string;
};

const StayDetail: FC<StayDetailProps> = ({ title, items, style }) => (
  <StayDetailView style={[STYLES.container, style]}>
    <TitleWrapper style={STYLES.titleWrapper}>
      <TitleText style={STYLES.titleText}>{title}</TitleText>
    </TitleWrapper>
    {items.map((item, i) => (
      <ItemView key={i} style={STYLES.itemView}>
        <ItemText style={STYLES.itemText}>{item.itemLabel}</ItemText>
        <ItemText style={STYLES.itemText}>{item.itemDetail}</ItemText>
      </ItemView>
    ))}
  </StayDetailView>
);

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

export default StayDetail;
