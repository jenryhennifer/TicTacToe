import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Stylesheet
import styles from './Styles'

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>TIC TAC TOE</Text>
        </View>
    ) 
}