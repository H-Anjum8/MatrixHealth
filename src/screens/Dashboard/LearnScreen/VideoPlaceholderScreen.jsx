import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import imagePath from '../../../constant/imagePath';

const VideoPlaceholderScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <View style={styles.topIcons}>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.topRightIcons}>
          <MaterialIcons
            name="cast"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Ionicons name="volume-high-outline" size={24} color="#fff" />
        </View>
      </View>

      {/* Image Placeholder */}
      <Image
        source={imagePath.excercise}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Play/Pause & Skip Buttons */}
      <View style={styles.centerControls}>
        <TouchableOpacity>
          <Ionicons name="play-back" size={36} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="pause-circle"
            size={60}
            color="#fff"
            style={styles.pause}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-forward" size={36} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressTime}>
          <Ionicons name="ellipse" size={6} color="#fff" />
          <View style={styles.trackLine} />
          <Ionicons name="ellipse-outline" size={6} color="#fff" />
        </View>
        <View style={styles.timeLabels}>
          <Ionicons name="time-outline" size={14} color="#ccc" />
          <Ionicons name="time-outline" size={14} color="#ccc" />
        </View>
      </View>
    </View>
  );
};

export default VideoPlaceholderScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: 650,
    alignSelf: 'center',
  },
  topIcons: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topRightIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  centerControls: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pause: {
    marginHorizontal: 16,
  },
  progressBar: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  progressTime: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  trackLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
