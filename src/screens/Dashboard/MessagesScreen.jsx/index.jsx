import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';

import imagePath from '../../../constant/imagePath';
import colors from '../../../utils/colors';
import ChatItem from '../../../components/Dashboard/ChatItem';

const chatsData = [
  {
    id: '1',
    name: 'John Deo',
    message: 'Hello Jonas',
    time: 'Now',
    unread: true,
    avatar: imagePath.profile1,
  },
  {
    id: '2',
    name: 'Angela',
    message: 'Hello Jonas',
    time: 'Now',
    unread: false,
    avatar: imagePath.profile2,
  },
  {
    id: '3',
    name: 'Nicole',
    message: 'Lorem ipsum...',
    time: '01:04 pm',
    unread: true,
    avatar: imagePath.profile3,
  },
  {
    id: '4',
    name: 'John Styles',
    message: 'Lorem ipsum...',
    time: '02:54 pm',
    unread: false,
    avatar: imagePath.profile4,
  },
  {
    id: '5',
    name: 'Saul White',
    message: 'Lorem ipsum...',
    time: '06:25 am',
    unread: false,
    avatar: imagePath.profile5,
  },
  {
    id: '6',
    name: 'Michelle Turcotte',
    message: 'Lorem ipsum...',
    time: 'Yesterday',
    unread: false,
    avatar: imagePath.profile6,
  },
  {
    id: '7',
    name: 'Jane Deo',
    message: 'Lorem ipsum...',
    time: 'Yesterday',
    unread: true,
    avatar: imagePath.profile7,
  },
  {
    id: '8',
    name: 'Harry Cane',
    message: 'Lorem ipsum...',
    time: 'Yesterday',
    unread: false,
    avatar: imagePath.profile8,
  },
  {
    id: '9',
    name: 'Harry Cane',
    message: 'Lorem ipsum...',
    time: 'Yesterday',
    unread: false,
    avatar: imagePath.profile9,
  },
];

const MessagesScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filteredChats = chatsData.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <ChatItem
      item={item}
      onPress={() => navigation.navigate('ChatScreen', { chat: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      {/* <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={moderateScale(24)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Messages</Text>
        <View style={{ width: 24 }} />
      </View> */}

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={{ marginLeft: 8 }}
        />
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 8,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 0,
  },
});

export default MessagesScreen;
