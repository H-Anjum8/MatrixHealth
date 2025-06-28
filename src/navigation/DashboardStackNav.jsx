import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Settings from '../screens/Dashboard/Settings';
import EditProfileScreen from '../screens/Dashboard/SettingsScreens/EditProfileScreen';

const DashboardStackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default DashboardStackNav;

const styles = StyleSheet.create({});
