/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps'; 

export default class JNMaps extends Component {
  render() {
    return (
        <MapView style={styles.map} initialRegion={{
          latitude: 30.3203746,
          longitude: -81.6654225,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }} />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

AppRegistry.registerComponent('JNMaps', () => JNMaps);
