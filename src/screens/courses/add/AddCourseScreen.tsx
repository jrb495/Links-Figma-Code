import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components/ui/Button.native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { CoursesStackParamList } from '../../../navigation/types';

type AddCourseScreenNavigationProp = NativeStackNavigationProp<
  CoursesStackParamList,
  'AddCourse'
>;

export default function AddCourseScreen() {
  const navigation = useNavigation<AddCourseScreenNavigationProp>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Implement course submission
      navigation.navigate('CoursesList');
    } catch (error) {
      console.error('Error adding course:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.form}>
          <Text style={styles.title}>Add New Course</Text>

          {/* TODO: Add form fields for:
            - Course name
            - Location
            - Type (Public/Private/Resort)
            - Rating
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
              Save Course
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
