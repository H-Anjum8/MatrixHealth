import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const ChangePasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New passwords do not match');
      return;
    }

    Alert.alert('Success', 'Password updated successfully');
    // Optionally clear fields or navigate
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back" size={20} color="#6a0dad" />
      </TouchableOpacity>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Current Password</Text>
        <View style={styles.inputBox}>
          <Icon
            name="lock-closed-outline"
            size={18}
            color="#aaa"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="********"
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <View style={styles.inputBox}>
          <Icon
            name="lock-closed-outline"
            size={18}
            color="#aaa"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="********"
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputBox}>
          <Icon
            name="lock-closed-outline"
            size={18}
            color="#aaa"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="********"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    fontWeight: '500',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
