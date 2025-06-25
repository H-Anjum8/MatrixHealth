import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell
} from 'react-native-confirmation-code-field';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const CELL_COUNT = 4;

const EmailVerification = ({ route }) => {
    const Navigation = useNavigation();
    const email = 'johndoe12@gmail.com';
    const [code, setCode] = useState('');
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value: code, setValue: setCode });

    const resendCode = () => {
        fetch('https://your.api/send-code', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => Alert.alert('Code sent', `New code sent to ${email}`));
    };

    const submit = () => {
        fetch('https://your.api/verify-code', {
            method: 'POST',
            body: JSON.stringify({ email, code }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.ok ? navigation.replace('SuccessScreen') : Promise.reject())
            .catch(() => Alert.alert('Error', 'Invalid or expired code'));
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
                <Ionicons name="chevron-back" size={18} color={colors.primary} />
            </TouchableOpacity>

            <Text style={styles.title}>Email Verification</Text>
            <Text style={styles.subtitle}>
                We’ve sent a verification code to the email {email}
            </Text>

            <View style={styles.codeContainer}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={code}
                    onChangeText={setCode}
                    cellCount={CELL_COUNT}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}
                        >
                            {symbol || (isFocused && <Cursor />)}
                        </Text>
                    )}
                />
            </View>

            <TouchableOpacity onPress={resendCode}>
                <Text style={styles.resend}>Resend code</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.submitBtn]}
                disabled={code.length !== CELL_COUNT}
                onPress={submit}
            >
                <Text style={styles.submitText} >Submit</Text>
            </TouchableOpacity>
            <Text style={styles.hintText}>
                Didn't receive the email? Check your spam filter or try{' '}
                <Text style={styles.highlight} onPress={() => Navigation.navigate('UpdateEmail')}>another email address</Text>.
            </Text>

        </View>
    );
};

export default EmailVerification;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    backButton: {
        width: 30,
        height: 30,
        backgroundColor: colors.secondary,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 28, fontWeight: 'bold', marginTop: 20, marginBottom: 8 },
    subtitle: { fontSize: 14, color: '#555', marginBottom: 20 },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },
    cell: {
        width: 70,
        height: 50,
        borderWidth: 2,
        borderColor: '#CCC',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 28,
        lineHeight: 40,
        color: '#000',
        marginHorizontal: 4
    },
    focusCell: { color: 'white', backgroundColor: colors.primary },
    resend: { color: 'black', textAlign: 'center', fontWeight: '500', marginTop: 10, marginBottom: 90 },
    submitBtn: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    disabledBtn: { opacity: 0.5 },
    submitText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    hintText: {
        color: '#555',
        fontSize: 11,
        textAlign: 'left',
        marginTop: 10,
        paddingEnd: 25
    },
    highlight: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'black',
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
