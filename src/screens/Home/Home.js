import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_KEY} from '@env';
import {Card, Title, Paragraph} from 'react-native-paper';
import axios from 'axios';
import Header from '../../components/Header/Header';

// const Categories = ['Tecnology', 'Sports', 'Politics', 'Health', 'Business'];
// // const API_KEY = "pub_18299311a7d95e45b4101f94332f59434be6a"

const Home = () => {
  const [dataNews, setDataNews] = useState([]);

  const getDataNews = async () => {
    await axios
      .get(`https://newsdata.io/api/1/news?apikey=${API_KEY}&language=fr,en`)
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
    <View>
      <Header />
      <ScrollView style={{backgroundColor: '#fff'}}>
        {dataNews.map((news, index) => (
          <Card key={index} style={styles.containerCard}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.title}>
                <Title>{news.title}</Title>
              </View>
              {/* Image */}
              <View style={{flex: 1 / 3, margin: 10}}>
                {news.image_url ? (
                  <Image style={styles.image} source={{uri: news.image_url}} />
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
              <Paragraph>{news.content}</Paragraph>
              <Text>Published At: {news.pubDate}</Text>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

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
    color: "#111"
  },
  image: {
    width: 120,
    height: 120,
  },
});
