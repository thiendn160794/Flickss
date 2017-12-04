import React, { Component, PureComponent } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import { Card } from 'react-native-elements';

class MovieItem extends PureComponent {
  render() {
    let movie = this.props;
    let url = "https://image.tmdb.org/t/p/original" + movie.poster_path
    console.log(movie.title)
    return (
      <TouchableHighlight onPress = {this.props.goDetail}> 
        <View>
          <Card style = {{flex : 1}} title = {movie.title}>
              <Text style={{marginBottom: 10, flex : 0.5}}>
                  {movie.overview}
              </Text>
          </Card>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default MovieItem;
