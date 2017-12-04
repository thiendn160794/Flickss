import React, { Component } from "react";
import {View, Text, FlatList, ActivityIndicator} from "react-native";
import MovieItem from "./MovieItem";

const api_key = "347085c63478d00dd3ba964029427ad7";

class MoviesList extends Component {

  static navigationOptions = {
    headerTitle: 'Movies'
  };

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
    this.renderSeparator = this.renderSeparator.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size = "large"/>
        </View>
      );
    }
    return (
      <FlatList
          data={this.state.data}
          renderItem={movieItem => <MovieItem {...movieItem.item} goDetail = {() => navigate("MovieDetail", movieItem.item)}/>}
          keyExtractor = {(item, index) => item.id}
          onRefresh={this.onPullToRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.onLoadMore}
          onEndReachedThreshold={0.3}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
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

  renderSeparator() {
    return (
      <View
        style={{
          height: 2,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  renderFooter() {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

}

export default MoviesList;
