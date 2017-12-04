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
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        // tabBarIcon: ({ tintColor }) => (
        //   <Image
        //     source={require('./notif-icon.png')}
        //     style={[styles.icon, {tintColor: tintColor}]}
        //   />
        // ),
      };
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default MovieTab;
