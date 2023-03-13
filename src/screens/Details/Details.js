import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({route}) => {
  const news = route.params;
  return (
    <View>
        <Text>{news.news.title}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
