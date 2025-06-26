import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
            {/* <Stack.Screen
                name="AvatarCustomization"
                component={AvatarCustomization}
                options={{ headerShown: false }}
            /> */}
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
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})