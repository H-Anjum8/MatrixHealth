import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';
import imagePath from '../../../constant/imagePath';

const ClientAppointments = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Ongoing');

  const renderTab = label => (
    <TouchableOpacity
      key={label}
      style={[styles.tabItem, activeTab === label && styles.activeTabItem]}
      onPress={() => setActiveTab(label)}
    >
      <Text
        style={[styles.tabText, activeTab === label && styles.activeTabText]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  const handleCancel = () =>
    Alert.alert(
      'Appointment Cancelled',
      'Your appointment has been cancelled.',
    );

  const handleReschedule = () =>
    Alert.alert('Reschedule', 'You can now reschedule your appointment.');

  const handleChat = () => Alert.alert('Chat', 'Open chat with the coach.');

  const renderAppointmentCard = (
    name,
    dateTime,
    actionText,
    onPressAction,
    showChatIcon = false,
  ) => (
    <View style={styles.card} key={dateTime}>
      <View style={styles.cardTop}>
        <Image source={imagePath.clientavatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{dateTime}</Text>
        </View>
        {showChatIcon && (
          <TouchableOpacity onPress={handleChat}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.cancelBtn} onPress={onPressAction}>
        <Text style={styles.cancelText}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={20} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.heading}>Appointments</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Ongoing', 'Completed', 'Cancelled'].map(renderTab)}
      </View>

      {/* Ongoing Tab */}
      {activeTab === 'Ongoing' && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {renderAppointmentCard(
            'James Henry',
            'Dec 05, 2025 | 12:00 PM',
            'Cancel Appointment',
            handleCancel,
          )}
        </ScrollView>
      )}

      {/* Completed Tab */}
      {activeTab === 'Completed' && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {[1, 2, 3, 4].map((item, index) =>
            renderAppointmentCard(
              'James Henry',
              `Dec 05, 2025 | 12:00 PM`,
              'Reschedule',
              handleReschedule,
              true,
            ),
          )}
        </ScrollView>
      )}

      {/* Cancelled Tab */}
      {activeTab === 'Cancelled' && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {renderAppointmentCard(
            'Olivia Smith',
            'Nov 22, 2025 | 03:00 PM',
            'Book Again',
            handleReschedule,
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ClientAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginLeft: moderateScale(60),
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(20),
  },
  tabItem: {
    paddingBottom: moderateScale(4),
    flex: 1,
    alignItems: 'center',
  },
  activeTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: moderateScale(14),
    color: '#6B7280',
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: '600',
  },
  contentContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#F3F4F6',
    padding: moderateScale(18),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(14),
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(14),
  },
  avatar: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    marginRight: moderateScale(10),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    marginBottom: moderateScale(4),
  },
  date: {
    fontSize: moderateScale(12),
    color: '#6B7280',
  },
  cancelBtn: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  cancelText: {
    color: colors.white,
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
});
