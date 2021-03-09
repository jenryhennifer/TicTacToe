// import React, { Component } from 'react';

// import { StyleSheet, Text, View, StatusBar } from 'react-native';

// export default class Title extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <StatusBar barStyle='light-content'/>
//         <Text style={styles.title}>Tic Tac Toe</Text>
//       </View>
//     );
//   }
// }

// //stylesheets
// const styles = StyleSheet.create({
//   container: {
//     width: 300,
//     backgroundColor: 'teal',
//     flexDirection: 'row',
//   },
//   title: {
//     color: 'white',
//     fontSize: 25,
//     textAlign: 'center',
//     flex: 1,
//   },
// });


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
        elevation:2,
    },
    headerText:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})