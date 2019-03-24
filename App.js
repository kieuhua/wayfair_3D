/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, FlatList, TouchableHighlight, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import WayFair3D from './WayFair3D'

class App extends Component {
  render() {
    return (
      <View>
      <WayFair3D />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {padding: 20, justifyContent: 'center', borderColor: 'rgba(255,232,31, .2)'},
  text: {color: '#ffe81f', fontSize: 18}
});

export default App
