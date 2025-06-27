import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';

const AppointmentBooked = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Main Heading */}
      <Text style={styles.heading}>Your Appointment Has</Text>
      <Text style={styles.heading}>Been Booked!</Text>

      {/* Subtext */}
      <Text style={styles.subText}>
        Your appointment has been successfully scheduled. 
        We look forward to serving you!
      </Text>

      {/* Action Buttons */}
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Appointments')}
      >
        <Text style={styles.buttonText}>View Appointments</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.secondaryButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: moderateScale(26),
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: verticalScale(5),
    lineHeight: verticalScale(28),
  },
  subText: {
    fontSize: moderateScale(14),
    color: '#1E1E1E',
    textAlign: 'center',
    marginBottom: verticalScale(30),
    paddingHorizontal: scale(14),
    lineHeight: verticalScale(18),
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(24),
    borderRadius: moderateScale(8),
    width: '90%',
    marginBottom: verticalScale(15),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(24),
    borderRadius: moderateScale(8),
    width: '90%',
    backgroundColor: colors.secondary,
  },
  secondaryButtonText: {
    color:  colors.primary,
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AppointmentBooked;