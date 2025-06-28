import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, Text, Image } from 'react-native';
import BottomTabs from './BottomTabs';
import CustomDrawerContent from '../components/Dashboard/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DashboardNavigator() {
  return (
    <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabs}
        // options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
