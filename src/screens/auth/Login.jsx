
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../components/CommonComp/CustomTextInput';
import PrimaryButton from '../../components/CommonComp/PrimaryButton';
import { useNavigation } from '@react-navigation/native';


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password required'),
});

const Login = () => {
  const Navigation = useNavigation();


  return (
    <View style={styles.container}>
    
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subheading}>Log in to continue your healing journey.</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log('Logging in with:', values);
          Navigation.navigate('Home')
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
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
              placeholder="Enter Your Password"
              iconName="lock-closed-outline"
              secure
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.forgotText} onPress={() => Navigation.navigate('EmailVerification')}>Forgot Password?</Text>
            </TouchableOpacity>

            <PrimaryButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <View style={styles.signupContainer}>
        <Text style={styles.footerText}>
          Don’t have an account?

        </Text>
        <TouchableOpacity onPress={() => Navigation.navigate('SignUp')}>
          <Text style={styles.signupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>


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

    fontWeight: 700,
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
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#7E48E2',
  },
  footerText: {
    textAlign: 'center',


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
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  }
});

export default Login;
