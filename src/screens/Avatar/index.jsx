// AvatarStyleScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import imagePath from '../../constant/imagePath';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../utils/colors';
const Avatar = ({ navigation }) => {
  const Navigation = useNavigation()
  const [avatarName, setAvatarName] = useState('');
  const [gender, setGender] = useState('Male');

  const handleCustomize = () => {
    Navigation.navigate('AvatarCustomization')
    // Implement customize logic here
    console.log('Avatar Name:', avatarName);
    console.log('Gender:', gender);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
        <Ionicons name="chevron-back" size={18} color={colors.primary} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Your Avatar Style</Text>
      <Text style={styles.subtitle}>Customize Your Wellness Avatar</Text>
      <Text style={styles.subtext}>Enter Your Avatar Name</Text>
      {/* Input Field */}
      <TextInput
        placeholder="Enter Your Avatar Name"
        value={avatarName}
        onChangeText={setAvatarName}
        style={styles.input}
      />

      {/* Gender Buttons */}
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'Male' && styles.selectedGender,
          ]}
          onPress={() => setGender('Male')}>
          <Text style={gender === 'Male' ? styles.genderTextSelected : styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'Female' && styles.selectedGender,
          ]}
          onPress={() => setGender('Female')}>
          <Text style={gender === 'Female' ? styles.genderTextSelected : styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Avatar Image */}
      <Image
        source={imagePath.Avatar} // replace with your avatar image path
        style={styles.avatar}
        resizeMode="contain"
      />

      {/* Customize Button */}
      <TouchableOpacity style={styles.customizeButton} onPress={handleCustomize}>
        <Text style={styles.customizeText}>Customize</Text>
      </TouchableOpacity>

      {/* Login Text */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')} >

          Login
        </Text>
      </Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
    fontWeight: 500
  },
  subtext: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
    fontWeight: 500,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 22,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  selectedGender: {
    backgroundColor: '#f0e9ff',
    borderColor: '#6a0dad',
  },
  genderText: {
    color: '#333',
    fontWeight: '500',
  },
  genderTextSelected: {
    color: '#6a0dad',
    fontWeight: '700',
  },
  avatar: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  customizeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  customizeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 16,
    color: '#666',
  },
  loginLink: {
    color: colors.link,
    fontWeight: '400',
  },
  back: {
    color: colors.primary,


  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 6,
    marginTop: 20,
    marginBottom: 6

  }

});
