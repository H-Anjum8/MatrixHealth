import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../components/CommonComp/CustomTextInput';
import PrimaryButton from '../../components/CommonComp/PrimaryButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm your password'),
});

const SignUp = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
        <Ionicons name="chevron-back" size={18}  style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.heading}>Create Your{'\n'}Wellness Account</Text>
      <Text style={styles.subheading}>Sign up to start your healing journey.</Text>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log('Signing up with:', values);
          Navigation.navigate('Avatar');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <CustomTextInput
              placeholder="Enter Your Full Name"
              iconName="person-outline"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            )}

            <CustomTextInput
              placeholder="Enter Your Email Address"
              iconName="mail-outline"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <CustomTextInput
              placeholder="Create Password"
              iconName="lock-closed-outline"
              secure
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <CustomTextInput
              placeholder="Confirm Password"
              iconName="lock-closed-outline"
              secure
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <PrimaryButton title="Continue" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <Text style={styles.footerText}>
        Already have an account?
        <Text style={styles.signupText} onPress={() => Navigation.navigate('Login')}> Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
    justifyContent: 'start',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 5,
    fontWeight: '700',
    marginTop: 20,
    color: '#000',
  },
  subheading: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 30,
    color: '#666',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  signupText: {
    color: '#7E48E2',
    fontFamily: 'Poppins_600SemiBold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 8,
  },
  back: {
    color: colors.primary,
    
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    borderRadius:6,
     alignItems:'center',
    justifyContent:'center',
      paddingHorizontal:5,
    paddingVertical:6,
   
  }
});

export default SignUp;
