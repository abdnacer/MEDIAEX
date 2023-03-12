import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Gap from '../../components/Gap/gap';
import axios from 'axios';

const Home = () => {
  const [dataNews, setDataNews] = useState([]);

  const getDataNews = async () => {
    await axios
      .get(
        'https://newsdata.io/api/1/news?apikey=pub_18299311a7d95e45b4101f94332f59434be6a&language=fr,en',
      )
      .then(res => {
        setDataNews(res.data.results);
        // console.log(res.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataNews();
  }, []);

  return (
    <ScrollView style={styles.conatiner}>
      <Gap height={30} />
      {dataNews.map((news, index) => (
        <View key={index} style={styles.card}>
          <Image style={styles.image} source={{ uri: news.image_url }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.date}>
            {news.pubDate}
            </Text>
            <Text style={styles.description}>
              {news.content}
            </Text>
          </View>
        </View>
      ))}
      <Gap height={30} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#fff',
    height: '100%',
  },
  card: {
    backgroundColor: '#FFE8E5',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 30,
      height: 3,
    },
    shadowOpacity: 0.49,
    shadowRadius: 5,
    elevation: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#111',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#111',
  },
});
