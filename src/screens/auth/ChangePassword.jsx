// NewPasswordScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../components/CommonComp/CustomTextInput';

const validationSchema = Yup.object({
  password: Yup.string().min(6, 'Too short!').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

export default function ChangePassword() {
  const Navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
        <Ionicons name="chevron-back" size={18} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.title}>New Password</Text>
      <Text style={styles.subtitle}>
        Your new password will be different from the existing & previous ones.
      </Text>

      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
           Navigation.navigate('Avatar')
           console.log('Submitted:', values)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
          <>
            <Text style={styles.subtext}>Password</Text>
            <CustomTextInput
              placeholder="Enter Your Password"
              iconName="lock-closed-outline"
              secure
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
               <Text style={styles.subtext}>Confirm Password</Text>
            <CustomTextInput
              placeholder="Confirm Password"
              iconName="lock-closed-outline"
              secure
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity
              style={[styles.button, !isValid && styles.buttonDisabled]}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  backButton: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 24, fontWeight:400 },
  errorText: { fontSize: 12, color: 'red', marginBottom: 8 },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    fontWeight: 600,
    marginTop: 10,
  },
  buttonDisabled: { backgroundColor: '#A59FEF' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
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
    marginVertical:12

  }
});
