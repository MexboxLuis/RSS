import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const FeedDetails = () => {
  const navigation = useNavigation();
  const { currentFeed } = useSelector((state) => state.feed);

  if (!currentFeed) return <Text>Selecciona un feed</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={currentFeed.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.articleItem}
            onPress={() => {
              navigation.navigate('ArticleView', { url: item.links[0].url });
            }}
          >

            <Text style={styles.articleTitle}>{item.title}</Text>

            <Text style={styles.articleSnippet}>{item.description}</Text>


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
  articleItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  articleTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'justify',

  },
  articleSnippet: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
    textAlign: 'justify',
    lineHeight: 16,
    maxHeight: 50,
  },
});

export default FeedDetails;
