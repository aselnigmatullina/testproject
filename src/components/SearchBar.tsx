import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button } from 'react-native';

interface ISearchBarProps {
  search: string | any;
  setSearch: (s: string) => void;
}

const SearchBar = ({search, setSearch}: ISearchBarProps) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.searchBarUnclicked}
      >
        <TextInput
          style={styles.input}
          placeholder="Поиск"
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  searchBarUnclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBarClicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '100%',
  },
});
