import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const StepOne = ({  }) => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    fullName: '', dob: '', gender: '', conditions: '', onMedication: null, medicationDetails: ''
  });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isGenderModalVisible, setGenderModalVisible] = useState(false);

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
      <Text style={styles.stepText}>Step 1 of 3</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressDot, { backgroundColor: colors.primary }]} />
        <View style={[styles.progressDot, { backgroundColor: colors.secondary }]} />
        <View style={[styles.progressDot, { backgroundColor: colors.secondary }]} />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Personal & Medical Basics</Text>

      {/* Full Name */}
      <Text style={styles.label}>Enter Your Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Full Name"
        value={form.fullName}
        onChangeText={v => handleChange('fullName', v)}
      />

      {/* DOB & Gender */}
      <View style={styles.row}>
        {/* Date of Birth */}
        <View style={styles.col}>
          <Text style={styles.label}>Date of Birth</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.inputNoPadding}
              placeholder="DD/MM/YYYY"
              value={form.dob}
              editable={false}
            />
            <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
              <Ionicons name="calendar-outline" size={20} Color="#2C1478" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Gender */}
        <View style={styles.col}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.inputNoPadding}
              placeholder="Select"
              value={form.gender}
              editable={false}
            />
            <TouchableOpacity onPress={() => setGenderModalVisible(true)}>
              <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Existing Conditions */}
      <Text style={styles.label}>Existing Medical Conditions</Text>
      <View style={styles.inputWithIcon}>
        <TextInput
          style={styles.inputNoPadding}
          placeholder="Select"
          value={form.conditions}
          onChangeText={v => handleChange('conditions', v)}
        />
        <Ionicons name="chevron-down" size={20} color="#9CA3AF" style={styles.rightIcon} />
      </View>

      {/* On Medication — INLINE label + Yes/No buttons */}
      <View style={styles.row}>
        <Text style={[styles.label, { flex: 1, marginTop: 12 }]}>Are you currently on any medications?</Text>
        {['Yes', 'No'].map(opt => (
          <TouchableOpacity
            key={opt}
            style={[
              styles.optionBtnSmall,
              form.onMedication === opt && styles.optionSelected
            ]}
            onPress={() => handleChange('onMedication', opt)}
          >
            <Text
              style={[
                styles.optionText,
                form.onMedication === opt && { color: colors.primary }
              ]}
            >
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Medication Details */}
      <TextInput
        style={styles.input}
        placeholder="Describe"
        value={form.medicationDetails}
        onChangeText={v => handleChange('medicationDetails', v)}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('StepTwo')}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>

      {/* Date Picker */}
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={date}
        mode="date"
        maximumDate={new Date()}
        onConfirm={(selectedDate) => {
          setDatePickerVisible(false);
          setDate(selectedDate);
          const formatted = selectedDate.toLocaleDateString('en-GB');
          handleChange('dob', formatted);
        }}
        onCancel={() => setDatePickerVisible(false)}
      />

      {/* Gender Modal */}
      <Modal isVisible={isGenderModalVisible} onBackdropPress={() => setGenderModalVisible(false)}>
        <View style={styles.modalContent}>
          {['Male', 'Female', 'Other'].map(option => (
            <TouchableOpacity
              key={option}
              style={styles.modalOption}
              onPress={() => {
                handleChange('gender', option);
                setGenderModalVisible(false);
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

export default StepOne;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', padding: moderateScale(20) },
  backButton: {
    backgroundColor: colors.secondary, width: 30, borderRadius: 6,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5, paddingVertical: 6,
  },
  heading: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  subText: { textAlign: 'center', fontSize: 16, color: '#1E1E1E', marginBottom: 20 },
  stepText: { textAlign: 'center', color: colors.primary, fontWeight: '600', marginBottom: 8 },
  progressBar: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  progressDot: { width: 40, height: 4, borderRadius: 2, marginHorizontal: 4 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: colors.primary, marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 13, color: '#111827', marginBottom: 6, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10, padding: 12, marginBottom: 16, fontSize: 13 },
  inputNoPadding: { flex: 1, fontSize: 13, paddingVertical: 10 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  col: { flex: 1, marginRight: 8 },
  inputWithIcon: {
    borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10,
    paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 16
  },
  rightIcon: { marginLeft: 'auto' },
  optionBtnSmall: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginLeft: 8,
  },
  optionSelected: { borderColor: colors.primary },
  optionText: { fontSize: 13, color: '#374151' },
  nextBtn: { backgroundColor: colors.primary, paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  nextText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
  modalOption: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
});