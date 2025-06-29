import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imagePath from '../../../constant/imagePath';
import colors from '../../../utils/colors';

const { width } = Dimensions.get('window');
const CONTAINER_PADDING = 16;
const CARD_GAP = 16;
const CARD_WIDTH = (width - CONTAINER_PADDING * 2 - CARD_GAP) / 2;

const data = [
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
  {
    id: '3',
    title: '5-Minute Breathing Exercise for Stress Relief',
    tag: 'Stress',
    isVideo: true,
    image: imagePath.excercise,
    action: 'Watch Now',
  },
  {
    id: '4',
    title: 'How Sleep Impacts Mood and Energy',
    tag: 'Sleep',
    isVideo: false,
    image: imagePath.sleepmood,
    action: 'Start Reading',
  },
  {
    id: '5',
    title: '5-Minute Breathing Exercise for Stress Relief',
    tag: 'Stress',
    isVideo: true,
    image: imagePath.excercise,
    action: 'Watch Now',
  },
  {
    id: '6',
    title: 'How Sleep Impacts Mood and Energy',
    tag: 'Sleep',
    isVideo: false,
    image: imagePath.sleepmood,
    action: 'Start Reading',
  },
];

const StressLibraryScreen = ({ navigation }) => {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View>
          <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.cardImage} />
            {item.isVideo && (
              <Ionicons
                name="play-circle"
                size={32}
                color="#fff"
                style={styles.playIcon}
              />
            )}
          </View>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.tag}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{item.action}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={20} color="#5e2ca5" />
      </TouchableOpacity>

      <View style={styles.innerContainer}>
        <Text style={styles.headerTitle}>Stress</Text>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={renderCard}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default StressLibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0FB',
    padding: CONTAINER_PADDING,
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.primary,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    width: CARD_WIDTH,
    height: 240, // ✅ Fixed height for all cards
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between', // ✅ Ensures button sticks to bottom
  },
  imageWrapper: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  playIcon: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
    color: '#000',
  },
  tag: {
    backgroundColor: '#E5DBF9',
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 2,
    borderRadius: 8,
    marginTop: 6,
  },
  tagText: {
    fontSize: 10,
    color: '#6C2BB9',
    fontWeight: '600',
  },
  button: {
    backgroundColor: colors.primary,
    marginTop: 10,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
