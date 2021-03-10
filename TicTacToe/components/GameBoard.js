import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

//close / cirlce-outline

export default class GameBoard extends Component {
  //updates the game state and current player to keep track who plays where
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
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

  //switch statement to handle wich icon needs to be rendered
  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      //player 1
      case 1:
        return <Icon name="close" style={styles.playerX} />;
      //player 2
      case 2:
        return <Icon name="circle-outline" style={styles.playerO} />;
      //blanik
      default:
        return <Icon />;
    }
  };

  //player 1 = X ----- player 2 = O ------ default 0 = blank
  onClick = (row, col) => {
    var player = this.state.currentPlayer;
    var array = this.state.gameState.slice();

    //updates gamestate with proper player
    array[row][col] = player;
    this.setState({ gameState: array });

    //changes current player
    switch (player) {
      case 1:
        return (this.state.currentPlayer = 2);
      case 2:
        return (this.state.currentPlayer = 1);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(0, 0)}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(0, 1)}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(0, 2)}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(1, 0)}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(1, 1)}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(1, 2)}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(2, 0)}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(2, 1)}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.square}
            onPress={() => this.onClick(2, 2)}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
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
