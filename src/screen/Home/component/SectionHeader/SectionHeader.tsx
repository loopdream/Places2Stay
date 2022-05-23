import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { View as SectionHeaderView } from 'react-native';

import { TYPOGRAPHY } from 'globals';
import {
  Text as HeaderText,
  Text as DescriptionText,
} from 'components/base/Text';
import STYLES from './SectionHeader.styles';

export type SectionHeaderProps = {
  heading: string;
  description?: string;
  variant?: string;
  style?: ViewStyle;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  heading,
  description,
  style,
}) => (
  <SectionHeaderView style={[STYLES.container, style]}>
    <HeaderText style={[TYPOGRAPHY.title, STYLES.headerText]}>
      {heading}
    </HeaderText>
    {description && (
      <DescriptionText style={[STYLES.descriptionText, STYLES.description]}>
        {description}
      </DescriptionText>
    )}
  </SectionHeaderView>
);

export default SectionHeader;
