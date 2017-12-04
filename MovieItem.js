import React, { Component, PureComponent } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";

class MovieItem extends PureComponent {
  render() {
    let movie = this.props;
    let url = "https://image.tmdb.org/t/p/original" + movie.poster_path
    console.log(movie.title)
    return (
      <TouchableHighlight onPress = {this.props.goDetail}> 
        <View style = {{height : 200, flex: 1, flexDirection: 'row'}}>
          <Image
            style={{flex : 0.4}}
            source={{
              uri:
                url
            }}
          />
          <View style = {{flex: 0.04}}/>
          <View style = {{flex: 0.56, flexDirection: 'column'}}>
            <Text style = {{flex: 0.1, fontSize: 20, fontWeight: 'bold', }}>{movie.title}</Text>
            <View style = {{flex: 0.05}}/>
            <View style = {{flex: 0.8, flexDirection: 'row'}}>
              <Text style = {{flex: 0.9}}>{movie.overview}</Text>
              <View style = {{flex: 0.1}}/>
            </View>
            <View style = {{flex: 0.05}}/>
          </View>
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
