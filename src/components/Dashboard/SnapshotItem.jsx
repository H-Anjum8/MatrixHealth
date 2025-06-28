import { StyleSheet, View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export const SnapshotItem = ({ label, value, color }) => {
  const numericValue = parseInt(value.replace('%', ''), 10);
  return (
    <View style={styles.snapshotItem}>
      <AnimatedCircularProgress
        size={70}
        width={7}
        fill={numericValue}
        tintColor={color}
        backgroundColor="#F0F0F0"
        rotation={0}
        lineCap="round"
      >
        {() => <Text style={styles.snapshotValue}>{value}</Text>}
      </AnimatedCircularProgress>
      <Text style={styles.snapshotLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  snapshotItem: {
    alignItems: 'center',
    width: '48%',
    paddingVertical: 10,
  },
  snapshotValue: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  snapshotLabel: {
    marginTop: 6,
    color: '#666',
    fontSize: 12,
  },
});
