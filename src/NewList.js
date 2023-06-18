import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

const NewList = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: '4a399700901c4e42a2ac896468192b1d',
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.newsItem}
            key={item.id}
            onPress={() => navigation.navigate('NewsDetail', {newsIte: item})}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id?.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  newsItem: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default NewList;
//4a399700901c4e42a2ac896468192b1d
