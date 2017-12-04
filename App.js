import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation'
import MovieTab from './MovieTab'
import MoviesList from './MoviesList';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MoviesList /> */}
        <MovieTab/>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 20
  },
});

