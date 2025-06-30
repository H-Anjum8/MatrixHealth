import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SemicircleArc } from '../../components/Dashboard/SemicircleArc';
import colors from '../../utils/colors';
import imagePath from '../../constant/imagePath';

const TaskItem = ({ title, image, isCompleted, onToggle }) => (
  <TouchableOpacity
    style={[
      styles.taskItem,
      {
        backgroundColor: isCompleted ? colors.lightGreen : colors.lightSkyBlue,
      },
    ]}
    onPress={onToggle}
  >
    {' '}
    <View style={{ width: 20, height: 20 }}>
      <Image source={image} style={styles.avatar1} />
    </View>
    <Text
      style={{
        color: isCompleted ? colors.green : colors.darkGreen,
        fontSize: 12,
      }}
    >
      {title}
    </Text>
    <View></View>
    <Icon
      name={isCompleted ? 'checkmark-circle' : 'ellipse-outline'}
      size={22}
      color={isCompleted ? '#59D98E' : '#C4C4C4'}
    />
  </TouchableOpacity>
);

const NavIcon = ({ name, label, active }) => (
  <TouchableOpacity style={styles.navIcon}>
    <Icon name={name} size={24} color={active ? '#7B61FF' : '#C4C4C4'} />
    <Text style={[styles.navLabel, active && { color: '#7B61FF' }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {
      title: 'Drink 8 Glass of Water Today',
      completed: true,
      image: imagePath.water,
    },
    {
      title: 'Try 15 minutes of meditation',
      completed: true,
      image: imagePath.meditation,
    },
    {
      title: 'Complete your Daily exercise plan',
      completed: false,
      image: imagePath.excerciseImg,
    },
  ]);

  const toggleTask = index => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Streak + Snapshot Box */}
      <View style={styles.box}>
        <View style={styles.headerRow}>
          <Text style={styles.streak}>🔥 5 Days Streak</Text>
          <Text style={styles.heading}>Your Health Snapshot</Text>
        </View>
        <View style={styles.snapshotSection}>
          <View style={{ width: 80, height: 140 }}>
            <Image source={imagePath.Avatar} style={styles.avatar} />
          </View>
          <View style={styles.arcsGrid}>
            {[
              { label: 'Sleep', percentage: 80, color: colors.parrot },
              { label: 'Energy', percentage: 35, color: 'red' },
              { label: 'Mood', percentage: 76, color: colors.parrot },
              { label: 'Activity', percentage: 95, color: colors.parrot },
              { label: 'Hydration', percentage: 60, color: '#FF914D' },
            ].map(a => (
              <View key={a.label} style={styles.arcContainer}>
                <SemicircleArc {...a} />
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Upgrade Section */}
      <View style={styles.box1}>
        <View style={styles.upgradeSection}>
          <View style={{ width: 30, height: 20 }}>
            <Image source={imagePath.diamond} style={styles.avatar1} />
          </View>
          <Text style={styles.upgradeText}>
            Unlock premium plans, personalized coaching, and advanced wellness
            tools.
          </Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tasks */}
      <View style={styles.box}>
        <View style={styles.taskHeader}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <Text style={styles.completedText}>
            Completed {completedCount}/{tasks.length}
          </Text>
        </View>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.title}
            title={task.title}
            isCompleted={task.completed}
            image={task.image}
            onToggle={() => toggleTask(index)}
          />
        ))}
      </View>

      {/* Consultation */}
      <View style={styles.box2}>
        <View style={styles.consultSection}>
          <View style={styles.consultconatiner}>
            <Text style={styles.consultText}>
              Need Help?{'\n'}Book a Consultation
            </Text>
            <Text style={styles.consultsubtext}>
              Book a Free 15-Minute Consultation
            </Text>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Consultation</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <TouchableOpacity style={[styles.box, styles.banner]}>
        <Text style={styles.bannerText}>30‑Day Stress Buster Challenge</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f7',
    flexGrow: 1,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  box1: {
    backgroundColor: colors.lightPurple,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  box2: {
    backgroundColor: colors.lightSky,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streak: {
    backgroundColor: colors.orange,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  snapshotSection: {
    flexDirection: 'row',
    marginTop: 12,
  },
  avatar: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginRight: 12,
  },
  avatar1: {
    height: '70%',
    width: '70%',
    resizeMode: 'cover',
    marginRight: 12,
  },
  arcsGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  arcContainer: {
    width: '28%',
    alignItems: 'center',
    marginBottom: 16,
  },
  upgradeSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upgradeText: {
    marginLeft: 6,
    flex: 1,
    color: colors.white,
    fontSize: 7,
  },
  upgradeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginLeft: 12,
  },
  upgradeButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primary,
  },
  completedText: {
    color: colors.lightPurple,
    fontSize: 12,
  },
  taskItem: {
    backgroundColor: colors.lightGreen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: {
    color: colors.green,
    fontSize: 14,
  },
  consultSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  consultconatiner: {
    flexDirection: 'column',
  },
  consultText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primary,
  },
  consultsubtext: {
    fontWeight: 'bold',
    fontSize: 8,
    color: colors.primary,
  },
  bookButton: {
    backgroundColor: '#1D1A7E',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  bookButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 10,
  },
  banner: {
    backgroundColor: '#EFE1FF',
    alignItems: 'center',
    paddingVertical: 20,
  },
  bannerText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 30,
  },
  navIcon: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 10,
    color: '#C4C4C4',
    marginTop: 2,
  },
});
