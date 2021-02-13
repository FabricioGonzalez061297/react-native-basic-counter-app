/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';
import { Index } from './components/view';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Index />
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}>

      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  containerRed: {
    flex: 1,
    backgroundColor: 'pink',
  },
  containerGreen: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
