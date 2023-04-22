import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/navigator/Navigator';

function App(): JSX.Element {
  return (
    <SafeAreaProvider style={styles.flex}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={Colors.white}
      />
      <Navigator />
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
