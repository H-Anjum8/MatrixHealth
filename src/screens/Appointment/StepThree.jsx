import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  CheckBox,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';

const wellnessOptions = [
  'Sleep',
  'Mood',
  'Digestion',
  'Focus',
  'Fitness',
  'Energy',
];

const StepThree = ({ onSubmit }) => {
  const Navigation = useNavigation();

  const [form, setForm] = useState({
    improveAreas: [],
    topGoal: '',
    goalReason: '',
    consent: false,
  });

  const toggleImproveArea = area => {
    setForm(prev => {
      const exists = prev.improveAreas.includes(area);
      const updated = exists
        ? prev.improveAreas.filter(a => a !== area)
        : [...prev.improveAreas, area];
      return { ...prev, improveAreas: updated };
    });
  };

  const setTopGoal = goal => {
    setForm(prev => ({ ...prev, topGoal: goal }));
  };

  const updateField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    Navigation.navigate('ScheduleConsultation');
    // if (!form.consent) {
    //   alert('Please agree to the consent acknowledgment.');
    //   return;
    // }
    // onSubmit(form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => Navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={18} color={colors.primary} />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Intake Form</Text>
      <Text style={styles.subText}>
        This helps your wellness coach tailor your session and plan.
      </Text>

      {/* Step Progress */}
      <Text style={styles.stepText}>Step 3 of 3</Text>
      <View style={styles.progressBar}>
        <View
          style={[styles.progressDot, { backgroundColor: colors.primary }]}
        />
        <View
          style={[styles.progressDot, { backgroundColor: colors.primary }]}
        />
        <View
          style={[styles.progressDot, { backgroundColor: colors.primary }]}
        />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Wellness Goals</Text>

      {/* Improve Areas */}
      <Text style={styles.label}>What areas do you want to improve?</Text>
      <View style={styles.optionWrap}>
        {wellnessOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionBtn,
              form.improveAreas.includes(option) && styles.optionSelected,
            ]}
            onPress={() => toggleImproveArea(option)}
          >
            <Text
              style={[
                styles.optionText,
                form.improveAreas.includes(option) && { color: colors.primary },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Top Goal */}
      <Text style={styles.label}>What's your top wellness goal?</Text>
      <View style={styles.optionWrap}>
        {wellnessOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionBtn,
              form.topGoal === option && styles.optionSelected,
            ]}
            onPress={() => setTopGoal(option)}
          >
            <Text
              style={[
                styles.optionText,
                form.topGoal === option && { color: colors.primary },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Goal Reason */}
      <Text style={styles.label}>Why is this goal important to you?</Text>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        placeholder="Write your message..."
        value={form.goalReason}
        onChangeText={text => updateField('goalReason', text)}
      />

      {/* Consent */}
      <Text style={styles.label}>Consent Acknowledgment</Text>
      <View style={styles.checkboxRow}>
        <TouchableOpacity onPress={() => updateField('consent', !form.consent)}>
          <Ionicons
            name={form.consent ? 'checkbox' : 'square-outline'}
            size={20}
            color={form.consent ? colors.primary : '#6B7280'}
          />
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I understand that my information will be used in accordance with HIPAA
          privacy standards...
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://your-privacy-policy-link.com')}
      >
        <Text style={styles.privacyLink}>View Privacy Policy</Text>
      </TouchableOpacity>

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit & Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default StepThree;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: moderateScale(20),
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#1E1E1E',
    marginBottom: 6,
  },
  stepText: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 10,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  progressDot: { width: 40, height: 4, borderRadius: 2, marginHorizontal: 4 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  label: { fontSize: 13, color: '#111827', marginBottom: 6, fontWeight: '600' },
  optionWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    marginBottom: 16,
  },
  optionBtn: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 4,
  },
  optionSelected: { borderColor: colors.primary },
  optionText: { fontSize: 13, color: '#374151' },
  textArea: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    textAlignVertical: 'top',
    marginBottom: 10,
    fontSize: 13,
    height: 110,
  },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  checkboxText: { flex: 1, marginLeft: 8, fontSize: 12, color: '#374151' },
  privacyLink: {
    color: colors.primary,
    fontSize: 12,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  submitBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
