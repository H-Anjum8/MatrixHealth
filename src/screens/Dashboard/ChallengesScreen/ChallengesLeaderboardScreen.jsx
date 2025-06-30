import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import CustomButton from '../../../components/CommonComp/CustomButton';
import ChallengesScreen from './ChallengesScreen';
import LeaderboardScreen from './LeaderboardScreen';

const ChallengesLeaderboardScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Challenges');

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <CustomButton
          title="Challenges"
          bgColor={
            selectedTab === 'Challenges' ? colors.btnsecondary : colors.white
          }
          textColor={colors.primary}
          onPress={() => setSelectedTab('Challenges')}
        />
        <CustomButton
          title="Leaderboard"
          bgColor={
            selectedTab === 'Leaderboard' ? colors.btnsecondary : colors.white
          }
          textColor={colors.primary}
          onPress={() => setSelectedTab('Leaderboard')}
        />
      </View>

      {/* Render selected screen */}
      {selectedTab === 'Challenges' ? (
        <ChallengesScreen />
      ) : (
        <LeaderboardScreen />
      )}
    </View>
  );
};

export default ChallengesLeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
});
