import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors'; // Make sure this exists or replace with raw colors
import { useNavigation } from '@react-navigation/native';

export const NotificationScreen = () => {
  const navigation = useNavigation();

  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={18} color="#000" />
      </TouchableOpacity>

      {/* Toggle Rows */}
      <View style={styles.row}>
        <Text style={styles.label}>Lorem ipsum dolor</Text>
        <Switch
          value={toggle1}
          onValueChange={setToggle1}
          trackColor={{ false: '#ccc', true: colors.primary }}
          thumbColor={toggle1 ? '#fff' : '#fff'}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Lorem ipsum dolor</Text>
        <Switch
          value={toggle2}
          onValueChange={setToggle2}
          trackColor={{ false: '#ccc', true: colors.primary }}
          thumbColor={toggle2 ? '#fff' : '#fff'}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Lorem ipsum dolor</Text>
        <Switch
          value={toggle3}
          onValueChange={setToggle3}
          trackColor={{ false: '#ccc', true: colors.primary }}
          thumbColor={toggle3 ? '#fff' : '#fff'}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Lorem ipsum dolor</Text>
        <Switch
          value={toggle4}
          onValueChange={setToggle4}
          trackColor={{ false: '#ccc', true: colors.primary }}
          thumbColor={toggle4 ? '#fff' : '#fff'}
        />
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 14,
    color: '#000',
  },
});
