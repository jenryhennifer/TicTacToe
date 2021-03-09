import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Tic Tac Toe</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        alignItems: 'center',
        height: 110,
        paddingTop: 50,
        position: 'relative',
    },
    headerText:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})