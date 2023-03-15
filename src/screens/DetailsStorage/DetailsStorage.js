import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import Header from '../../components/Header/Header';
  import Gap from '../../components/Gap/gap';
  
  const DetailsStorage = ({route}) => {
    const news = route.params;
  
    return (
      <View>
        <Header details />
        <Gap height={30} />
        <ScrollView>
          <View style={styles.containerDetails}>
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
  
  export default DetailsStorage;
  
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
  