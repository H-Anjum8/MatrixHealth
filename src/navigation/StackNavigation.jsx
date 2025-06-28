import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import SignUp from '../screens/auth/SignUp';
import EmailVerification from '../screens/auth/EmailVerification';
import UpdateEmail from '../screens/auth/UpdateEmail';
import QuizScreen from '../screens/QuizScreen';
import QuizApprovedScreen from '../screens/QuizScreen/QuizApprovedScreen';
import QuizCompleteScreen from '../screens/QuizScreen/QuizCompleteScreen';
import Avatar from '../screens/Avatar';
import AvatarCustomization from '../screens/Avatar/AvatarCustomization';
import FocusWellness from '../screens/FocusWellness';
import EnterEmail from '../screens/auth/EnterEmail';
import ChangePassword from '../screens/auth/ChangePassword';
import WellnessScreen from '../screens/WellnessScreen';
import StepOne from '../screens/Appointment/StepOne';
import StepTwo from '../screens/Appointment/StepTwo';
import StepThree from '../screens/Appointment/StepThree';
import ScheduleConsultation from '../screens/Appointment/ScheduleConsultation';
import AppointmentBooked from '../screens/Appointment/AppointmentBooked';
import DashBoardNavigator from './DashBoardNavigator';
import EditProfileScreen from '../screens/Dashboard/SettingsScreens/EditProfileScreen';
import UpdateProfileScreen from '../screens/Dashboard/SettingsScreens/UpdateProfileScreen';
import EditAvatar from '../screens/Dashboard/SettingsScreens/EditAvatar';
import { NotificationScreen } from '../screens/Dashboard/SettingsScreens/NotificationScreen';
import ChangePasswordScreen from '../screens/Dashboard/SettingsScreens/ChangePasswordScreen';
import SubscriptionScreen from '../screens/Dashboard/SettingsScreens/SubscriptionScreen';
import DataDownloadScreen from '../screens/Dashboard/SettingsScreens/DataDownloadScreen';
import TermsScreen from '../screens/Dashboard/SettingsScreens/TermsScreen';
import BookConsultation from '../screens/Dashboard/DrawerScreens/BookConsultation';
import ClientAppointments from '../screens/Dashboard/DrawerScreens/ClientAppointments';
// import Dashboard from '../screens/dashboard';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterEmail"
        component={EnterEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateEmail"
        component={UpdateEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Avatar"
        component={Avatar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AvatarCustomization"
        component={AvatarCustomization}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FocusWellness"
        component={FocusWellness}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizApprovedScreen"
        component={QuizApprovedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizCompleteScreen"
        component={QuizCompleteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WellnessScreen"
        component={WellnessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepOne"
        component={StepOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepTwo"
        component={StepTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepThree"
        component={StepThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScheduleConsultation"
        component={ScheduleConsultation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppointmentBooked"
        component={AppointmentBooked}
        options={{ headerShown: false }}
      />
      {/* Dashboard Screens  */}
      <Stack.Screen
        name="DashBoardNavigator"
        component={DashBoardNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="EditAvatar"
        component={EditAvatar}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="DataDownloadScreen"
        component={DataDownloadScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="BookConsultation"
        component={BookConsultation}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ClientAppointments"
        component={ClientAppointments}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
