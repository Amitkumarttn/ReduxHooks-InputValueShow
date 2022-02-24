import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import store from './src/redux/store';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Home />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
