import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorite = () => {
  const [savedNews, setSavedNews] = useState([]);

  const getDataStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@Favorite');
      if (value !== null) {
        setSavedNews(JSON.parse(value));
        console.log(JSON.parse(value));
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
      <Text>Favorite</Text>
      {savedNews.map((news) => (
        <Text key={news.title}>{news.category}</Text>
      ))}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
