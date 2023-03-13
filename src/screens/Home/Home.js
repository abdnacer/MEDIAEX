import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useState} from 'react';
import {API_KEY} from '@env';
import {Card, Title, Paragraph, Chip} from 'react-native-paper';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Gap from '../../components/Gap/gap';

const Home = ({navigation}) => {
  const [dataNews, setDataNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(false);
  const testCategory = '';

  const getDataNews = async () => {
    await axios
      .get(`https://newsdata.io/api/1/news?apikey=${API_KEY}&language=fr,en`)
      .then(res => {
        setDataNews(res.data.results);
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
      <View style={styles.backgroundconainer}>
        <Text style={styles.Title}>Choose your News</Text>
        <ScrollView horizontal={true} contentContainerStyle={{marginTop: 20}}>
          <View style={styles.ContainerCategorie}>
            {dataNews.map((news, index) => {
              return (
                <LinearGradient
                  key={index}
                  colors={['#000', '#000']}
                  style={styles.Categorie}>
                  <Text style={styles.text}>{news.category}</Text>
                </LinearGradient>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <ScrollView style={{backgroundColor: '#fff'}}>
        {dataNews.map((news, index) => (
          // 2eme Card
          <TouchableOpacity onPress={() => navigation.navigate('Details', {news})}>
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
                <Text style={styles.textPub}>Published At: {news.pubDate}</Text>
                <Text style={styles.textPub}>Creator By: {news.creator}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  itemContainer: {
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
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#111',
  },
  itemSource: {
    fontSize: 12,
    color: 'black',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: 'black',
  },

  backgroundconainer: {
    backgroundColor: '#fff',
  },
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
  chipItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textPub: {
    marginTop: 10,
    color: '#999'
  },

  Categorie: {
    backgroundColor: 'white',
    borderRadius: 13,
    height: 32,
    padding: 6,
    width: 111,
    marginLeft: 12,
  },
  Title: {
    color: '#111',
    fontSize: 25,
    marginTop: 15,
    marginLeft: 10,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  ContainerCategorie: {
    flex: 4,
    flexDirection: 'row',
    color: '#000',
    marginTop: 20,
    marginBottom: 20,
  },
});
