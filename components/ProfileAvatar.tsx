import { StyleSheet, Text, View } from 'react-native';

export default function ProfileAvatar() {
  return (
    <View style={styles.avatar}>
      <Text style={styles.letter}>A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e91e8c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
});
