import React, { FC } from 'react';
import { View as NavHeaderView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from 'globals';
import STYLES from './NavHeader.styles';

type TextNavHeaderProps = {
  style?: any;
};

const NavHeader: FC<TextNavHeaderProps> = ({ style }) => {
  const navigation = useNavigation();

  const bellOnPress = () => {
    // navigation.navigate('WebView', {});
    // console.log({ navigation });
  };
  const accountOnPress = () => {};

  return (
    <NavHeaderView style={[STYLES.container, style]}>
      <Pressable onPress={bellOnPress}>
        <IconMCI name="bell-outline" color={COLORS.black} size={36} />
      </Pressable>
      <Pressable onPress={accountOnPress}>
        <Icon name="person" color={COLORS.black} size={36} />
      </Pressable>
    </NavHeaderView>
  );
};
export type { TextNavHeaderProps };
export default NavHeader;
