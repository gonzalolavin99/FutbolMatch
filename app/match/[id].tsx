import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Colors, Typography, Layout } from '../../constants/Colors';

// Tipo para los detalles de un partido
type MatchDetails = {
  id: string;
  date: string;
  time: string;
  location: string;
  playersJoined: number;
  totalPlayers: number;
  description: string;
  price: number;
};

export default function MatchDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  // En una aplicación real, aquí harías una llamada a la API para obtener los detalles del partido
  // Por ahora, usaremos datos de ejemplo
  const matchDetails: MatchDetails = {
    id: id as string,
    date: '2024-09-20',
    time: '18:00',
    location: 'Cancha Central',
    playersJoined: 8,
    totalPlayers: 10,
    description: 'Partido amistoso de fútbol 5. Todos los niveles son bienvenidos.',
    price: 15,
  };

  const handleJoinMatch = () => {
    // Aquí iría la lógica para unirse al partido
    console.log('Unido al partido:', id);
    // Después de unirse, podrías navegar de vuelta a la lista de partidos o mostrar una confirmación
    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Detalles del Partido</Text>
      <View style={styles.detailsContainer}>
        <Text style={[styles.detail, { color: colors.text }]}>Fecha: {matchDetails.date}</Text>
        <Text style={[styles.detail, { color: colors.text }]}>Hora: {matchDetails.time}</Text>
        <Text style={[styles.detail, { color: colors.text }]}>Lugar: {matchDetails.location}</Text>
        <Text style={[styles.detail, { color: colors.text }]}>
          Jugadores: {matchDetails.playersJoined}/{matchDetails.totalPlayers}
        </Text>
        <Text style={[styles.detail, { color: colors.text }]}>Precio: ${matchDetails.price}</Text>
        <Text style={[styles.description, { color: colors.text }]}>{matchDetails.description}</Text>
      </View>
      <TouchableOpacity 
        style={[styles.joinButton, { backgroundColor: colors.primary }]}
        onPress={handleJoinMatch}
      >
        <Text style={styles.joinButtonText}>Unirse al Partido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Layout.padding,
  },
  title: {
    ...Typography.title,
    marginBottom: Layout.padding,
  },
  detailsContainer: {
    marginBottom: Layout.padding,
  },
  detail: {
    ...Typography.body,
    marginBottom: 8,
  },
  description: {
    ...Typography.body,
    marginTop: 16,
    marginBottom: 24,
  },
  joinButton: {
    padding: 16,
    borderRadius: Layout.borderRadius,
    alignItems: 'center',
  },
  joinButtonText: {
    ...Typography.subtitle,
    color: 'white',
  },
});