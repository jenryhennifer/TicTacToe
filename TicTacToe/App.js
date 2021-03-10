import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import GameBoard from './components/GameBoard'

export default function App() {
  return (
      <View>
        <Header />
        <GameBoard/>
        <StatusBar style="auto" />
      </View>
  );
}

