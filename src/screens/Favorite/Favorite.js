import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card, Title, Paragraph, Chip} from 'react-native-paper';
import Header from '../../components/Header/Header';

const Favorite = ({navigation}) => {
  const [savedNews, setSavedNews] = useState([]);

  const getDataStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@Favorite');
      if (value !== null) {
        setSavedNews(JSON.parse(value));
        // console.log(savedNews)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataStorage();
  }, []);

  return (
    <View>
      <Header favorite />
      <ScrollView style={{backgroundColor: '#fff'}}>        
      {savedNews.map((news, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('DetailsStorage', {news})}>
            <Card key={index} style={styles.containerCard}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.title}>
                  <Title>{news.title}</Title>
                </View>
                {/* Image */}
                <View style={{flex: 1 / 3, margin: 10}}>
                  {news.image_url ? (
                    <Image
                      style={styles.image}
                      source={{uri: news.image_url}}
                    />
                  ) : (
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=600',
                      }}
                    />
                  )}
                </View>
              </View>
              <View style={{margin: 10}}>
                <Paragraph>{news.description}</Paragraph>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#FFE8E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 30,
      height: 3,
    },
    shadowOpacity: 0.49,
    shadowRadius: 5,
    elevation: 7,
  },
  title: {
    justifyContent: 'space-around',
    flex: 2 / 3,
    margin: 10,
    color: '#111',
  },
  image: {
    width: 120,
    height: 120,
  },
});
