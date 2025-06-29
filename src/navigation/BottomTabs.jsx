import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Challenges from '../screens/Dashboard/Challenges';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/Dashboard/SettingsScreens';
import MessagesScreen from '../screens/Dashboard/MessagesScreen.jsx';
import StressLibraryScreen from '../screens/Dashboard/LearnScreen/StressLibraryScreen.jsx';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Challenges':
              iconName = focused ? 'trophy' : 'trophy-outline';
              break;
            case 'Messages':
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              break;
            case 'StressLibraryScreen':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'SettingsScreen':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: '#5D2DFD',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Challenges" component={Challenges} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="StressLibraryScreen" component={StressLibraryScreen} />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
