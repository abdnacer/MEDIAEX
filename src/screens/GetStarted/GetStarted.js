import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import Button from '../../components/Button';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/Started.jpg')}
      style={styles.imageBackground}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>MEDIAEX</Text>
        <Text style={styles.subtitle}>
          votre projet vise à offrir une expérience utilisateur agréable et
          pratique pour accéder aux dernières actualités dans une variété de
          domaines, tout en garantissant la sécurité des données des
          utilisateurs.
        </Text>
        <Button textBtn="Get-Started" onPress={() => navigation.replace('MainApp')} />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
