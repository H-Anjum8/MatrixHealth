import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';
import imagePath from '../../../constant/imagePath';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const recommendedResources = [
  {
    id: '1',
    title: '5-Minute Breathing Exercise for Stress Relief',
    tag: 'Stress',
    isVideo: true,
    image: imagePath.excercise,
    action: 'Watch Now',
  },
  {
    id: '2',
    title: 'How Sleep Impacts Mood and Energy',
    tag: 'Sleep',
    isVideo: false,
    image: imagePath.sleepmood,
    action: 'Start Reading',
  },
];

const wellnessTopics = [
  { label: '😌 Stress' },
  { label: '🛌 Sleep' },
  { label: '⚡ Energy' },
  { label: '🧘 Mindfulness' },
  { label: '💧 Hydration' },
  { label: '🥗 Nutrition' },
  { label: '🧠 Mood' },
  { label: '📚 All' },
];

const LearnScreen = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        {/* <View style={styles.topBar}>
          <Ionicons name="menu" size={24} color={colors.primary} />
          <View>
            <Ionicons name="notifications" size={22} color={colors.primary} />
            <View style={styles.notificationDot} />
          </View>
        </View> */}

        {/* Heading */}
        <Text style={styles.heading}>Explore Wellness Resources</Text>
        <Text style={styles.subheading}>
          Curated articles, videos, recipes, and tips based on your health
          goals.
        </Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <Ionicons name="search" size={16} color={colors.primary} />
        </View>

        {/* Recommended Resources in White Container */}
        <View style={styles.whiteBox}>
          <Text style={styles.sectionTitle}>Recommended Resources</Text>
          <View style={styles.recommendContainer}>
            {recommendedResources.map(item => (
              <View key={item.id} style={styles.resourceCardHalf}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.resourceImageHalf} />
                  {item.isVideo && (
                    <Ionicons
                      name="play-circle"
                      size={28}
                      color="#fff"
                      style={styles.playIcon}
                    />
                  )}
                </View>
                <Text style={styles.resourceTitle}>{item.title}</Text>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{item.tag}</Text>
                </View>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() =>
                    item.isVideo
                      ? Navigation.navigate('VideoPlaceholderScreen')
                      : Navigation.navigate('ArticleDetailScreen')
                  }
                >
                  <Text style={styles.actionText}>{item.action}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Wellness Topics */}
        <View style={styles.whiteBox}>
          <Text style={styles.sectionTitle}>Browse by Wellness Topic</Text>
          <View style={styles.topicGrid}>
            {wellnessTopics.map(topic => (
              <TouchableOpacity key={topic.label} style={styles.topicPill}>
                <Text style={styles.topicText}>{topic.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F0FB',
  },
  container: {
    padding: 16,
    paddingBottom: 50,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  notificationDot: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    position: 'absolute',
    top: -2,
    right: -2,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 15,
    color: '#333',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  searchInput: {
    fontSize: 14,
    flex: 1,
    color: '#000',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 12,
  },
  whiteBox: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },

  recommendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 4,
  },
  resourceCardHalf: {
    backgroundColor: '#fff',
    width: (width - 64) / 2,
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  resourceImageHalf: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  playIcon: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
  resourceTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
    color: '#000',
  },
  tag: {
    backgroundColor: colors.secondary,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginTop: 6,
  },
  tagText: {
    fontSize: 10,
    color: colors.link,
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: colors.primary,
    marginTop: 10,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  topicGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  topicPill: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
  },
  topicText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
  },
});
