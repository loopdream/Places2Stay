import React, { FC, useEffect, useState } from 'react';
import {
  View as TabBarView,
  Pressable as TabBarItemPressable,
  Text as TabBarItemText,
  TextStyle as RNTextStyleProps,
  Animated,
} from 'react-native';

// import { LABELS } from 'globals';
import STYLES from './TabBar.styles';

type TabBarItemProps = {
  label: string;
  action: () => void;
  ref?: any;
};
interface TabBarProps {
  defaultActiveIndex?: number;
  items: TabBarItemProps[];
  styles?: RNTextStyleProps;
}

type MeasuresProps = { [n: string]: number };

const TabBar: FC<TabBarProps> = ({ styles, items, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [tabBarItems, setTabBarItems] = useState([] as TabBarItemProps[]);
  const [measures, setMeasures] = useState([] as MeasuresProps[]);

  const containerRef = React.useRef<TabBarView>(null);

  useEffect(() => {
    const shouldSetTabBarItems = tabBarItems.length === 0;
    const shouldSetMeasures = tabBarItems.length > 0 && measures.length === 0;

    if (shouldSetTabBarItems) {
      const data = items.map(item => {
        return { ...item, ref: React.createRef() };
      });
      setTabBarItems(data);
    }

    if (shouldSetMeasures) {
      let m: MeasuresProps[] = [];
      tabBarItems.forEach(i => {
        i.ref.current.measureLayout(
          containerRef.current,
          // @ts-ignore
          (x, y, width, height) => {
            m.push({ x, y, width, height });
            if (m.length === tabBarItems.length) {
              setMeasures(m);
            }
          },
        );
      });
    }
  }, [tabBarItems, measures, items]);

  const Indicator = () => (
    <Animated.View
      style={[
        STYLES.indicator,
        // { width: 0, left: 0, transform: [{ translateX: 0 }] },
      ]}
    />
  );

  const onPressTabBarItem = (event: any, index) => {
    setActiveIndex(index);
    console.log('onPressTabBarItem', event, index, tabBarItems[index].label);
  };

  console.log({ tabBarItems, measures });

  return (
    <TabBarView ref={containerRef} style={[STYLES.container, styles]}>
      <Indicator />
      {tabBarItems.map(({ label, ref }: TabBarItemProps, index) => (
        <TabBarItemPressable
          key={`${label}-${index}`}
          accessibilityHint={`Select ${label}`}
          accessibilityLabel={label}
          accessible={true}
          onPressIn={e => onPressTabBarItem(e, index)}
          ref={ref}
          style={[STYLES.tabItem]}>
          <TabBarItemText style={STYLES.tabItemText}>{label}</TabBarItemText>
        </TabBarItemPressable>
      ))}
    </TabBarView>
  );
};

export type { TabBarProps, TabBarItemProps };
export default TabBar;
