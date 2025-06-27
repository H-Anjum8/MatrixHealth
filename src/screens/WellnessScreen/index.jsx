import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';

import { moderateScale, verticalScale, scale } from 'react-native-size-matters';
import imagePath from '../../constant/imagePath';
import { useNavigation } from '@react-navigation/native';
const WellnessScreen = () => {
  const Navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
       {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
              <Ionicons name="chevron-back" size={18} color={colors.primary} />
            </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Your Personalized{"\n"}Wellness Path Is Ready</Text>
      <Text style={styles.subText}>
        Let’s schedule your free consultation to get expert guidance tailored to you.
      </Text>

      {/* Image */}
      <Image
        source={imagePath.wellness}
        style={styles.wellness}
        resizeMode="contain"
       
                
                
              
      />

      {/* Steps */}
      <Text style={styles.stepsHeading}>3 Steps To Get Started</Text>

      <View style={styles.stepItem}>
        <Ionicons name="document-text-outline" size={moderateScale(18)} color="#000000" />
        <View style={styles.stepTextWrapper}>
          <Text style={styles.stepTitle}>Fill A Quick Intake Form</Text>
          <Text style={styles.stepSubText}>Share lifestyle, symptoms, and health history</Text>
        </View>
      </View>

      <View style={styles.stepItem}>
        <Ionicons name="calendar-outline" size={moderateScale(18)} color="#000000" />
        <View style={styles.stepTextWrapper}>
          <Text style={styles.stepTitle}>Book Your Free 15-Minute Consultation</Text>
          <Text style={styles.stepSubText}>Choose a time that works for you</Text>
        </View>
      </View>

      <View style={styles.stepItem}>
        <Ionicons name="bar-chart-outline" size={moderateScale(18)} color="#000000" />
        <View style={styles.stepTextWrapper}>
          <Text style={styles.stepTitle}>Get Your Health Matrix</Text>
          <Text style={styles.stepSubText}>See where you’re thriving and what needs attention</Text>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn} onPress={() => Navigation.navigate('StepOne')}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WellnessScreen;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    backgroundColor: '#fff',
    flexGrow: 1,
  },

    backButton: {
      backgroundColor: colors.secondary,
      width: 30,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5,
      paddingVertical: 6,
      marginTop:6,
      marginBottom:6
  
    },
  heading: {
    fontSize: moderateScale(26),
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: verticalScale(6),
  },
  subText: {
  fontSize: moderateScale(14),
  color: '#1E1E1E',
  textAlign: 'center',
  marginBottom: verticalScale(8),
  paddingHorizontal:12,
},
  wellness: {
      width: 314,
    height: 267,
    alignSelf: 'center',
    marginBottom: 10,
  },
  stepsHeading: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#111827',
    marginBottom: verticalScale(10),
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: verticalScale(16),
  },
  stepTextWrapper: {
    marginLeft: moderateScale(12),
    flex: 1,
     marginBottom: verticalScale(1),

  },
  stepTitle: {
    fontSize: moderateScale(14),
    color: colors.primary,
    fontWeight: '600',
    marginBottom: verticalScale(4),
  },
  stepSubText: {
    fontSize: moderateScale(11),
    color: '#1E1E1E',
    lineHeight: 12,
  },
  continueBtn: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(14),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    marginTop: verticalScale(8),
  },
  continueText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});