import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';

const CustomButton = ({ title, onPress, bgColor, textColor, style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: bgColor || colors.primary },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor || colors.white }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(18),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: moderateScale(4),
  },
  text: {
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
});
