import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import imagePath from '../../../constant/imagePath';
import colors from '../../../utils/colors';
import { useRoute } from '@react-navigation/native';

const initialMessages = [
  { id: '1', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '2',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
  { id: '3', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '4',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
  { id: '5', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '6',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
  { id: '7', type: 'sent', text: 'Lorem ipsum dolor sit amet consectetur.' },
  {
    id: '8',
    type: 'received',
    text: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const ChatScreen = ({ navigation }) => {
  const route = useRoute();
  const { chat } = route.params; // destructure chat from route

  const [input, setInput] = useState('');
  const [chatMessages, setChatMessages] = useState(initialMessages);

  const renderMessage = ({ item }) => {
    const isSent = item.type === 'sent';
    return (
      <View
        style={[
          styles.messageRow,
          { justifyContent: isSent ? 'flex-end' : 'flex-start' },
        ]}
      >
        {!isSent && <Image source={chat.avatar} style={styles.avatar} />}
        <View
          style={[
            styles.messageBubble,
            {
              backgroundColor: isSent ? '#3E0091' : '#F2F2F2',
              borderTopLeftRadius: isSent ? 12 : 0,
              borderTopRightRadius: isSent ? 0 : 12,
            },
          ]}
        >
          <Text
            style={[styles.messageText, { color: isSent ? '#fff' : '#000' }]}
          >
            {item.text}
          </Text>
        </View>
        {isSent && <Image source={imagePath.profile9} style={styles.avatar} />}
      </View>
    );
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: String(chatMessages.length + 1),
        type: 'sent',
        text: input,
      };
      setChatMessages([...chatMessages, newMessage]);
      setInput('');
    } else {
      Alert.alert('Error', 'Message cannot be empty');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.profileInfo}>
          <Image source={chat.avatar} style={styles.profileImage} />

          <View>
            <Text style={styles.profileName}>{chat.name}</Text>
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.menu}
          onPress={() => Alert.alert('Menu', 'Menu button pressed')}
        >
          <Ionicons name="ellipsis-vertical" size={22} color={colors.white} />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={chatMessages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity
          onPress={() => Alert.alert('Plus', 'Plus button pressed')}
        >
          <Ionicons name="add" size={28} color="#fff" style={styles.plusIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message here..."
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color="#3E0091" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  menu: {
    backgroundColor: colors.primary,
    width: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  backButton: {
    backgroundColor: colors.secondary,
    width: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  profileName: {
    fontWeight: '600',
    fontSize: 16,
  },
  onlineText: {
    fontSize: 12,
    color: 'red',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 12,
  },
  messageText: {
    fontSize: 14,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 6,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
  textInput: {
    flex: 1,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    fontSize: 14,
  },
  plusIcon: {
    backgroundColor: '#3E0091',
    padding: 4,
    borderRadius: 8,
  },
});

export default ChatScreen;
