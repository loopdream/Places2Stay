import React, { FC, ReactNode } from 'react';
import {
  Text as RNText,
  TextStyle as RNTextStyleProps,
  TextProps as RNTextProps,
} from 'react-native';

import { TYPOGRAPHY } from 'globals';

export type Props = {
  style?: RNTextStyleProps;
  children: ReactNode;
  variant?: string;
};

const Text: FC<Props & RNTextProps> = ({ children, style }) => (
  <RNText style={[TYPOGRAPHY.base, style]}>{children}</RNText>
);

export default Text;
