import React, { FC, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import { Search } from 'screen/Search';
import { PlaceCtaProps } from './component/PlaceCta';
import { SectionHeader, PlaceCta } from './component';
import HomeData from './homeMockData';

const Home: FC = () => {
  const [places, setPlaces] = useState([] as PlaceCtaProps[]);

  useEffect(() => {
    setPlaces(HomeData.placesArray);
  }, []);

  const renderPlaces = places.map((item, i) => (
    <PlaceCta key={i.toString()} {...item} />
  ));

  return (
    <SafeAreaView>
      <Search />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <SectionHeader
          heading={HomeData.sectionHeader.heading}
          description={HomeData.sectionHeader.description}
        />
        {renderPlaces}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 24,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 0,
  },
});

export default Home;
