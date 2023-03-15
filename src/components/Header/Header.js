import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Back from '../../assets/icon/back.png';
import {useNavigation} from '@react-navigation/native';

const Header = ({details, home}) => {
  const navigation = useNavigation();

  if (details) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity
          style={styles.TitlePagesDetails}
          onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.image} />
        </TouchableOpacity>
        <View>
          <Text style={styles.textHeader}>Details</Text>
        </View>
      </View>
    );
  }
  if (home) {
    return (
      <View style={styles.wrapperHeader}>
        <Text style={styles.textHeader}>Home</Text>
      </View>
    );
  }
};

export default Header;

const styles = StyleSheet.create({
  textHeader: {
    color: '#111',
    fontSize: 30,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  wrapperHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cartProduct: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    color: '#000',
  },
  image: {
    width: 30,
    height: 25,
    marginTop: 10,
    resizeMode: 'contain',
  },
  imageBack: {
    width: 15,
    height: 15,
    margin: 7,
  },
});
