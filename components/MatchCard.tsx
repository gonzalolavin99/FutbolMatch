import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme, ViewStyle, TextStyle } from 'react-native';
import { Colors, Typography, Layout } from '../constants/Colors';

type MatchCardProps = {
  id: string;
  date: string;
  time: string;
  location: string;
  playersJoined: number;
  totalPlayers: number;
  onPress: (id: string) => void;
};

const MatchCard: React.FC<MatchCardProps> = ({
  id,
  date,
  time,
  location,
  playersJoined,
  totalPlayers,
  onPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: colors.cardBackground }]} 
      onPress={() => onPress(id)}
    >
      <View style={styles.header}>
        <Text style={[styles.date, { color: colors.text }]}>{date}</Text>
        <Text style={[styles.time, { color: colors.text }]}>{time}</Text>
      </View>
      <Text style={[styles.location, { color: colors.text }]}>{location}</Text>
      <View style={styles.footer}>
        <Text style={[styles.players, { color: colors.secondary }]}>
          {playersJoined}/{totalPlayers} jugadores
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: Layout.padding,
    borderRadius: Layout.borderRadius,
    marginBottom: Layout.padding,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  } as ViewStyle,
  date: {
    ...Typography.subtitle,
  } as TextStyle,
  time: {
    ...Typography.subtitle,
  } as TextStyle,
  location: {
    ...Typography.body,
    marginBottom: 8,
  } as TextStyle,
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  } as ViewStyle,
  players: {
    ...Typography.caption,
  } as TextStyle,
});

export default MatchCard;