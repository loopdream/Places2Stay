import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import { View as SectionHeaderView, StyleSheet } from 'react-native';

import {
  Text as HeaderText,
  Text as DescriptionText,
} from 'components/base/Text';

import { colors } from 'globals';

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
  <SectionHeaderView style={[styles.container, style]}>
    <HeaderText styles={StyleSheet.flatten([styles.font, styles.header])}>
      {heading}
    </HeaderText>
    {description && (
      <DescriptionText
        styles={StyleSheet.flatten([styles.font, styles.description])}>
        {description}
      </DescriptionText>
    )}
  </SectionHeaderView>
);

const styles = StyleSheet.create({
  container: {},
  font: {
    fontStyle: 'normal',
    fontWeight: '400',
    color: colors.black,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    // todo fontFamily: 'Bitter',
  },
  description: {
    fontSize: 12,
    // todo fontFamily: 'Encode Sans',
    marginTop: 8,
    marginBottom: 16,
  },
});

export default SectionHeader;
