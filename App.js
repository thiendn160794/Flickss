import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation'
import MovieTab from './MovieTab'

const TabLayout = TabNavigator({
  NowPlaying: {
    screen: props => <MovieTab url = "https://api.themoviedb.org/3/movie/now_playing"  />
  },
  TopRated: {
    screen: props => <MovieTab url = "https://api.themoviedb.org/3/movie/top_rated"  />
  },
}, {
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


export default class App extends React.Component {
  render() {
    return (
        <TabLayout />
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

