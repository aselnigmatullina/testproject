import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {fetchBookData} from '../store/bookListSlice';

export const BooksListItemList = ({route}: any) => {
  const dispatch = useDispatch();
  const book = useSelector((state: RootState) => state.bookList);
  useEffect(() => {
    dispatch(fetchBookData(route?.params?.id))
  }, [route?.params?.id])

  if (book.loading) {
    return (
      <Text style={styles.text}>Загрузка...</Text>
    )
  }

  if (book.error) {
    return (
      <Text style={styles.text}>Ошибка..</Text>
    )
  }
  return (
    <>
      <View style={styles.infoWrap}>
        {book.bookData?.name ? <Text style={styles.mainButtonText}>
          {book.bookData?.name || ''}{' '}
        </Text> : null}
        {book.bookData?.aliases ? book.bookData?.aliases.map((i) => <Text key={i} style={styles.mainButtonText}>
          {i || ''}{' '}
        </Text>) : null}
        {book.bookData?.culture ? <Text style={styles.mainButtonText}>
          {book?.bookData.culture || ''}{' '}
        </Text> : null}
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  infoWrap: {
    marginVertical: 16,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
  mainButtonText: {
    flex: 1,
    paddingHorizontal: 16,
  },
})
