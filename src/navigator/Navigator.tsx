import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from './screens';
import Navigation from './Navigation';
import {BooksListScreen} from '../screens/BooksList';
import {BooksListItemList} from '../screens/BooksListItemScreen';
import store from '../store';

const Stack = createStackNavigator();
import {Provider as ReduxProvider} from 'react-redux';

const Navigator = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer
        ref={Navigation.navigationRef}
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: '#fff',
          },
        }}>
        <Stack.Navigator initialRouteName={Screens.BOOKS_SCREEN} screenOptions={{headerShown: false, title: 'Список книг'}}>
          <Stack.Screen
            name={Screens.BOOKS_SCREEN}
            component={BooksListScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name={Screens.BOOKS_LIST_ITEM}
            component={BooksListItemList}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default Navigator;
