import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/CommonComp/PrimaryButton'
import imagePath from '../../constant/imagePath'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        source={imagePath.Logo}
        style={styles.logo}
        resizeMode="contain"
      />

      <Image
        source={imagePath.HomeImg}
        style={styles.illustration}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Your Healing Journey Begins Here</Text>
      <Text style={styles.subheading}>
        Your personalized health journey starts here.
      </Text>

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Login" style={{  flex: 1}} onPress={()=>Navigation.navigate('Login')} />
        <PrimaryButton title="Sign Up" style={{  flex: 1}} onPress={() => Navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  illustration: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  heading: {
    fontSize: 29,
    fontFamily: 'Poppins_500SemiBold',
    textAlign: 'left',
    marginBottom: 10,
    fontWeight:700,
    color: '#000',
  },
  subheading: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    marginBottom: 30,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
  },
});
