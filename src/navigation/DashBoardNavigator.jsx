import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import CustomDrawerContent from '../components/Dashboard/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DashBoardNavigator() {
  return (
    <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabs}
        options={{
          headerShown: false, // ✅ hide header here to prevent double header
        }}
      />
    </Drawer.Navigator>
  );
}
