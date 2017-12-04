import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MovieDetail extends Component {
    render() {
        let movie = this.props.navigation.state.params;
        return (
            <View style={styles.container}>  
                <Text>{movie.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

export default MovieDetail;
