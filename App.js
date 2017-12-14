import React, { Component } from 'react';
import { Topo, Painel } from './src/components';
import { View } from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Topo />
          <Painel />
      </View>
    );
  }
}
