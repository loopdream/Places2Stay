import React, { FC, useEffect, useState } from 'react';
import {
  TextInput,
  View as SearchView,
  FlatList as SearchResultsList,
} from 'react-native';

import { LABELS } from 'globals';
import { Text } from 'components/base/Text';
import SEARCH_MOCK_DATA, { searchMockDataCityProps } from './searchMockData';
import STYLES from './Search.styles';

type SearchProps = {
  placeholder?: string;
};

const Search: FC<SearchProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(SEARCH_MOCK_DATA.cities);

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

  const renderItem = ({ item }: { item: searchMockDataCityProps }) => (
    <Text style={STYLES.resultListItem}>{item.name}</Text>
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
