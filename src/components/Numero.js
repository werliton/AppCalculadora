import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput style={styles.input} />
);

const styles = StyleSheet.create({
  input:{
    width: 150,
    margin: 5
  }
});
