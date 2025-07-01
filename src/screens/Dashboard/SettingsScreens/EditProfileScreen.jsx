import React from 'react';
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
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = ({}) => {
  const navigation = useNavigation();
  const handleEditPress = () => {
    Alert.alert('Submint successfully!');
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
          placeholder="John Doe"
          style={styles.input}
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
          placeholder="johndoe12@gmail.com"
          style={styles.input}
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#EDE9FE',
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
  editButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
