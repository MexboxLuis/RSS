import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedList from './components/FeedList';
import FeedDetails from './components/FeedDetails';
import ArticleView from './components/ArticleView';
import store from './store/store'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Feeds" component={FeedList} />
          <Tab.Screen name="FeedDetails" component={FeedDetails} />
          <Tab.Screen name="ArticleView" component={ArticleView} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
