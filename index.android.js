/**
 * Sample React Native Maps App
 * https://github.com/facebook/react-native
 * @flow
 * For React Native Jax and JaxNode user groups May 17th 2017
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
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 30.3203746,
        longitude: -81.6654225,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      marker: {
        title: 'You are here',
        description: 'This is your current location!'
      }
    };
  }
  onRegionChange(region) {
    this.setState(Object.assign({}, this.state, { region: region }));
  }
  componentWillMount() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(pos => {
            const newRegion = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            };
            this.setState(Object.assign({}, this.state, { region: newRegion }));
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}`)
              .then(res => res.json())
              .then(json => {
                if (json.results.length > 0) {
                  this.setState(Object.assign({}, this.state, { marker: { title: 'Your are here', description: json.results[0].formatted_address }}));  
                }
              })
              .catch(err => alert(err));
            if (this.map !== null && this.map !== undefined) {
                //this.map.animateToRegion(newRegion);
            }
        });
    }
    
  }
  onRegionChangeComplete(region) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}`)
      .then(res => res.json())
      .then(json => {
        if (json.results.length > 0) {
          this.setState(Object.assign({}, this.state, { marker: { title: 'Your are here', description: json.results[0].formatted_address }}));  
        }
      })
      .catch(err => alert(err));
  }
  render() {
    // onRegionChange={(r) => this.onRegionChange(r)}
    // onRegionChangeComplete={(r) => this.onRegionChangeComplete(r)} 
    return (
        <MapView style={styles.map} 
          ref={ref => { this.map = ref; }} 
          initialRegion={this.state.region} >
          <MapView.Marker.Animated
              coordinate={this.state.region}
              title={this.state.marker.title}
              description={this.state.marker.description} />
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

AppRegistry.registerComponent('JNMaps', () => JNMaps);
