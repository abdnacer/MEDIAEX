import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={styles.containerHeader}>
      {/* <Appbar.Content title="Home" style={styles.textHeader} /> */}
      <Text style={styles.textHeader}>Home</Text>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    marginTop: 10,
    backgroundColor: '#FFE8E5',
  },
  textHeader: {
    color: '#111',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold'
  },
});
