import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props =>(
  <View style={styles.topo}>
    <Text style={styles.txtTitle}>Calculadora 1.0</Text>
  </View>
);

const styles = StyleSheet.create({
  topo:{
    backgroundColor: '#428ff4',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtTitle:{
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  }
});
