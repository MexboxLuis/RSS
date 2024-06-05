import React from 'react';
import { WebView } from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  ArticleView: { url: string };
};

type ArticleViewRouteProp = RouteProp<RootStackParamList, 'ArticleView'>;

const ArticleView = () => {
  const route = useRoute<ArticleViewRouteProp>();
  const { url } = route.params!;

  return <WebView source={{ uri: url }} />;
};

export default ArticleView;
