import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
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
      case -1:
        return <Icon name="circle-outline" style={styles.playerO} />;
      //blanik
      default:
        return <Icon />;
    }
  };

  //1 if player 1 --- 2 player -1 --- 0 tie
  checkWinner = () => {
    var array = this.state.gameState;
    const totTiles = 3;
    var sum;

    //rows -- adds column 1,2,3 in each row
    for (var i = 0; i < totTiles; i++) {
      sum = array[i][0] + array[i][i] + array[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }
    //columns -- adds row 1,2,3 in each column
    for (var i = 0; i < totTiles; i++) {
      sum = array[0][i] + array[1][i] + array[2][i];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }
    //diagonal right
    var diagonalRight = array[0][0] + array[1][1] + array[2][2];
    if (diagonalRight == 3) {
      return 1;
    } else if (diagonalRight == -3) {
      return -1;
    }
    // diagonal left
    var diagonalLeft = array[0][2] + array[1][1] + array[2][0];
    if (diagonalLeft == 3) {
      return 1;
    } else if (diagonalLeft == -3) {
      return -1;
    }

    // no winner
    return 0;
  };
  //player 1 = X ----- player 2 = O ------ default 0 = blank
  onClick = (row, col) => {
    //Winner Check
    var winnerCheck = this.checkWinner();
    if (winnerCheck == 1) {
      Alert.alert('player 1 Wins!');
      this.startGame();
    } else if (winnerCheck == -1) {
      Alert.alert('player 2 Wins!');
      this.startGame();
    }
    var value = this.state.gameState[row][col];

    if (value !== 0) {
      return;
    }

    var player = this.state.currentPlayer;
    var array = this.state.gameState.slice();

    //updates gamestate with proper player
    array[row][col] = player;
    this.setState({ gameState: array });

    //changes current player
    switch (player) {
      case 1:
        return (this.state.currentPlayer = -1);
      case -1:
        return (this.state.currentPlayer = 1);
    }
  };

  //gameboard
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
        <Button
          style={styles.button}
          title="New Game"
          onPress={this.startGame}
        />
      </View>
    );
  }
}

