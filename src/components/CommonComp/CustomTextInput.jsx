
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import colors from '../../utils/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CustomTextInput = ({ placeholder, iconName, secure, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(!secure);

  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={20} color="#999" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      {secure && (
        <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};



export default CustomTextInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    // fontFamily: 'SF-Pro-Display-Regular',
    color: '#000',
  },
});