import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text as HeaderText } from '../Text';
import { Text as DescriptionText } from '../Text';

export type Props = {
  heading: string;
  description?: string;
  variant?: string;
};

const SectionHeader: FC<Props> = ({ heading, description }) => {
  return (
    <>
      <HeaderText style={styles.header}>{heading}</HeaderText>
      {description && (
        <DescriptionText style={styles.description}>
          {description}
        </DescriptionText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {},
  description: {},
});

export default SectionHeader;
