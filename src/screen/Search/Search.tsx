import React, { FC } from 'react';
import { View as SearchView, TextInput, StyleSheet } from 'react-native';

export type SearchProps = {
  placeholder?: string;
};

import colors from 'globals/colors';

const Search: FC<SearchProps> = ({ placeholder = 'Try Boston' }) => (
  <SearchView style={styles.container}>
    <TextInput
      keyboardType="default"
      placeholder={placeholder}
      style={styles.textInput}
    />
  </SearchView>
);

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingTop: 30,
    paddingBottom: 30,
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: 100,
    padding: 20,
    color: colors.grey,
    fontStyle: 'normal',
    fontSize: 16,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    textAlign: 'center',
  },
});

export default Search;
