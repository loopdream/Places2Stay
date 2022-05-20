import React, { FC, useState, useEffect } from 'react';
import { SafeAreaView, SectionList, FlatList } from 'react-native';

import { Search } from 'screen/Search';
import homeMockData, { SectionProps } from './homeMockData';
import { getHorizontalItemStyles, keyExtractor } from './Home.utils';
import styles from './Home.styles';
import { SectionHeader, PlaceCta } from './component';

const Home: FC = () => {
  const [sections, setSections] = useState([] as any);

  useEffect(() => {
    const { placeCtas, cityCtas } = homeMockData.sections;
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
      <FlatList
        horizontal
        data={item}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={({ item: city, index }: { item: any; index: number }) => {
          const itemStyles = getHorizontalItemStyles(section.data[0], index);
          return <PlaceCta key={city.key} {...city} style={itemStyles} />;
        }}
        contentContainerStyle={styles.horizontalList}
      />
    ) : (
      <PlaceCta style={styles.horizontalMargin} key={item.key} {...item} />
    );

  const renderSectionHeader = ({ section }: { section: any }) => (
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
