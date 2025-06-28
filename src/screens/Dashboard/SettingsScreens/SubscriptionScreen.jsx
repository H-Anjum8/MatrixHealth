import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const tiers = [
  { id: 'free', label: 'Free Tier', price: '' },
  { id: 'silver', label: 'Silver Tier', price: '$9.99/month' },
  { id: 'gold', label: 'Gold Tier', price: '$19.99/month' },
];

const features = [
  'Personalized Health Matrix',
  'Daily Wellness Tasks',
  'Join Basic Challenges',
  'Avatar Customization (Basic)',
  'Earn XP & Unlock Badges',
  'Personalized Health Matrix',
  'Personalized Health Matrix',
];

const SubscriptionScreen = ({ navigation }) => {
  const [selectedTier, setSelectedTier] = useState('free');

  const renderTierOption = item => {
    const isSelected = selectedTier === item.id;
    return (
      <TouchableOpacity
        onPress={() => setSelectedTier(item.id)}
        style={[styles.tierOption, isSelected && styles.tierOptionSelected]}
      >
        <View style={styles.tierContent}>
          <View style={styles.radioContainer}>
            {isSelected ? (
              <View style={styles.radioSelected}>
                <Icon name="checkmark" size={12} color="#fff" />
              </View>
            ) : (
              <View style={styles.radioUnselected} />
            )}
            <Text style={styles.tierLabel}>{item.label}</Text>
          </View>
          {item.price !== '' && (
            <Text style={styles.priceText}>{item.price}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
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

      {/* Tier Selection */}
      <View style={styles.tierContainer}>
        {tiers.map(tier => (
          <View key={tier.id}>{renderTierOption(tier)}</View>
        ))}
      </View>

      {/* What's Included */}
      <Text style={styles.featuresTitle}>What's Included</Text>
      <FlatList
        data={features}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.featureItem}>
            <Icon name="checkmark-outline" size={16} color="#000" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SubscriptionScreen;

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
  tierContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  tierOption: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 8,
    marginVertical: 4,
  },
  tierOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  tierContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioUnselected: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#aaa',
    marginRight: 8,
  },
  radioSelected: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#3a0091',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  tierLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  priceText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#3a0091',
  },
  featuresTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: '#222',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#000',
  },
});
