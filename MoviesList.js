//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import MovieItem from "./MovieItem";

const api_key = "347085c63478d00dd3ba964029427ad7";

// create a component
class MoviesList extends Component {
  static navigationOptions = {
    title: 'Movies',
    headerTitle: 'Movies'
  }
  constructor(props) {
    super();
    this.state = {
      url: props.screenProps.url,
      loading: false,
      page: 1,
      error: null,
      refreshing: false
    };
    this.onPullToRefresh = this.onPullToRefresh.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.fetchRemote = this.fetchRemote.bind(this);
  }

  componentDidMount(props) {
    this.setState(
      {
        loading: true 
      },
      () => {
        this.fetchRemote();
      }
    );
  }

  fetchRemote() {
    console.log("page: ", this.state.page);
    fetch(this.state.url + "?api_key=" + api_key + "&page=" + this.state.page)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data:
            this.state.page === 1
              ? responseJson.results
              : [...this.state.data, ...responseJson.results],
          error: null, 
          loading: false,
          refreshing: false,
          page: this.state.page
        });
      })
      .catch((error) => {
        alert(error); 
        this.setState({
          loading: false,
          error: error,
          refreshing: false
        });
      });
  }

  render() {
    console.log("error: ", this.state.error)
    let screenProps = this.props.screenProps; 
    let navigate = this.props.navigation.navigate;
    if (this.state.error != null) {
        console.log("error: ", this.state.error)
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>{this.state.error.toString()}</Text>
            </View>
        )
    }
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 , justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size = "large"/>
        </View>
      );
    }
    return (
        <FlatList
            style = {{backgroundColor : 'yellow'}}
            data={this.state.data}
            renderItem={movieItem => <MovieItem {...movieItem.item} />}
            // keyExtractor = {(item, index) => item.id}
            onRefresh={this.onPullToRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.onLoadMore}
            onEndReachedThreshold={0.3}
        />
    );
  }

  onPullToRefresh() {
    this.setState(
      {
        page: 1,
        url: this.state.url,
        refreshing: true
      },
      () => {
        this.fetchRemote();
      }
    );
  }

  onLoadMore() {
    this.setState(
        {
            url: this.state.url,
            page: this.state.page + 1,
            refreshing: false
        },
        () => {
            this.fetchRemote()
        }
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    paddingTop: 20
  }
});

//make this component available to the app
export default MoviesList;
