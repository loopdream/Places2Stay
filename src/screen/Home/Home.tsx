import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, SectionList, FlatList } from 'react-native';

import { Search } from 'screen/Search';
import { SectionHeader, PlaceCta } from './component';
import homeMockData, { SectionProps, DataProps } from './homeMockData';

const Home: FC = () => {
  const [sections, setSections] = useState([] as any);

  useEffect(() => {
    const { placeCtas, cityCtas } = homeMockData.sections;
    setSections([placeCtas, cityCtas]);
  }, []);

  const keyExtractor = (item: DataProps, index: number) => `${item}-${index}`;

  const getHorizontalItemStyles = (
    data: DataProps | DataProps[],
    index: number,
  ) => {
    const isFirstItem = !index;
    // @ts-ignore
    const isLastItem = index === data.length - 1;
    if (isFirstItem) {
      return {
        ...styles.horizontalListItem,
        ...styles.horizontalListItemFirst,
      };
    }
    if (isLastItem) {
      return {
        ...styles.horizontalListItem,
        ...styles.horizontalListItemLast,
      };
    }
    return styles.horizontalListItem;
  };

  const renderItem = ({
    section,
    item,
  }: {
    section: SectionProps;
    item: any; //todo: type
  }) => {
    console.log('renderItem', { section }, { item });
    if (section.orientation === 'horizontal') {
      return (
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
      );
    }
    return (
      <PlaceCta style={styles.horizontalMargin} key={item.key} {...item} />
    );
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 100,
  },
  horizontalList: {
    margin: 0,
    marginBottom: 130,
  },
  horizontalListItem: {
    width: 120,
    margin: 0,
    marginLeft: 25,
  },
  horizontalListItemFirst: {
    marginLeft: 50,
  },
  horizontalListItemLast: {
    margin: 0,
    marginRight: 50,
  },
  horizontalMargin: {
    marginHorizontal: 50,
  },
  sectionHeader: {
    // fontSize: 32,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
  },
});

export default Home;
