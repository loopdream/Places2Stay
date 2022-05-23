import React, { FC } from 'react';
import {
  View as StayDetailView,
  View as TitleWrapper,
  View as ItemView,
  ViewStyle,
} from 'react-native';

import { Text as TitleText, Text as ItemText } from 'components/base/Text';
import STYLES from './StayDetail.styles';

type StayDetailProps = {
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

export type { StayDetailProps };
export default StayDetail;
