import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.streak}>🔥 5 Days Streak</Text>
        <Text style={styles.heading}>Your Health Snapshot</Text>

        <View style={styles.snapshotContainer}>
          {/* Replace with avatar later */}
          <View style={styles.avatar} />
          <View style={styles.snapshotData}>
            <View style={styles.snapshotRow}>
              <SnapshotItem label="Sleep" value="80%" color="#59D98E" />
              <SnapshotItem label="Energy" value="35%" color="#FF6D6D" />
            </View>
            <View style={styles.snapshotRow}>
              <SnapshotItem label="Mood" value="76%" color="#7B61FF" />
              <SnapshotItem label="Activity" value="95%" color="#56D0F7" />
            </View>
          </View>
        </View>
      </View>

      {/* Upgrade Section */}
      <View style={styles.upgradeSection}>
        <Text style={styles.upgradeText}>
          Unlock premium plans, personalized coaching & advanced wellness tools.
        </Text>
        <TouchableOpacity style={styles.upgradeButton}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>

      {/* Today's Tasks */}
      <View style={styles.taskSection}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <TaskItem title="Drink 8 Glass of Water Today" completed />
        <TaskItem title="Try 15 minutes of meditation" completed />
        <TaskItem title="Complete your Daily exercise plan" />
      </View>

      {/* Book Consultation */}
      <View style={styles.consultSection}>
        <Text style={styles.consultText}>
          Need Help?{'\n'}Book a Consultation
        </Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Consultation</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="home" size={24} color="#7B61FF" />
        <Icon name="trophy" size={24} color="#C4C4C4" />
        <Icon name="chatbubble-ellipses" size={24} color="#C4C4C4" />
        <Icon name="person" size={24} color="#C4C4C4" />
        <Icon name="settings" size={24} color="#C4C4C4" />
      </View>

      {/* Bottom Banner */}
      <TouchableOpacity style={styles.banner}>
        <Text style={styles.bannerText}>30-Day Stress Buster Challenge</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const SnapshotItem = ({ label, value, color }) => (
  <View style={[styles.snapshotItem, { borderColor: color }]}>
    <Text style={styles.snapshotValue}>{value}</Text>
    <Text style={styles.snapshotLabel}>{label}</Text>
  </View>
);

const TaskItem = ({ title, completed }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{title}</Text>
    {completed && <Icon name="checkmark-circle" size={24} color="#59D98E" />}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7FA', padding: 16 },
  header: { marginBottom: 20 },
  streak: { color: '#FF914D', fontWeight: 'bold', marginBottom: 5 },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  snapshotContainer: { flexDirection: 'row', marginTop: 10 },
  avatar: { width: 80, height: 80, backgroundColor: '#CCC', borderRadius: 40 },
  snapshotData: { flex: 1, marginLeft: 10 },
  snapshotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  snapshotItem: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '48%',
    alignItems: 'center',
  },
  snapshotValue: { fontWeight: 'bold', fontSize: 16 },
  snapshotLabel: { color: '#666' },
  upgradeSection: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upgradeText: { flex: 1, color: '#333' },
  upgradeButton: {
    backgroundColor: '#7B61FF',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  upgradeButtonText: { color: '#FFF' },
  taskSection: { marginBottom: 20 },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  taskItem: {
    backgroundColor: '#E9F6F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: { color: '#333', fontWeight: '500' },
  consultSection: {
    backgroundColor: '#D8F3FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  consultText: { fontWeight: 'bold', fontSize: 14, color: '#000' },
  bookButton: {
    backgroundColor: '#1D1A7E',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  bookButtonText: { color: '#FFF', fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    backgroundColor: '#FFF',
    borderRadius: 14,
    marginTop: 10,
  },
  banner: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#EFE1FF',
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerText: { color: '#7B61FF', fontWeight: 'bold' },
});

export default Dashboard;
