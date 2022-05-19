import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, SectionList, FlatList } from 'react-native';

import { Search } from 'screen/Search';
import { SectionHeader, PlaceCta } from './component';
import homeMockData from './homeMockData';

const Home: FC = () => {
  const [sections, setSections] = useState([] as any);

  useEffect(() => {
    const { placeCtas, cityCtas } = homeMockData.sections;
    setSections([placeCtas, cityCtas]);
  }, []);

  const keyExtractor = (item: any, index: number) => item + index;

  const renderItem = ({ section, item }: { section: any; item: any }) => {
    if (section.orientation === 'horizontal') {
      // carousel
      return (
        <FlatList
          horizontal
          data={section.data[0]}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={({ item: city }) => <PlaceCta key={city.key} {...city} />}
        />
      );
    }
    // list
    return <PlaceCta key={item.key} {...item} />;
  };

  const renderSectionHeader = ({ section }: { section: any }) => (
    <SectionHeader
      heading={section.heading}
      description={section.description}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <SectionList
        style={styles.list}
        sections={sections}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 120,
    paddingBottom: 50,
    paddingHorizontal: 50,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  container: {
    flex: 1,
  },
});

export default Home;
