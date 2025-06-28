import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const UpdateProfileScreen = ({}) => {
  // Example pre-filled user data
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe12@gmail.com');

  const handleUpdatePress = () => {
    // Alert.alert('Profile Updated', `Name: ${name}\nEmail: ${email}`);
    Alert.alert(
      'Profile Updated',
      'Your profile has been updated successfully!',
    );
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={20} color="#6B4EFF" />
      </TouchableOpacity>

      {/* Name Field */}
      <Text style={styles.label}>Name</Text>
      <View style={styles.inputWrapper}>
        <Ionicons
          name="person-outline"
          size={18}
          color="#999"
          style={styles.icon}
        />
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="John Doe"
          placeholderTextColor="#999"
        />
      </View>

      {/* Email Field */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputWrapper}>
        <Ionicons
          name="mail-outline"
          size={18}
          color="#999"
          style={styles.icon}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="johndoe12@gmail.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePress}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 48,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  updateButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
