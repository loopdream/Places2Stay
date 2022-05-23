import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { View as SectionHeaderView, StyleSheet } from 'react-native';

import {
  Text as HeaderText,
  Text as DescriptionText,
} from 'components/base/Text';

import { COLORS, TYPOGRAPHY } from 'globals';

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
      <DescriptionText
        style={StyleSheet.flatten([
          STYLES.descriptionText,
          STYLES.description,
        ])}>
        {description}
      </DescriptionText>
    )}
  </SectionHeaderView>
);

const STYLES = StyleSheet.create({
  container: {},
  headerText: {
    marginBottom: 20,
    color: COLORS.black,
  },
  description: {
    fontSize: 12,
    marginTop: 8,
    marginBottom: 16,
  },
  descriptionText: {},
});

export default SectionHeader;
