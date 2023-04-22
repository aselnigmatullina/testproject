import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MainListItem} from '../../types/MainListItem';
import Navigation from '../../navigator/Navigation';
import {Screens} from '../../navigator/screens';

interface IBooksListScreenItemProps {
  data: MainListItem;
}

export const MainListScreenItem = ({data}: IBooksListScreenItemProps) => {
  const handlePress = () => {
    Navigation.navigate(Screens.BOOKS_LIST_ITEM, {id: data.url[data.url?.length - 1], name: data.name});
  }
  return (
    <TouchableOpacity onPress={handlePress} key={data.name} style={styles.infoWrap}>
      {data.name ? <Text style={styles.mainButtonText}>
        {data.name || ''}{' '}
      </Text> : null}
      {data?.aliases?.length ? data.aliases.map((i) => <Text key={i} style={styles.mainButtonText}>
        {i || ''}{' '}
      </Text>) : null}
      {data.culture ? <Text style={styles.mainButtonText}>
        {data.culture || ''}{' '}
      </Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default memo(MainListScreenItem);
