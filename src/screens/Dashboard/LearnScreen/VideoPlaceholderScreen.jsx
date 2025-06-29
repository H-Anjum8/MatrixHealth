import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import imagePath from '../../../constant/imagePath';

const { width } = Dimensions.get('window');

const dummyData = [
  {
    id: '1',
    title: '5-Minute Breathing Exercise for Stress Relief',
    tag: 'Stress',
    image: imagePath.excercise,
    action: 'Watch Now',
  },
  {
    id: '2',
    title: 'How Sleep Impacts Mood and Energy',
    tag: 'Sleep',
    image: imagePath.sleepmood,
    action: 'Start Reading',
  },
  {
    id: '3',
    title: '5-Minute Breathing Exercise for Stress Relief',
    tag: 'Stress',
    image: imagePath.excercise,
    action: 'Watch Now',
  },
  {
    id: '4',
    title: 'How Sleep Impacts Mood and Energy',
    tag: 'Sleep',
    image: imagePath.sleepmood,
    action: 'Start Reading',
  },
];

const Card = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title} numberOfLines={2}>
      {item.title}
    </Text>
    <View style={styles.tagContainer}>
      <Text style={styles.tag}>{item.tag}</Text>
    </View>
    <View style={{ flex: 1 }} />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{item.action}</Text>
    </TouchableOpacity>
  </View>
);

const StressLibraryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default StressLibraryScreen;

const CARD_WIDTH = (width - 48) / 2; // 16 + 16 + 16 spacing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    minHeight: 260,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  tagContainer: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  tag: {
    fontSize: 10,
    color: '#4F46E5',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
