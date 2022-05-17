import React, { FC, ReactNode } from 'react';
import { Text as RNText, StyleSheet, TextStyle, StyleProp } from 'react-native';

export type Styles = {
  baseText: StyleProp<TextStyle>;
};

export type Props = {
  styles?: Styles;
  children: ReactNode;
};

const Text: FC<Props> = ({ children, styles }) => (
  <RNText style={[TextStyles.baseText, styles?.baseText]}>{children}</RNText>
);

const TextStyles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: 'red',
  },
});

export default Text;
