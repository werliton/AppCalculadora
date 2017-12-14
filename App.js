import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Topo } from './src/components';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Topo />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
