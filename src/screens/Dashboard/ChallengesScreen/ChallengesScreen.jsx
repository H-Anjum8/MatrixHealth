import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../../utils/colors';
import imagePath from '../../../constant/imagePath';

import CustomButton from '../../../components/CommonComp/CustomButton';

const screenWidth = Dimensions.get('window').width;

const challengeData = [
  {
    id: 1,
    title: 'Hydration Hero',
    icon: imagePath.drop,
    reward: '500 XP\n🏅 Aqua Ace',
    duration: '7 days',
    tier: 'Free',
    buttonText: 'Join Now',
    buttonColor: '#3C0F99',
    locked: false,
  },
  {
    id: 2,
    title: 'Mood Lift',
    icon: imagePath.mood,
    reward: '500 XP\n🏅 Mood Master',
    duration: '7 days',
    tier: 'Gold Tier',
    buttonText: 'Upgrade to Unlock',
    buttonColor: '#F5A623',
    locked: true,
  },
  {
    id: 3,
    title: 'Fitness Starter',
    icon: imagePath.fitness,
    reward: '700 XP\n🏅 Fit Pro',
    duration: '5 days',
    tier: 'Free',
    buttonText: 'Join Now',
    buttonColor: '#3C0F99',
    locked: false,
  },
  {
    id: 4,
    title: 'Sleep Better',
    icon: imagePath.sleep,
    reward: '600 XP\n🏅 Dream Catcher',
    duration: '10 days',
    tier: 'Gold Tier',
    buttonText: 'Upgrade to Unlock',
    buttonColor: '#F5A623',
    locked: true,
  },
];

// 🧩 Move ChallengeCard outside this file ideally
const ChallengeCard = ({ challenge }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.rewardTitle}>Reward</Text>
      <View style={styles.rewardRow}>
        <Image
          source={challenge.icon}
          style={styles.iconInline}
          resizeMode="contain"
        />
        <Text style={styles.reward}>{challenge.reward}</Text>
      </View>
      <Text style={styles.challengeTitle}>{challenge.title}</Text>
      <Text style={styles.meta}>
        ⏱ {challenge.duration} 🔒 {challenge.tier}
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: challenge.buttonColor }]}
      >
        <Text style={styles.buttonText}>{challenge.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ChallengesScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.activeChallenge}>
        <Text style={styles.label}>Active Challenge</Text>
        <View style={styles.row}>
          <Text style={styles.title}>30-Day Stress Buster</Text>
          <Text style={styles.days}>🔥 7 Days</Text>
        </View>
        <Text style={styles.percent}>23%</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.taskDay}>Day 7 of 30</Text>

        <Text style={styles.todayTask}>Today's Task</Text>
        <View style={styles.taskCard}>
          <Image source={imagePath.task} style={styles.taskIcon} />
          <Text style={styles.taskText}>
            Complete a 10-min meditation session
          </Text>
          <View style={styles.circleCheck} />
        </View>
      </View>

      <View style={styles.promoContainer}>
        <Image source={imagePath.diamond} style={styles.diamondIcon} />
        <Text style={styles.promoText}>
          Unlock premium plans, personalized coaching, and advanced wellness
          tools.
        </Text>
        <CustomButton
          title="Upgrade"
          bgColor={colors.secondary}
          style={styles.upgradeButton}
        />
      </View>

      <Text style={styles.tryNewChallenge}>Try a New Challenge</Text>

      {/* Challenge Cards Grid */}
      <View style={styles.cardGrid}>
        {challengeData.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ChallengesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
    backgroundColor: colors.lightGray,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(28),
    padding: 12,
    alignSelf: 'flex-start',
    marginBottom: moderateScale(2),
  },
  activeChallenge: {
    backgroundColor: colors.white,
    padding: moderateScale(16),
    borderRadius: moderateScale(16),
    marginBottom: moderateScale(20),
  },
  label: {
    color: colors.primary,
    fontWeight: '600',
    marginBottom: moderateScale(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  title: {
    flex: 1,
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: colors.primary,
  },
  days: {
    color: colors.primary,
    fontSize: moderateScale(14),
  },
  percent: {
    fontSize: moderateScale(34),
    fontWeight: '700',
    color: colors.btnsecondary,
  },
  progressBar: {
    backgroundColor: '#FAF9F6',
    borderRadius: moderateScale(20),
    height: moderateScale(8),
    overflow: 'hidden',
    marginVertical: moderateScale(8),
  },
  progressFill: {
    width: '23%',
    backgroundColor: colors.btnsecondary,
    height: '100%',
  },
  taskDay: {
    fontSize: moderateScale(13),
    color: colors.black,
  },
  todayTask: {
    marginTop: moderateScale(15),
    fontWeight: '700',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(8),
    color: colors.primary,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyblue,
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    marginTop: moderateScale(8),
  },
  taskIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(12),
  },
  taskText: {
    flex: 1,
    fontSize: moderateScale(11),
    color: '#022C35',
  },
  circleCheck: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1.5),
    borderColor: colors.btnsecondary,
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9C75CC',
    padding: moderateScale(12),
    borderRadius: moderateScale(15),
    marginBottom: moderateScale(20),
    marginTop: moderateScale(2),
  },
  diamondIcon: {
    width: moderateScale(18),
    height: moderateScale(18),
    resizeMode: 'contain',
    marginRight: moderateScale(12),
  },
  promoText: {
    flex: 1,
    fontSize: moderateScale(10),
    color: colors.white,
    marginRight: moderateScale(8),
    flexShrink: 1,
  },
  upgradeButton: {
    paddingVertical: moderateScale(9),
    paddingHorizontal: moderateScale(25),
    borderRadius: moderateScale(10),
    backgroundColor: colors.primary,
  },
  tryNewChallenge: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginBottom: moderateScale(12),
    color: colors.primary,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (screenWidth - moderateScale(48)) / 2,
    backgroundColor: '#fff',
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    marginBottom: moderateScale(12),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  rewardTitle: {
    fontSize: moderateScale(10),
    color: colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(4),
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(6),
  },
  iconInline: {
    width: moderateScale(24),
    height: moderateScale(24),
    marginRight: moderateScale(6),
  },
  reward: {
    fontSize: moderateScale(10),
    fontWeight: '700',
    color: '#3C0F99',
    textAlign: 'left',
  },
  challengeTitle: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: '#3C0F99',
    textAlign: 'center',
    marginBottom: moderateScale(4),
  },
  meta: {
    fontSize: moderateScale(12),
    color: '#666',
    textAlign: 'center',
    marginBottom: moderateScale(8),
  },
  button: {
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(20),
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: moderateScale(10),
  },
});
