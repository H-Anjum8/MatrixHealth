import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imagePath from '../../../constant/imagePath';
import colors from '../../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const BookConsultation = () => {
  const [selectedDate, setSelectedDate] = useState(3);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const navigation = useNavigation();
  const bookedDates = [
    1, 2, 5, 6, 7, 8, 11, 12, 13, 14, 16, 17, 20, 22, 23, 24, 26, 28, 30,
  ]; // 🔹 Add your booked dates here
  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const year = 2024;
  const month = 11; // December (0-indexed)
  const totalDays = 31;
  const startDay = new Date(year, month, 1).getDay(); // 0 = Sunday

  const fullCalendar = [];
  const paddedStart = Array(startDay).fill(null);
  const allDays = Array.from({ length: totalDays }, (_, i) => i + 1);
  const paddedEndCount = (7 - ((startDay + totalDays) % 7)) % 7;
  const paddedEnd = Array(paddedEndCount).fill(null);
  const fullGrid = [...paddedStart, ...allDays, ...paddedEnd];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={18} color={colors.primary} />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Book Your{'\n'}Consultation</Text>
      <Text style={styles.subtitle}>
        Schedule your consultation with one of our experts and take the first
        step toward better health.
      </Text>

      {/* Coach Info */}
      <View style={styles.card}>
        <Image
          source={imagePath.clientavatar}
          style={styles.clientavatar}
          resizeMode="contain"
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.coachName}>
            James Henry{' '}
            <Text style={styles.coachRole}>Certified Wellness Coach</Text>
          </Text>
          <Text style={styles.coachCert}>
            Certified in Stress Management & Lifestyle Planning
          </Text>
          <Text style={styles.coachNote}>
            This 15-minute session helps tailor your wellness plan.
          </Text>
        </View>
      </View>

      {/* Calendar */}
      <Text style={styles.sectionTitle}>Select a Date</Text>
      <View style={styles.calendarContainer}>
        <Text style={styles.monthHeading}>December , 2024</Text>

        <View style={styles.weekRow}>
          {days.map(day => (
            <Text key={day} style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>

        <View style={styles.dateGrid}>
          {fullGrid.map((day, index) => (
            <View key={index} style={styles.dateWrapper}>
              {day ? (
                <TouchableOpacity
                  style={[
                    styles.dateCircle,
                    selectedDate === day && styles.dateSelected,
                  ]}
                  onPress={() => setSelectedDate(day)}
                >
                  <Text
                    style={[
                      styles.dateText,
                      bookedDates.includes(day) && styles.dateTextBooked,
                      selectedDate === day && styles.dateTextSelected,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.dateCircle} />
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Time Picker */}
      <Text style={styles.sectionTitle}>Select Time</Text>
      <View style={styles.timeRow}>
        {timeSlots.map(time => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeSlot,
              selectedTime === time && styles.timeSlotSelected,
            ]}
            onPress={() => setSelectedTime(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Note */}
      <Text style={styles.zoomNote}>
        Your Zoom link will be emailed to you on the day of your consultation.
      </Text>

      {/* Book Button */}
      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookConsultation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#EDE9FE',
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 15,
    color: '#333',
    marginBottom: 18,
  },
  card: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  clientavatar: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 30,
    backgroundColor: '#6B4EFF',
  },
  coachName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  coachRole: {
    fontSize: 12,
    color: '#2C1478',
    fontWeight: '400',
  },
  coachCert: {
    fontSize: 12,
    color: '#9C75CC',
    marginTop: 4,
  },
  coachNote: {
    fontSize: 9,
    color: '#6B7280',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 15,
    color: '#111827',
  },
  calendarContainer: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  monthHeading: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    color: '#111827',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },
  weekDay: {
    width: 40,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  dateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dateWrapper: {
    width: 40,
    height: 25,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateCircle: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateSelected: {
    backgroundColor: '#6B4EFF',
  },
  dateText: {
    fontSize: 13,
    color: '#000',
  },
  dateTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  dateTextBooked: {
    fontWeight: '700',
    color: '#000',
  },
  timeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  timeSlotSelected: {
    borderColor: '#6B4EFF',
  },
  timeText: {
    color: '#1E1E1E',
    fontSize: 12,
  },
  timeTextSelected: {
    color: '#6B4EFF',
    fontWeight: '600',
  },
  zoomNote: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 22,
  },
  bookBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  bookText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
