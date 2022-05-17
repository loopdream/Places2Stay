import React, { FC, ReactNode } from 'react';
import {
  Text as RNText,
  TextStyle as RNTextStyleProps,
  TextProps as RNTextProps,
} from 'react-native';

export type Props = {
  styles?: RNTextStyleProps;
  children: ReactNode;
  variant?: string;
};

const Text: FC<Props & RNTextProps> = ({ children, styles }) => {
  return <RNText style={styles}>{children}</RNText>;
};

export default Text;
