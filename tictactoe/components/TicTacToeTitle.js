import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

export default class TicTacToeTitle extends Compoent {
  render() {
    return <Text style={styles.container}>Tic Tac Toe</Text>;
  }
}

//use this as CSS in React Native
const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#20232a',
  },
});
