import React, { FC, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  TextInput,
  Pressable as ListItemView,
  View as SearchView,
  FlatList as SearchResultsList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import { LABELS, COLORS } from 'globals';
import { Text } from 'components/base/Text';
import SEARCH_MOCK_DATA, { searchMockDataCityProps } from './searchMockData';
import STYLES from './Search.styles';

type SearchProps = {
  placeholder?: string;
};

const Search: FC<SearchProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(SEARCH_MOCK_DATA.cities);

  const navigation = useNavigation();

  useEffect(() => {
    setSearchResults(SEARCH_MOCK_DATA.cities);
  }, []);

  useEffect(() => {
    setSearchResults(
      SEARCH_MOCK_DATA.cities.filter(city =>
        city.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue]);

  const keyExtractor = (item: searchMockDataCityProps, index: number) =>
    `${item.name}-${index}`;

  const itemOnPress = (item: searchMockDataCityProps) => {
    // console.log(item.name);
    // @ts-ignore
    navigation.navigate('SearchFlow', { city: item });
  };

  const renderItem = ({ item }: { item: searchMockDataCityProps }) => (
    <ListItemView
      style={STYLES.resultListItemView}
      onPress={() => itemOnPress(item)}>
      <Icon name="location-pin" color={COLORS.blue} size={36} />
      <Text style={STYLES.resultListItem}>{item.name}</Text>
    </ListItemView>
  );

  return (
    <SearchView style={STYLES.container}>
      <TextInput
        accessibilityHint={LABELS.search.inputAccessibilityHint}
        accessibilityLabel={LABELS.search.inputAccessibilityLabel}
        accessible={true}
        keyboardType="default"
        onChangeText={setSearchValue}
        placeholder={LABELS.search.inputPlaceholder}
        style={STYLES.textInput}
      />
      <SearchResultsList
        contentContainerStyle={STYLES.resultList}
        data={searchResults}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SearchView>
  );
};

export type { SearchProps };
export default Search;
