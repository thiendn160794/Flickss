import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class MovieDetail extends Component {
  render() {
    let movie = this.props.navigation.state.params;
    let url = "https://image.tmdb.org/t/p/original" + movie.poster_path;
    return (
      <View style={styles.container}>
        <Image style={styles.ImageLayout} source={{uri: url}}/>
        <View style={styles.OpacityLayout} />
        <View style={styles.TransparentLayout}>
          <Text style={{flex: 0.1, fontSize: 20, fontWeight: "bold", color: "black" }}>
            {movie.title}
          </Text>
          <View style={{ flex: 0.9, alignItems: 'center' }}>
            <Text style={{flex: 0.1, color: "black" }}>
              Rate: {movie.vote_average}
            </Text>
            <Text style={{flex: 0.1, color: "black" }}>
              Release Date: {movie.release_date}
            </Text>
            <Text style={{flex: 0.8, color: "black" }}>
              {movie.overview}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: "center",
    alignItems: "center",
  },
  OpacityLayout: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.5,
    width: 320,
    height: 240,
    position: "absolute",
    paddingBottom: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  TransparentLayout: {
    flex: 1,
    backgroundColor: "transparent",
    width: 320,
    height: 240,
    position: "absolute",
    paddingBottom: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  ImageLayout: { 
    flex: 1, 
    width: 320, 
    height: 480, 
    position: "absolute" }
});

export default MovieDetail;
