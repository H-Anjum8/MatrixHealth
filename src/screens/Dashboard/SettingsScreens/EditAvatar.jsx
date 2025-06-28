import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../utils/colors';

const options = {
  bodyTypes: ['Slim', 'Average', 'Curvy', 'Athletic', 'Muscular'],
  skinTones: ['#f5e1d3', '#d2a679', '#b87b50', '#8d5524', '#5c3317'],
  hairStyles: ['Style1', 'Style2', 'Style3', 'Style4', 'Style5'],
  hairColors: ['#000000', '#a0522d', '#ffdbac', '#fff5e1', '#d4af37'],
};

const EditAvatar = () => {
  const navigation = useNavigation();
  const [avatarName, setAvatarName] = useState('Gerald Jeffery');
  const [gender, setGender] = useState('Male');
  const [selectedBody, setSelectedBody] = useState('Slim');
  const [selectedSkin, setSelectedSkin] = useState('#f5e1d3');
  const [selectedHairStyle, setSelectedHairStyle] = useState('Style1');
  const [selectedHairColor, setSelectedHairColor] = useState('#000000');

  const getBodyImage = () =>
    require('../../../assets/images/avatar_parts/Avatar.png');
  const getHairStyleImage = () =>
    require('../../../assets/images/avatar_parts/hairStyle.png');

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={18} color="#6B4EFF" />
      </TouchableOpacity>

      {/* Avatar Name Input */}
      <Text style={styles.label}>Your Avatar Name</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          value={avatarName}
          onChangeText={setAvatarName}
          placeholder="Gerald Jeffery"
          style={styles.input}
        />
        <Ionicons name="pencil-outline" size={16} color="#B0B0B0" />
      </View>

      {/* Gender Toggle */}
      <View style={styles.genderContainer}>
        {['Male', 'Female'].map(g => (
          <TouchableOpacity
            key={g}
            style={[styles.genderButton, gender === g && styles.genderSelected]}
            onPress={() => setGender(g)}
          >
            <Text
              style={
                gender === g ? styles.genderTextSelected : styles.genderText
              }
            >
              {g}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Avatar Preview */}
      <View style={styles.avatarWrapper}>
        <Image source={getBodyImage()} style={styles.avatarImage} />
      </View>

      {/* Body Type */}
      <Text style={styles.sectionTitle}>Choose Body Type</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.optionRow}
      >
        {options.bodyTypes.map(type => (
          <View key={type} style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={[
                styles.optionItem,
                selectedBody === type && styles.optionSelected,
              ]}
              onPress={() => setSelectedBody(type)}
            >
              <Image source={getBodyImage()} style={styles.optionImage} />
            </TouchableOpacity>
            <Text
              style={[
                styles.optionLabel,
                selectedBody === type && styles.optionLabelSelected,
              ]}
            >
              {type}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Skin Tone */}
      <Text style={styles.sectionTitle}>Select Skin Tone</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.optionRow}
      >
        {options.skinTones.map(tone => (
          <TouchableOpacity
            key={tone}
            onPress={() => setSelectedSkin(tone)}
            style={[
              styles.skinToneCircle,
              { backgroundColor: tone },
              selectedSkin === tone && styles.selectedCircleBorder,
            ]}
          />
        ))}
      </ScrollView>

      {/* Hairstyle */}
      <Text style={styles.sectionTitle}>Pick a Hairstyle</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.optionRow}
      >
        {options.hairStyles.map(style => (
          <View key={style} style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={[
                styles.optionItem,
                selectedHairStyle === style && styles.optionSelected,
              ]}
              onPress={() => setSelectedHairStyle(style)}
            >
              <Image source={getHairStyleImage()} style={styles.optionImage} />
            </TouchableOpacity>
            <Text
              style={[
                styles.optionLabel,
                selectedHairStyle === style && styles.optionLabelSelected,
              ]}
            >
              {style}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Hair Color */}
      <Text style={styles.sectionTitle}>Choose Hair Color</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.optionRow}
      >
        {options.hairColors.map(color => (
          <TouchableOpacity
            key={color}
            onPress={() => setSelectedHairColor(color)}
            style={[
              styles.skinToneCircle,
              { backgroundColor: color },
              selectedHairColor === color && styles.selectedCircleBorder,
            ]}
          />
        ))}
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          // Save handler here
          navigation.navigate('FocusWellness');
        }}
      >
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditAvatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    backgroundColor: '#F2EEFB',
    width: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 6,
    marginBottom: 12,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,

    marginBottom: 12,
  },
  genderButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    marginHorizontal: 22,
    alignItems: 'center',
  },
  genderSelected: {
    backgroundColor: 'white',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  genderText: {
    color: '#000',
  },
  genderTextSelected: {
    color: colors.primary,
    fontWeight: '700',
  },
  avatarWrapper: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 12,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 8,
  },
  optionRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  optionItem: {
    alignItems: 'center',
    marginRight: 16,
    padding: 6,
    borderRadius: 80,
  },
  optionSelected: {
    backgroundColor: '#f1e7ff',
    borderWidth: 2,
    borderColor: '#6a0dad',
  },
  optionImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#EAEAEA',
  },
  optionLabel: {
    fontSize: 12,
    color: '#444',
    paddingTop: 2,
  },
  optionLabelSelected: {
    fontWeight: '700',
    color: '#6a0dad',
  },
  skinToneCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCircleBorder: {
    borderWidth: 2,
    borderColor: '#6a0dad',
  },
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 10,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
