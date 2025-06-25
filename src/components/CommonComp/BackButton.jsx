import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
const BackButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
                <Ionicons name="chevron-back" size={2} style={styles.back} />
            </TouchableOpacity>
        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    back: {
        color: colors.primary,

    },
    backButton: {
        backgroundColor: colors.secondary,
        width: 30,
        borderRadius: 6
    }
})