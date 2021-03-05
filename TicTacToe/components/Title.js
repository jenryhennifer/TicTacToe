import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class Title extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Tic Tac Toe</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        backgroundColor: 'teal',
        flexDirection: 'row'
    },
    title: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        flex:1,
    }
})