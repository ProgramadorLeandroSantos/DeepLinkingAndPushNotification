import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Routes from './routes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Routes />
    </SafeAreaView>
  );
}

export default App;