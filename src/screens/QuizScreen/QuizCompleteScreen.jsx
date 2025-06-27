import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const QuizCompleteScreen = ({  }) => {
  const Navigation =useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanks For{"\n"}Completing The Quiz!</Text>

      <Text style={styles.description}>
        Your responses have been submitted. An admin will review your survey form,
        and upon approval, you’ll receive access to the app.
      </Text>

      <View style={styles.statusContainer}>
        <View style={styles.dot} />
        <Text style={styles.statusText}>Status</Text>
      </View>

      <TouchableOpacity style={styles.pendingButton} onPress={() => Navigation.navigate('QuizApprovedScreen')}>
        <Text style={styles.pendingText}>Pending</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.08, // responsive text
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  description: {
    fontSize: width * 0.041,
    textAlign: 'center',
    color: '#555',
    marginBottom: 230,
    lineHeight: 22,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FCA311',
    marginRight: 8,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  pendingButton: {
    backgroundColor: '#ece4f9',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  pendingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5e2ca5',
  },
});