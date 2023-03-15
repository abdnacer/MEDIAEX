import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Gap from '../../components/Gap/gap';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = ({route}) => {
  const news = route.params;
  // const [arrayStorage, setArrayStorage] = useState([]);

  const handlePress = () => {
    AsyncStorage.getItem('@Favorite')
    .then(res => {
      const parsedNews = res ? JSON.parse(res) : []
      const newsExsits = parsedNews.find(e => {
        e.title === news.news.title
      })

      if(!newsExsits){
        parsedNews.push(news.news)
        AsyncStorage.setItem('@Favorite', JSON.stringify(parsedNews))
        .then(() => {
          console.log('Saved')
        })
        .catch(err => console.log(err))
      }
      else{
        console.log('Article already exists in favorites');
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <View>
      <Header details />
      <Gap height={30} />
      <ScrollView>
        <View style={styles.containerDetails}>
          <View style={styles.saveNews}>
            <Text></Text>
            <TouchableOpacity
              onPress={handlePress}>
              <Text style={styles.titleSave}>Saved</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleCard}>{news.news.title}</Text>
          <Gap height={30} />
          <View>
            <Image
              source={{
                uri:
                  typeof news.news.image_url === 'string'
                    ? news.news.image_url
                    : 'https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}
              style={{width: '100%', height: 200, resizeMode: 'cover'}}
            />
          </View>
          <View style={{padding: 20, marginBottom: 100}}>
            <Text>
              {news.news.content === null
                ? news.news.description
                : news.news.content}
            </Text>
            <Text style={{fontSize: 14, color: '#888', marginTop: 10}}>
              {news.news.creator ? 'Created By: ' : ''}
              <Text style={{fontSize: 18, color: '#111'}}>
                {news.news.creator}
              </Text>
            </Text>

            <Text style={{fontSize: 14, color: '#888', marginVertical: 10}}>
              {news.news.pubDate ? 'Published At: ' : ''}
              <Text style={{fontSize: 18, color: '#111'}}>
                {news.news.pubDate}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  containerDetails: {
    marginHorizontal: 10,
  },
  titleCard: {
    color: '#111',
    fontSize: 25,
    fontWeight: 'bold',
  },
  saveNews: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginLeft: 100,
  },
  titleSave: {
    backgroundColor: '#111',
    color: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
