import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View>
      <TextInput
      style={styles.visor}
        placeholder='Entrada'
        editable={false}
      />
    </View>
);

const styles = StyleSheet.create({
  visor:{
    height: 100,
    fontSize: 18
  }
});
