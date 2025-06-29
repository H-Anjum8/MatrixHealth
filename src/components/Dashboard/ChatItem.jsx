import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';

const ChatItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={item.avatar} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>

      {/* Message + dot row */}
      <View style={styles.messageRow}>
        <Text
          style={[styles.message, item.unread && { color: colors.primary }]}
          numberOfLines={1}
        >
          {item.message}
        </Text>
        <Text style={styles.dotalign}>
          {item.unread && <View style={styles.dot} />}
        </Text>
      </View>
    </View>

    <Text style={styles.time}>{item.time}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderColor: '#E0E0E0',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 4,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    marginRight: -20,
  },
  message: {
    color: '#777',
    fontSize: 13,
    flex: 1,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.sky,
    marginRight: 20,
  },
  time: {
    color: '#777',
    fontSize: 12,
  },
});

export default ChatItem;
