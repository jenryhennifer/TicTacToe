import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

//close / cirlce-outline

export default class GameBoard extends Component {
  //updates the game state and current player to keep track who plays where
  constructor(props) {
    super(props);
    this.state = {
      gameState: [],
      currentPlayer: 1,
    };
  }

  //when page loads game will start

  componentDidMount() {
    this.startGame();
  }
  //start game function to reset board
  //0 = blank
  startGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.square}>
            <Icon name="" style={styles.playerX} />
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
    fontSize: 75,
  },
});
