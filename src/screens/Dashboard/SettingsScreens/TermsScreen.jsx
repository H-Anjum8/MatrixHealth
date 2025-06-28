import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const TermsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back" size={18} color="#6B2CCF" />
      </TouchableOpacity>

      {/* Terms Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <View style={styles.section}>
          <Text style={styles.title}>1. Acceptance of Terms</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
            pellentesque sit nibh. Venenatis nunc etiam libero ultricies
            accumsan sed lectus. At tortor accumsan at commodo non.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>2. Use of the Service</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
            pellentesque sit nibh. Venenatis nunc etiam libero ultricies
            accumsan sed lectus. At tortor accumsan at commodo non.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>3. Privacy Policy</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
            pellentesque sit nibh. Venenatis nunc etiam libero ultricies
            accumsan sed lectus. At tortor accumsan at commodo non.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>4. Termination</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Egestas dignissim nulla
            pellentesque sit nibh. Venenatis nunc etiam libero ultricies
            accumsan sed lectus. At tortor accumsan at commodo non.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  backButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.secondary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
  description: {
    fontSize: 13,
    color: '#444',
    lineHeight: 20,
  },
});
