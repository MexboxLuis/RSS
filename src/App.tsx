import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedList from './components/FeedList';
import FeedDetails from './components/FeedDetails';
import ArticleView from './components/ArticleView';
import store from './store/store'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feeds') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'FeedDetails') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            } else if (route.name === 'ArticleView') {
              iconName = focused ? 'globe' : 'globe-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Feeds" component={FeedList} options={{ title: "INEGI RSS" }} />
          <Tab.Screen name="FeedDetails" component={FeedDetails} options={{ title: "Comunicados" }} />
          <Tab.Screen name="ArticleView" component={ArticleView} options={{ title: "Visualizador" }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
