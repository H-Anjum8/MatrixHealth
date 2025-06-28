import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

import imagePath from '../../../constant/imagePath';
import colors from '../../../utils/colors';

const SettingsScreen = ({ navigation }) => {
  const menuItems = [
    {
      title: 'Personal Information',
      icon: 'person-outline',
      screen: 'UpdateProfileScreen',
    },
    { title: 'Edit Avatar', icon: 'image-outline', screen: 'EditAvatar' },
    {
      title: 'Notification Setting',
      icon: 'notifications-outline',
      screen: 'NotificationScreen',
    },
    {
      title: 'Subscription Plan',
      icon: 'card-outline',
      screen: 'SubscriptionScreen',
    },
    {
      title: 'Download Health Data',
      icon: 'cloud-download-outline',
      screen: 'DataDownloadScreen',
    },
    {
      title: 'Change Password',
      icon: 'lock-closed-outline',
      screen: 'ChangePasswordScreen',
    },
    {
      title: 'Privacy Policy',
      icon: 'shield-checkmark-outline',
      screen: 'PrivacyPolicy',
    },
    {
      title: 'Term & Conditions',
      icon: 'document-text-outline',
      screen: 'TermsScreen',
    },
    { title: 'Logout', icon: 'log-out-outline', screen: 'Logout' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={moderateScale(24)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.heading}>Settings</Text>
      </View>

      {/* Avatar */}
      <Image
        source={imagePath.user}
        style={styles.avatar}
        resizeMode="contain"
      />

      <Text style={styles.name}>Mark Henry</Text>
      <Text style={styles.label}>Avatar</Text>

      {/* Profile Setting Button */}
      <TouchableOpacity
        style={styles.profileSetting}
        onPress={() => navigation.navigate('EditProfileScreen')}
      >
        <Text style={styles.profileText}>Profile Setting</Text>
      </TouchableOpacity>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.menuLeft}>
              <Ionicons
                name={item.icon}
                size={moderateScale(20)}
                color="#1E1E1E"
              />
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={moderateScale(20)}
              color="#6B7280"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Delete Account Button */}
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => console.log('Delete Account pressed')}
      >
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: moderateScale(20),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(30),
    position: 'relative',
  },

  heading: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },

  avatar: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    borderColor: colors.primary,
    alignSelf: 'center',
    marginBottom: moderateScale(12),
  },
  name: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  label: {
    fontSize: moderateScale(12),
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: moderateScale(20),
  },
  profileSetting: {
    backgroundColor: colors.primary,
    padding: moderateScale(10),
    borderRadius: moderateScale(6),
    marginBottom: moderateScale(20),
  },
  profileText: {
    color: '#fff',
    fontSize: moderateScale(14),
    fontWeight: '600',
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(6),
    marginBottom: moderateScale(20),
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(12),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10),
  },
  deleteBtn: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  deleteText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
