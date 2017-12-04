//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";

const Routes = StackNavigator({
  MoviesList: { screen: MoviesList },
  MovieDetail: { screen: MovieDetail }
});

// create a component
class MovieTab extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Routes
        screenProps={{
          url : this.props.url
        }}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default MovieTab;
