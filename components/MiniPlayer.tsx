import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { nowPlaying } from '@/constants/mockData';
import { useTheme } from '@/context/ThemeContext';

export default function MiniPlayer() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.miniPlayer }]}>
      <View style={[styles.artwork, { backgroundColor: '#27856a' }]} />
      <View style={styles.info}>
        <Text style={styles.song} numberOfLines={1}>
          {nowPlaying.title} • {nowPlaying.artist}
        </Text>
        <View style={styles.deviceRow}>
          <Ionicons name="bluetooth" size={14} color={colors.primary} />
          <Text style={[styles.device, { color: colors.primary }]}>{nowPlaying.device}</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <Ionicons name="headset" size={24} color={colors.primary} />
        <Ionicons name="pause" size={28} color="#ffffff" style={styles.pause} />
      </View>
      <View style={styles.progress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  artwork: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  song: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    gap: 4,
  },
  device: {
    fontSize: 11,
    fontWeight: '500',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pause: {
    marginLeft: 14,
  },
  progress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
