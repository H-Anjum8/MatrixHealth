import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import CustomTextInput from '../../components/CommonComp/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
const EmailUpdateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const UpdateEmail = () => {
    const Navigation = useNavigation()
  

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
                <Ionicons name="chevron-back" size={18} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.header}>Update Your Email</Text>
            <Text style={styles.subHeader}>
                It seems like you didn’t receive the email. Please enter a new email address, and we’ll send the verification code again.
            </Text>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={EmailUpdateSchema}
                onSubmit={(values) => {
                    console.log('Form Data:', values);
                    Navigation.navigate('Avatar');
                }}

            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>
                        <CustomTextInput
                            placeholder="Enter Your Email Address"
                            iconName="mail-outline"
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'Black',
        marginBottom: 10,
        marginTop: 20,
    },
    subHeader: {
        fontSize: 12,
        color: 'black',
        marginBottom: 20,
        fontWeight: 400

    },
    formContainer: {
        marginTop: 10,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#FFF',
        backgroundColor: '#1A1A1A',
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    button: {
        backgroundColor: colors.primary,
        marginTop: 50,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
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

    }
});

export default UpdateEmail;
