import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/Dashboard';
import SettingsScreen from '../screens/Dashboard/SettingsScreens';
import MessagesScreen from '../screens/Dashboard/MessagesScreen.jsx';
import LearnScreen from '../screens/Dashboard/LearnScreen/index.jsx';
import colors from '../utils/colors.js';
import ChallengesLeaderboardScreen from '../screens/Dashboard/ChallengesScreen/ChallengesLeaderboardScreen.jsx';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        const isHome = route.name === 'Home';

        return {
          tabBarIcon: ({ focused, color }) => {
            const icons = {
              Home: focused ? 'home' : 'home-outline',
              Messages: focused ? 'chatbubble' : 'chatbubble-outline',
              Learn: focused ? 'book' : 'book-outline',
              Settings: focused ? 'settings' : 'settings-outline',
              Challenges: focused ? 'trophy' : 'trophy-outline',
            };
            return (
              <Ionicons name={icons[route.name]} size={22} color={color} />
            );
          },
          tabBarActiveTintColor: '#5D2DFD',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 12,
            height: 70,
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 16,
                backgroundColor: colors.purple,
                padding: 10,
                borderRadius: 8,
              }}
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="menu" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
          headerRight: isHome
            ? () => (
                <TouchableOpacity
                  style={{ marginRight: 16 }}
                  onPress={() => console.log('Notifications')}
                >
                  <Ionicons
                    name="notifications"
                    size={24}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              )
            : undefined,
          headerTitle: '',
        };
      }}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerTitle: () => <Text style={styles.headerTitle}>Messages</Text>,
          headerStyle: {
            backgroundColor: colors.white,
            elevation: 3,
            shadowOpacity: 0.1,
          },
        }}
      />
      <Tab.Screen name="Challenges" component={ChallengesLeaderboardScreen} />
      <Tab.Screen name="Learn" component={LearnScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: () => <Text style={styles.headerTitle}>Settings</Text>,
          headerStyle: {
            backgroundColor: colors.white,
            elevation: 3,
            shadowOpacity: 0.1,
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
