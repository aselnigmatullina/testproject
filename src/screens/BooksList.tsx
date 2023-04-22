import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {MainListScreenItem} from '../components/main/MainListScreenItem';
import {MainListItem} from '../types/MainListItem';
import SearchBar from '../components/SearchBar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooksData, searchByName} from '../store/booksListSlice';
import {RootState} from '../store';
import {useRef} from 'react/index';

export const BooksListScreen = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.booksList);
  const [search, setSearch] = useState('');
  const inputRef = useRef('');
  const renderMainDataItem = ({item}: {item: MainListItem}) => {
    return <MainListScreenItem data={item} />
  }

  const getMoreData = (value: boolean) => {
    if (Boolean(value)) {
      // @ts-ignore
      // dispatch(fetchBooksData());
    }
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchBooksData());
  }, []);

  const onScrollToEnd = ({ distanceFromEnd }: any) => {
    if (distanceFromEnd < 0) {
      return;
    }
    getMoreData(false);
  };

  const onRefresh = () => {
    getMoreData(true);
  };

  const keyExtractor = (data: MainListItem) => data?.name;


  if (books.loading) {
    return (
      <Text style={styles.text}>Загрузка...</Text>
    )
  }

  if (books.error) {
    return (
      <Text style={styles.text}>Ошибка...</Text>
    )
  }

  const handleSearch = () => {
    dispatch(searchByName(inputRef?.current?.value))
  }

  return (
    <FlatList
      onEndReached={onScrollToEnd}
      ListHeaderComponent={<SearchBar search={inputRef} setSearch={handleSearch} />}
      onEndReachedThreshold={0.2}
      keyExtractor={keyExtractor}
      data={books.booksData}
      refreshing={books.loading}
      onRefresh={onRefresh}
      renderItem={renderMainDataItem}/>
  )
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  }
})
