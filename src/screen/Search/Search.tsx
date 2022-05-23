import React, { FC } from 'react';
import { View as SearchView, TextInput } from 'react-native';

import STYLES from './Search.styles';

type SearchProps = {
  placeholder?: string;
};

const Search: FC<SearchProps> = ({ placeholder = 'Try Boston' }) => (
  <SearchView style={STYLES.container}>
    <TextInput
      keyboardType="default"
      placeholder={placeholder}
      style={STYLES.textInput}
    />
  </SearchView>
);

export type { SearchProps };
export default Search;
