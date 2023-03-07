import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({onPress, textBtn}) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.bgBtn}>
        <Text style={styles.textBtn}>{textBtn}</Text>
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  bgBtn: {
    backgroundColor: '#FFE8E5',
    padding: 10,
    borderRadius: 5,
    marginTop: 40
  },

  textBtn: {
    color: '#111',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: 22,
  },
});
