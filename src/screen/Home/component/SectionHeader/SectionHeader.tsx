import React, { FC } from 'react';
import { View as SectionHeaderView, StyleSheet } from 'react-native';

import {
  Text as HeaderText,
  Text as DescriptionText,
} from 'components/base/Text';

import colors from 'globals/colors';

export type SectionHeaderProps = {
  heading: string;
  description?: string;
  variant?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ heading, description }) => (
  <SectionHeaderView style={styles.container}>
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
  container: {
    marginBottom: 16,
  },
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
  },
});

export default SectionHeader;
