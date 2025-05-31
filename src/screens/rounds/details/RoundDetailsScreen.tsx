import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components/ui/Button.native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { RoundsStackParamList } from '../../../navigation/types';

type RoundDetailsScreenNavigationProp = NativeStackNavigationProp<
  RoundsStackParamList,
  'RoundDetails'
>;

type RoundDetailsScreenRouteProp = RouteProp<
  RoundsStackParamList,
  'RoundDetails'
>;

export default function RoundDetailsScreen() {
  const navigation = useNavigation<RoundDetailsScreenNavigationProp>();
  const route = useRoute<RoundDetailsScreenRouteProp>();
  const { roundId } = route.params;

  // TODO: Fetch round details using roundId
  const mockRound = {
    id: roundId,
    courseName: 'Pine Valley',
    date: '2024-05-30',
    score: 72,
    notes: 'Great round, hit 12 fairways and 14 greens.',
    stats: {
      fairways: 12,
      greens: 14,
      putts: 30,
    },
  };

  const handleEdit = () => {
    navigation.navigate('EditRound', { roundId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.courseName}>{mockRound.courseName}</Text>
          <Text style={styles.date}>{mockRound.date}</Text>
        </View>

        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Score</Text>
          <Text style={styles.scoreValue}>{mockRound.score}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{mockRound.stats.fairways}</Text>
              <Text style={styles.statLabel}>Fairways</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{mockRound.stats.greens}</Text>
              <Text style={styles.statLabel}>Greens</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{mockRound.stats.putts}</Text>
              <Text style={styles.statLabel}>Putts</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.notes}>{mockRound.notes}</Text>
        </View>

        <Button
          onPress={handleEdit}
          variant="default"
          style={styles.editButton}
        >
          Edit Round
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  courseName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  scoreCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 16,
    color: '#666',
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  notes: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  editButton: {
    marginTop: 24,
  },
}); 