import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components/ui/Button.native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { RoundsStackParamList } from '../../../navigation/types';

type EditRoundScreenNavigationProp = NativeStackNavigationProp<
  RoundsStackParamList,
  'EditRound'
>;

type EditRoundScreenRouteProp = RouteProp<
  RoundsStackParamList,
  'EditRound'
>;

export default function EditRoundScreen() {
  const navigation = useNavigation<EditRoundScreenNavigationProp>();
  const route = useRoute<EditRoundScreenRouteProp>();
  const { roundId } = route.params;
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Implement round update
      navigation.navigate('RoundDetails', { roundId });
    } catch (error) {
      console.error('Error updating round:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.form}>
          <Text style={styles.title}>Edit Round</Text>
          
          {/* TODO: Add form fields for:
            - Course selection
            - Date picker
            - Score input
            - Stats input (fairways, greens, putts)
            - Notes
          */}
          
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigation.goBack()}
              variant="outline"
              style={styles.button}
            >
              Cancel
            </Button>
            <Button
              onPress={handleSubmit}
              variant="default"
              style={styles.button}
              loading={isSubmitting}
            >
              Save Changes
            </Button>
          </View>
        </View>
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
  form: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    flex: 1,
    marginHorizontal: 6,
  },
}); 