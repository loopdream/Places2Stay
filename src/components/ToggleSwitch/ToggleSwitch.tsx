import React, { FC, useState } from 'react';
import {
  View as ToggleSwitchView,
  Pressable as ToggleSwitchItemPressable,
  Text as ToggleSwitchItemText,
  TextStyle as RNTextStyleProps,
  Animated,
  LayoutChangeEvent,
} from 'react-native';

// import { LABELS } from 'globals';
import STYLES from './ToggleSwitch.styles';

type ToggleSwitchItemProps = {
  label: string;
  action: () => void;
};

interface ToggleSwitchProps {
  items: ToggleSwitchItemProps[];
  styles?: RNTextStyleProps;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ styles, items }) => {
  const [viewWidth, setViewWidth] = useState(0);
  const [animateStyle, setAnimateStyle] = useState([] as any);

  const indicatorPositionX = React.useRef(new Animated.Value(0)).current;
  const indicatorTranslateX = indicatorPositionX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, viewWidth / 2],
  });

  const onLayout = (event: LayoutChangeEvent) =>
    setViewWidth(event.nativeEvent.layout.width);

  const onPressToggleSwitchItem = (index: number, callback: () => void) => {
    setAnimateStyle({ transform: [{ translateX: indicatorTranslateX }] });
    Animated.spring(indicatorPositionX, {
      toValue: index,
      useNativeDriver: true,
      speed: 13,
      bounciness: 9,
    }).start();
    callback();
  };

  return (
    <ToggleSwitchView onLayout={onLayout} style={[STYLES.container, styles]}>
      <Animated.View style={[STYLES.indicator, animateStyle]} />
      {items.map(({ label, action }: ToggleSwitchItemProps, index) => (
        <ToggleSwitchItemPressable
          key={`${label}-${index}`}
          accessibilityHint={`Select ${label}`}
          accessibilityLabel={label}
          accessible={true}
          onPressIn={() => onPressToggleSwitchItem(index, action)}
          style={[STYLES.tabItem]}>
          <ToggleSwitchItemText style={STYLES.tabItemText}>
            {label}
          </ToggleSwitchItemText>
        </ToggleSwitchItemPressable>
      ))}
    </ToggleSwitchView>
  );
};

export type { ToggleSwitchProps, ToggleSwitchItemProps };
export default ToggleSwitch;
