import React, { FC, useEffect, useState, createRef, useRef } from 'react';
import {
  View as TabBarView,
  View as ActiveIndicator,
  Pressable as TabBarItemPressable,
  Text as TabBarItemText,
  TextStyle as RNTextStyleProps,
  // Animated,
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

const TabBar: FC<TabBarProps> = ({ styles, items, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [tabBarItems, setTabBarItems] = useState([] as TabBarItemProps[]);
  const [measures, setMeasures] = useState([]);

  const containerRef = useRef<TabBarView>(null);

  useEffect(() => {
    if (tabBarItems.length === 0) {
      const data = items.map(item => {
        return { ...item, ref: React.createRef() };
      });
      setTabBarItems(data);
    }
    if (tabBarItems.length > 0 && measures.length === 0) {
      let m = [];
      tabBarItems.forEach(i => {
        i.ref.current.measureLayout(
          containerRef.current,
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

  const TabBarItem = React.forwardRef(({ label }: TabBarItemProps, ref) => (
    <TabBarItemPressable
      accessibilityHint={`Select ${label}`}
      accessibilityLabel={label}
      accessible={true}
      onPressIn={() => {}}
      ref={ref}
      style={[
        STYLES.tabItem,
        // { backgroundColor: index === 1 ? 'red' : 'blue' },
      ]}>
      <TabBarItemText style={STYLES.tabItemText}>{label}</TabBarItemText>
    </TabBarItemPressable>
  ));

  console.log({ tabBarItems, measures });

  return (
    <TabBarView ref={containerRef} style={[STYLES.container, styles]}>
      <ActiveIndicator
        pointerEvents={'box-none'}
        style={STYLES.activeIndicator}
      />
      {tabBarItems.map((item: TabBarItemProps, index) => (
        <TabBarItem {...item} key={`${item.label}` + index} ref={item.ref} />
      ))}
    </TabBarView>
  );
};

export type { TabBarProps, TabBarItemProps };
export default TabBar;
