import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentFeed, fetchFeeds } from '../store/feedSlice';
import { useNavigation } from '@react-navigation/native';
import { FeedDetails } from './FeedDetails';


const FeedList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { feeds, loading, error } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(fetchFeeds('https://www.inegi.org.mx/rss/noticias/xmlfeeds?p=2,1'));
  }, [dispatch]);

  if (loading) return <Text>Cargando sitio...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={feeds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.feedItem}
            onPress={() => {
              dispatch(setCurrentFeed(item));
              navigation.navigate('FeedDetails');
            }}
          >
            <Text style={styles.feedTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  feedItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FeedList;
