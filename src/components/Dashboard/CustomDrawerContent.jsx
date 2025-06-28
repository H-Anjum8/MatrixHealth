import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imagePath from '../../constant/imagePath';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawerContent() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image source={imagePath.user} style={styles.avatar} />
        <Text style={styles.name}>Donald Jeffery</Text>
        <Text style={styles.email}>donaldjeffery123@gmail.com</Text>
        {/* Menu Items */}
        <View style={styles.menuSection}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => Navigation.navigate('BookConsultation')}
          >
            <Ionicons
              name="calendar-outline"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Book Consultation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => Navigation.navigate('ClientAppointments')}
          >
            <Ionicons
              name="clipboard-outline"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.menuText}>My Appointments</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logout}
        onPress={() => Navigation.navigate('Home')}
      >
        <Ionicons
          name="log-out-outline"
          size={20}
          color="#000"
          style={styles.icon}
        />
        <Text style={[styles.menuText, { color: '#000' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  profileSection: {
    marginTop: 16,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
  },
  email: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  menuSection: {
    marginTop: 32,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  icon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    color: '#222',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 32,
  },
});
