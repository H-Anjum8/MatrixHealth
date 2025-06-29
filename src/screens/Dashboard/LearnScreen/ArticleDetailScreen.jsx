import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../../../constant/imagePath';
import colors from '../../../utils/colors';

const ArticleDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Article Image */}
      <Image source={imagePath.sleepmood} style={styles.headerImage} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons name="chevron-back" size={20} color={colors.primary} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          {/* Title */}
          <Text style={styles.title}>
            How Sleep Impacts Mood{'\n'}and Energy
          </Text>

          {/* Meta Info */}
          <View style={styles.metaRow}>
            <Text style={styles.date}>May 25, 2025</Text>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Sleep</Text>
            </View>
          </View>

          {/* Content */}
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet consectetur. Semper id felis in
            pellentesque sed lacus at nisi a pharetra donec. Tortor dolor amet
            gravida at nulla neque nunc ut. Utma volutpat facilisis quis
            pharetra ut augue diam tincidunt.
          </Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet consectetur. Semper id felis in
            pellentesque sed lacus at nisi a pharetra donec. Tortor dolor amet
            gravida at nulla neque nunc ut.
          </Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet consectetur. Tortor dolor amet gravida at
            nulla neque nunc ut. Augue sagittis nunc commodo convallis nulla
            semper.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerImage: {
    width: '100%',
    height: moderateScale(240),
    resizeMode: 'cover',
  },
  backBtn: {
    position: 'absolute',
    top: moderateScale(40),
    left: moderateScale(16),
    backgroundColor: colors.secondary,
    padding: 8,
  },
  contentContainer: {
    paddingHorizontal: moderateScale(16),
    paddingBottom: 40,
    marginTop: -moderateScale(5),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: moderateScale(20),
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: moderateScale(18),
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  date: {
    fontSize: moderateScale(12),
    color: '#6B7280',
    marginRight: 10,
  },
  tag: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  tagText: {
    fontSize: moderateScale(12),
    color: '#4F46E5',
    fontWeight: '600',
  },
  body: {
    fontSize: moderateScale(13),
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
});
