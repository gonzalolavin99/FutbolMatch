import React, { useState } from 'react';
import { View, StyleSheet, FlatList, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import MatchCard from '../../components/MatchCard';
import { Colors, Layout } from '../../constants/Colors';

// Tipo para un partido
type Match = {
  id: string;
  date: string;
  time: string;
  location: string;
  playersJoined: number;
  totalPlayers: number;
};

export default function MatchesScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // Datos de ejemplo - en una aplicación real, estos vendrían de una API
  const [matches, setMatches] = useState<Match[]>([
    { id: '1', date: '2024-09-20', time: '18:00', location: 'Cancha Central', playersJoined: 8, totalPlayers: 10 },
    { id: '2', date: '2024-09-21', time: '19:30', location: 'Estadio Municipal', playersJoined: 6, totalPlayers: 12 },
    { id: '3', date: '2024-09-22', time: '17:00', location: 'Complejo Deportivo', playersJoined: 4, totalPlayers: 8 },
  ]);

  const handleMatchPress = (id: string) => {
    // Navegar a la pantalla de detalles del partido
    router.push(`/match/${id}` as any);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        style={styles.flat}
        data={matches}
        renderItem={({ item }) => (
          <MatchCard
            {...item}
            onPress={handleMatchPress}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: Layout.padding,
  },
  flat: {
    marginTop: 30
  }
});