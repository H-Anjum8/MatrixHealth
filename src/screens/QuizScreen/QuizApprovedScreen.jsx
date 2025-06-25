import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const QuizApprovedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanks For{"\n"}Completing The Quiz!</Text>

      <Text style={styles.description}>
        Your responses have been submitted. An admin will review your survey form, and upon approval, you’ll receive access to the app.
      </Text>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.statusContainer}>
        <View style={styles.greenDot} />
        <Text style={styles.statusLabel}>Status</Text>
      </View>

      <TouchableOpacity style={styles.approvedButton}>
        <Text style={styles.approvedText}>Approved</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizApprovedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  description: {
    fontSize: width * 0.045,
    textAlign: 'center',
    color: '#555',
    marginBottom: 40,
    lineHeight: 22,
  },
  continueButton: {
    backgroundColor: '#2C1478',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginBottom: 30,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2ECC71',
    marginRight: 8,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  approvedButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  approvedText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});