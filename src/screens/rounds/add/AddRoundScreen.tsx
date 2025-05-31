import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components/ui/Button.native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RoundsStackParamList } from '../../../navigation/types';

type AddRoundScreenNavigationProp = NativeStackNavigationProp<
  RoundsStackParamList,
  'AddRound'
>;

export default function AddRoundScreen() {
  const navigation = useNavigation<AddRoundScreenNavigationProp>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Implement round submission
      navigation.navigate('RoundsList');
    } catch (error) {
      console.error('Error adding round:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.form}>
          <Text style={styles.title}>Add New Round</Text>
          
          {/* TODO: Add form fields for:
            - Course selection
            - Date picker
            - Score input
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
              Save Round
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