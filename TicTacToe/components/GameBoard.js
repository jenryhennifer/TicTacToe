import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

//close / cirlce-outline

export default class GameBoard extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.square}>
            <Icon name='close' style={styles.playerX}/>
          </View>
          <View style={styles.square} />
          <View style={styles.square} />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
  },
  square: {
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  playerX: {
    fontSize: 75,
  },
  playerO: {
      fontSize: 75
  }
});
