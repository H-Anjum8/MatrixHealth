import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const StepTwo = ({ onNext }) => {
      const Navigation = useNavigation()
  const navigation = useNavigation();

  const [form, setForm] = useState({
    sleepHours: '8',
    energyLevel: 5,
    stressLevel: 5,
    waterIntake: '',
    activityPerWeek: '',
    tobaccoUse: 'Never',
  });

  const [isWaterModalVisible, setWaterModalVisible] = useState(false);
  const [isActivityModalVisible, setActivityModalVisible] = useState(false);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={18} color={colors.primary} />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Intake Form</Text>
      <Text style={styles.subText}>
        This helps your wellness coach tailor your session and plan.
      </Text>

      {/* Step Progress */}
      <Text style={styles.stepText}>Step 2 of 3</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressDot, { backgroundColor: colors.primary }]} />
        <View style={[styles.progressDot, { backgroundColor: colors.primary }]} />
        <View style={[styles.progressDot, { backgroundColor: colors.secondary }]} />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Lifestyle & Habits</Text>

      {/* Sleep */}
      <Text style={styles.label}>Average sleep per night</Text>
      <View style={styles.inputWithUnit}>
        <TextInput
          style={styles.inputNoPadding}
          placeholder="8"
          value={form.sleepHours}
          onChangeText={(v) => handleChange('sleepHours', v)}
          keyboardType="numeric"
        />
        <Text style={styles.unitText}>hr</Text>
      </View>

      {/* Energy */}
      <Text style={styles.label}>Energy levels</Text>
      <View style={styles.sliderRow}>
        <Text style={styles.rangeText}>0</Text>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={form.energyLevel}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#E5E7EB"
          thumbTintColor={colors.primary}
          onValueChange={(v) => handleChange('energyLevel', v)}
        />
        <Text style={styles.rangeText}>10</Text>
      </View>
      <Text style={styles.valueText}>{form.energyLevel}</Text>

      {/* Stress */}
      <Text style={styles.label}>Stress level</Text>
      <View style={styles.sliderRow}>
        <Text style={styles.rangeText}>0</Text>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={form.stressLevel}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor="#E5E7EB"
          thumbTintColor={colors.primary}
          onValueChange={(v) => handleChange('stressLevel', v)}
        />
        <Text style={styles.rangeText}>10</Text>
      </View>
      <Text style={styles.valueText}>{form.stressLevel}</Text>

      {/* Water Intake */}
      <Text style={styles.label}>Water intake per day</Text>
      <TouchableOpacity onPress={() => setWaterModalVisible(true)} style={styles.inputWithIcon}>
        <Text style={styles.placeholderText}>
          {form.waterIntake || 'Select'}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Activity */}
      <Text style={styles.label}>Physical activity per week</Text>
      <TouchableOpacity onPress={() => setActivityModalVisible(true)} style={styles.inputWithIcon}>
        <Text style={styles.placeholderText}>
          {form.activityPerWeek || 'Select'}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Tobacco/Alcohol */}
      <Text style={styles.label}>Tobacco or alcohol use</Text>
      <View style={styles.row}>
        {['Never', 'Occasionally', 'Regularly'].map(opt => (
          <TouchableOpacity
            key={opt}
            style={[
              styles.optionBtn,
              form.tobaccoUse === opt && styles.optionSelected
            ]}
            onPress={() => handleChange('tobaccoUse', opt)}
          >
            <Text
              style={[
                styles.optionText,
                form.tobaccoUse === opt && { color: colors.primary }
              ]}
            >{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextBtn}  onPress={() => navigation.navigate('StepThree')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>

      {/* Water Modal */}
      <Modal isVisible={isWaterModalVisible} onBackdropPress={() => setWaterModalVisible(false)}>
        <View style={styles.modalContent}>
          {['1L', '2L', '3L', '4L+'].map(option => (
            <TouchableOpacity
              key={option}
              style={styles.modalOption}
              onPress={() => {
                handleChange('waterIntake', option);
                setWaterModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 16 }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Activity Modal */}
      <Modal isVisible={isActivityModalVisible} onBackdropPress={() => setActivityModalVisible(false)}>
        <View style={styles.modalContent}>
          {['None', '1-2 times', '3-5 times', 'Daily'].map(option => (
            <TouchableOpacity
              key={option}
              style={styles.modalOption}
              onPress={() => {
                handleChange('activityPerWeek', option);
                setActivityModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 16 }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

    </ScrollView>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', padding: moderateScale(20) },
  backButton: { backgroundColor: colors.secondary, width: 30, borderRadius: 6, alignItems: 'center', justifyContent: 'center', padding: 5 },
  heading: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  subText: { textAlign: 'center', fontSize: 16, color: '#1E1E1E', marginBottom: 20 },
  stepText: { textAlign: 'center', color: colors.primary, fontWeight: '600', marginBottom: 8 },
  progressBar: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  progressDot: { width: 40, height: 4, borderRadius: 2, marginHorizontal: 4 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: colors.primary, marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 13, color: '#111827', marginBottom: 6, fontWeight: '600' },
  inputWithUnit: {
    borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10, paddingHorizontal: 12, flexDirection: 'row',
    alignItems: 'center', marginBottom: 16
  },
  inputNoPadding: { flex: 1, fontSize: 13, paddingVertical: 10 },
  unitText: { color: '#374151', fontSize: 13 },
  sliderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  rangeText: { fontSize: 12, color: '#6B7280', marginHorizontal: 8 },
  valueText: { fontSize: 11, color: colors.primary, fontWeight: '400', textAlign: 'center', marginBottom: 8 },
  inputWithIcon: {
    borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10, paddingHorizontal: 12, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between', marginBottom: 2, height: 50
  },
  placeholderText: { color: '#6B7280', fontSize: 13 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  optionBtn: { flex: 1, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10, paddingVertical: 8, alignItems: 'center', marginRight: 8 },
  optionSelected: { borderColor: colors.primary },
  optionText: { fontSize: 13, color: '#374151' },
  nextBtn: { backgroundColor: colors.primary, paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  nextText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
  modalOption: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
});