import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../utils/colors';

const DataDownloadScreen = ({ navigation }) => {
  const handleDownload = () => {
    Alert.alert('Download Started', 'Your health data PDF is downloading...');
    // Implement actual download logic here
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back" size={20} color="#6a0dad" />
      </TouchableOpacity>

      {/* Download Row */}
      <TouchableOpacity style={styles.downloadCard} onPress={handleDownload}>
        <View style={styles.cardContent}>
          <MaterialIcon name="file-pdf-box" size={28} color="#e53935" />
          <Text style={styles.label}>Your Health Data</Text>
        </View>
        <View style={styles.downloadIconContainer}>
          <Icon name="arrow-down-circle" size={20} color="#3a0091" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DataDownloadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  downloadCard: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  downloadIconContainer: {
    padding: 4,
    borderRadius: 4,
  },
});
