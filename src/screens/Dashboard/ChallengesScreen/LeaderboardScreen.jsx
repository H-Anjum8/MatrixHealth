import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../../utils/colors';
import imagePath from '../../../constant/imagePath';
import CustomButton from '../../../components/CommonComp/CustomButton';

const leaderboardData = [
  {
    rank: '4th',
    name: 'Mark Henry',
    xp: '15431 XP',
    avatar: imagePath.avatar4,
  },
  {
    rank: '5th',
    name: 'Donald Jeffery',
    xp: '15431 XP',
    avatar: imagePath.avatar5,
  },
  { rank: '6th', name: 'Jackson', xp: '15431 XP', avatar: imagePath.avatar6 },
  { rank: '7th', name: 'Herry', xp: '15431 XP', avatar: imagePath.avatar7 },
  { rank: '8th', name: 'Johnson', xp: '15431 XP', avatar: imagePath.avatar8 },
  { rank: '9th', name: 'Smith', xp: '15431 XP', avatar: imagePath.avatar9 },
  { rank: '10th', name: 'Anthony', xp: '15431 XP', avatar: imagePath.avatar10 },
];

const LeaderboardScreen = () => {
  const [selectedRank, setSelectedRank] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedRank === item.rank;
    return (
      <TouchableOpacity onPress={() => setSelectedRank(item.rank)}>
        <View
          style={[
            styles.row,
            isSelected && { backgroundColor: colors.lightPurple },
          ]}
        >
          <Text style={[styles.rank, isSelected && { color: colors.white }]}>
            {item.rank}
          </Text>
          <Image source={item.avatar} style={styles.rowAvatar} />
          <Text style={[styles.rowName, isSelected && { color: colors.white }]}>
            {item.name}
          </Text>
          <Text style={[styles.rowXP, isSelected && { color: colors.white }]}>
            {item.xp}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leaderboard</Text>

      <View style={styles.topThreeContainer}>
        {/* 2nd place */}
        <View style={styles.playerContainer}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircleSmall}>
              <Image
                source={imagePath.avatars2}
                style={styles.faceAvatar}
                resizeMode="cover"
              />
            </View>
            <View style={styles.rankDot}>
              <Text style={styles.rankDotText}>2</Text>
            </View>
          </View>
          <Text style={styles.name}>Jos Butler</Text>
          <Text style={styles.xp}>62521 XP</Text>
        </View>

        {/* 1st place */}
        <View style={styles.playerContainer}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircleLarge}>
              <Image
                source={imagePath.avatars1}
                style={styles.faceAvatar}
                resizeMode="cover"
              />
            </View>
            <Image source={imagePath.crown} style={styles.crown} />
            <View style={styles.rankDot}>
              <Text style={styles.rankDotText}>1</Text>
            </View>
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.xpBig}>64555 XP</Text>
        </View>

        {/* 3rd place */}
        <View style={styles.playerContainer}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircleSmall}>
              <Image
                source={imagePath.avatars3}
                style={styles.faceAvatar}
                resizeMode="cover"
              />
            </View>
            <View style={styles.rankDot}>
              <Text style={styles.rankDotText}>3</Text>
            </View>
          </View>
          <Text style={styles.name}>Dan Cooper</Text>
          <Text style={styles.xp}>59911 XP</Text>
        </View>
      </View>

      <FlatList
        data={leaderboardData}
        keyExtractor={item => item.rank}
        renderItem={renderItem}
      />
    </View>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    padding: moderateScale(16),
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(28),
    padding: 12,
    alignSelf: 'flex-start',
    marginBottom: moderateScale(3),
  },
  heading: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: colors.primary,
    marginBottom: moderateScale(3),
    marginLeft: moderateScale(4),
  },
  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    borderRadius: moderateScale(16),
    padding: moderateScale(20),
    marginBottom: moderateScale(6),
  },
  playerContainer: {
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarCircleSmall: {
    width: moderateScale(81),
    height: moderateScale(81),
    borderRadius: moderateScale(81) / 2,
    backgroundColor: colors.lightPurple,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: moderateScale(2),
    borderColor: colors.primary,
  },
  avatarCircleLarge: {
    width: moderateScale(106),
    height: moderateScale(106),
    borderRadius: moderateScale(106) / 2,
    backgroundColor: colors.lightPurple,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: moderateScale(2),
    borderColor: colors.primary,
  },

  faceAvatar: {
    width: '100%',
    height: '250%',
    position: 'absolute',
    top: '-5%',
  },
  crown: {
    width: moderateScale(40),
    height: moderateScale(36),
    position: 'absolute',
    top: -moderateScale(40),
    alignSelf: 'center',
    zIndex: 1,
  },
  name: {
    fontSize: moderateScale(12),
    color: '#4F4F4F',
    fontWeight: '400',
    marginTop: moderateScale(4),
  },
  xp: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: colors.primary,
  },
  xpBig: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    marginBottom: moderateScale(4),
  },
  rank: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    marginRight: moderateScale(8),
    color: colors.primary,
    width: moderateScale(30),
  },
  rowAvatar: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: 30,
    marginRight: moderateScale(8),
    backgroundColor: colors.lightPurple,
  },
  rowName: {
    flex: 1,
    fontSize: moderateScale(12),
    color: colors.black,
    fontWeight: '500',
  },
  rowXP: {
    fontSize: moderateScale(13.9),
    color: colors.primary,
    fontWeight: '700',
  },
  rankDot: {
    position: 'absolute',
    bottom: -moderateScale(6),
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(25),
    backgroundColor: colors.btnsecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankDotText: {
    color: colors.primary,
    fontSize: moderateScale(12),
    fontWeight: '700',
  },
});
