import React from 'react';
import Numero from './Numero';
import { View, StyleSheet } from 'react-native';

export default props => (
  <View>
    <View style={styles.entrada}>
      <Numero />
      <Numero />
    </View>
  </View>
);

const styles = StyleSheet.create({
  entrada:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
