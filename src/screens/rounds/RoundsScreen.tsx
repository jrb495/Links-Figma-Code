import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button.native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RoundsStackParamList } from '../../navigation/types';

type RoundsScreenNavigationProp = NativeStackNavigationProp<
  RoundsStackParamList,
  'RoundsList'
>;

type Round = {
  id: string;
  courseName: string;
  date: string;
  score: number;
};

const mockRounds: Round[] = [
  { id: '1', courseName: 'Pine Valley', date: '2024-05-30', score: 72 },
  { id: '2', courseName: 'Augusta National', date: '2024-05-28', score: 75 },
  { id: '3', courseName: 'St Andrews', date: '2024-05-25', score: 70 },
];

export default function RoundsScreen() {
  const navigation = useNavigation<RoundsScreenNavigationProp>();

  const handleAddRound = () => {
    navigation.navigate('AddRound');
  };

  const handleRoundPress = (roundId: string) => {
    navigation.navigate('RoundDetails', { roundId });
  };

  const renderRoundItem = ({ item }: { item: Round }) => (
    <TouchableOpacity 
      style={styles.roundItem}
      onPress={() => handleRoundPress(item.id)}
    >
      <View>
        <Text style={styles.courseName}>{item.courseName}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.score}>{item.score}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Rounds</Text>
        <Button 
          onPress={handleAddRound} 
          variant="default"
          size="sm"
        >
          Add Round
        </Button>
      </View>

      <FlatList
        data={mockRounds}
        renderItem={renderRoundItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    padding: 20,
  },
  roundItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}); 