import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text as HeaderText } from '../Text';
import { Text as DescriptionText } from '../Text';
import { colors } from '../../../globals/constants';

export type Props = {
  heading: string;
  description?: string;
  variant?: string;
};

const SectionHeader: FC<Props> = ({ heading, description }) => (
  <>
    <HeaderText styles={styles.header}>{heading}</HeaderText>
    {description && (
      <DescriptionText styles={styles.description}>
        {description}
      </DescriptionText>
    )}
  </>
);

const styles = StyleSheet.create({
  header: {
    // todo fontFamily: 'Bitter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29,
    color: colors.black,
    marginTop: 32,
  },
  description: {
    // todo fontFamily: 'Encode Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    marginTop: 8,
  },
});

export default SectionHeader;
