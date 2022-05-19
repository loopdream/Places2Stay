import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, SectionList } from 'react-native';

import { Search } from 'screen/Search';
import { SectionHeader, PlaceCta } from './component';
import homeMockData from './homeMockData';

const Home: FC = () => {
  const [sections, setSections] = useState([] as any);

  useEffect(() => {
    const { placeCtas, cityCtas } = homeMockData.sections;
    setSections([placeCtas, cityCtas]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <SectionList
        style={styles.list}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <PlaceCta key={item.id} {...item} />}
        renderSectionHeader={({ section: { heading, description } }) => (
          <SectionHeader heading={heading} description={description} />
        )}
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
