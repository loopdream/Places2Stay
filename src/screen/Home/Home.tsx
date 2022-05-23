import React, { FC, useState, useEffect } from 'react';
import { SafeAreaView, SectionList, ScrollView } from 'react-native';

import { Search } from 'screen/Search';
import HOME_MOCK_DATA, { SectionProps, DataProps } from './homeMockData';
import { keyExtractor } from './Home.utils';
import styles, {
  HORIZONTAL_LIST_ITEM_WIDTH,
  HORIZONTAL_LIST_ITEM_SPACING,
} from './Home.styles';

import { SectionHeader, PlaceCta } from './component';

const HORIZONTAL_SNAP_TO_INTERVAL =
  HORIZONTAL_LIST_ITEM_WIDTH + HORIZONTAL_LIST_ITEM_SPACING;

const Home: FC = () => {
  const [sections, setSections] = useState([] as any);

  useEffect(() => {
    const { placeCtas, cityCtas } = HOME_MOCK_DATA.sections;
    setSections([placeCtas, cityCtas]);
  }, []);

  const renderItem = ({
    section,
    item,
  }: {
    section: SectionProps;
    item: any;
  }) =>
    section.orientation === 'horizontal' ? (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
        decelerationRate={0}
        contentOffset={{ x: -50, y: 0 }}
        snapToInterval={HORIZONTAL_SNAP_TO_INTERVAL}
        contentInset={styles.contentInset}>
        {item.map((props: DataProps) => (
          <PlaceCta {...props} style={styles.horizontalListItem} />
        ))}
      </ScrollView>
    ) : (
      <PlaceCta style={styles.horizontalMargin} key={item.key} {...item} />
    );

  const renderSectionHeader = ({ section }: { section: SectionProps }) => (
    <SectionHeader
      heading={section.heading}
      description={section.description}
      style={{ ...styles.sectionHeader, ...styles.horizontalMargin }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <SectionList
        sections={sections}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Home;
