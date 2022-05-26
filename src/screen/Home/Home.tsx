import React, { FC, useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput as SearchInput,
  View as SearchView,
  Animated,
} from 'react-native';

import { LABELS } from 'globals';
import TabBar from 'components/TabBar';

import STYLES, {
  HORIZONTAL_LIST_ITEM_WIDTH,
  HORIZONTAL_LIST_ITEM_SPACING,
  SEARCH_HEADER_HEIGHT,
} from './Home.styles';
import SectionHeader from './component/SectionHeader';
import PlaceCta from './component/PlaceCta';
import HOME_MOCK_DATA, { SectionProps, DataProps } from './homeMockData';

const HORIZONTAL_SNAP_TO_INTERVAL =
  HORIZONTAL_LIST_ITEM_WIDTH + HORIZONTAL_LIST_ITEM_SPACING;

const SCROLL_EVENT_THROTTLE = 16;

const TIMING_ANIMATION_OPTIONS = {
  duration: 250,
  useNativeDriver: true,
};

const Home: FC = () => {
  const [sections, setSections] = useState([] as any);
  const [animateStyle, setAnimateStyle] = useState([] as any);
  const [scrollSearchHeaderVisible, setScrollSearchHeaderVisible] =
    useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [-SEARCH_HEADER_HEIGHT, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    const { placeCtas, cityCtas } = HOME_MOCK_DATA.sections;
    setSections([placeCtas, cityCtas]);
  }, []);

  const keyExtractor = (item: DataProps, index: number) =>
    `${item.imageLabel}-${index}`;

  const renderSectionListItem = ({
    section,
    item,
  }: {
    section: SectionProps;
    item: any;
  }) => {
    if (section.orientation === 'horizontal') {
      return (
        <ScrollView
          contentInset={STYLES.contentInset}
          contentContainerStyle={STYLES.horizontalList}
          contentOffset={{ x: -50, y: 0 }}
          decelerationRate={0}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={HORIZONTAL_SNAP_TO_INTERVAL}>
          {item.map((props: DataProps) => (
            <PlaceCta {...props} style={STYLES.horizontalListItem} />
          ))}
        </ScrollView>
      );
    }
    return (
      <PlaceCta style={STYLES.horizontalMargin} key={item.key} {...item} />
    );
  };

  const renderSectionHeader = ({ section }: { section: SectionProps }) => (
    <SectionHeader
      heading={section.heading}
      description={section.description}
      style={{ ...STYLES.sectionHeader, ...STYLES.horizontalMargin }}
    />
  );

  const showHideOnScrollSearch = ({ show }: { show: boolean }) => {
    const toValue = show ? 1 : 0;
    const isVisible = show ? true : false;
    setAnimateStyle({ transform: [{ translateY: headerTranslateY }] });
    Animated.timing(scrollY, { ...TIMING_ANIMATION_OPTIONS, toValue }).start(
      () => setScrollSearchHeaderVisible(isVisible),
    );
  };

  const renderSearchHeader = () => (
    <SearchView style={[STYLES.searchInputContainer]}>
      {renderSearchInput()}
    </SearchView>
  );

  const renderSearchInput = () => (
    <SearchInput
      accessibilityHint={LABELS.search.inputAccessibilityHint}
      accessibilityLabel={LABELS.search.inputAccessibilityLabel}
      accessible={true}
      keyboardType="default"
      placeholder={LABELS.home.searchInputPlaceholder}
      style={STYLES.searchInput}
    />
  );

  const AnimatedListOnScroll = (e: any) => {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    });

    if (e.nativeEvent.contentOffset.y > SEARCH_HEADER_HEIGHT * 2) {
      if (!scrollSearchHeaderVisible) {
        showHideOnScrollSearch({ show: true });
      }
    } else {
      if (scrollSearchHeaderVisible) {
        showHideOnScrollSearch({ show: false });
      }
    }
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <Animated.View
        style={[
          STYLES.searchInputContainer,
          STYLES.onScrollSearchInputContainer,
          animateStyle,
        ]}>
        {renderSearchInput()}
      </Animated.View>
      <Animated.SectionList
        ListHeaderComponent={renderSearchHeader}
        sections={sections}
        keyExtractor={keyExtractor}
        renderItem={renderSectionListItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={STYLES.list}
        stickyHeaderIndices={[0]}
        onScroll={AnimatedListOnScroll}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
      />
    </SafeAreaView>
  );
};

export default Home;
