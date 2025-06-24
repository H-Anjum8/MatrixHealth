/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {


  return (
    <>
      <NavigationContainer>
        {/* Fake background color for status bar area on Android */}
        {Platform.OS === 'android' && (
          <View style={styles.statusBarAndroid} />
        )}

        {/* Fake background for iOS notch area */}
        {Platform.OS === 'ios' && (
          <View style={styles.statusBarIOS} />
        )}

        <StatusBar
          translucent
          backgroundColor="gray"
          barStyle="light-content"
        />

        <StackNavigation />
      </NavigationContainer>

    </>
  );
}



export default App;
const styles = StyleSheet.create({


  statusBarAndroid: {
    height: StatusBar.currentHeight,
    backgroundColor: 'gray',
  },
  statusBarIOS: {
    height: 44, // Approximate height for iOS notch
    backgroundColor: 'yellow',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 20,
  },
})