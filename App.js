import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation'
import MovieTab from './MovieTab'
import MoviesList from './MoviesList';
import MovieDetail from "./MovieDetail";

const Routes = StackNavigator({
  MoviesList: { screen: MoviesList },
  MovieDetail: { screen: MovieDetail }
});
export default class App extends React.Component {
  render() {
    return (
         <MovieTab url = "https://api.themoviedb.org/3/movie/now_playing"/>
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

