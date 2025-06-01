import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components/ui/Button.native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { CoursesStackParamList } from '../../../navigation/types';

type EditCourseScreenNavigationProp = NativeStackNavigationProp<
  CoursesStackParamList,
  'EditCourse'
>;

type EditCourseScreenRouteProp = RouteProp<
  CoursesStackParamList,
  'EditCourse'
>;

export default function EditCourseScreen() {
  const navigation = useNavigation<EditCourseScreenNavigationProp>();
  const route = useRoute<EditCourseScreenRouteProp>();
  const { courseId } = route.params;
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Fetch course details using courseId
  const mockCourse = {
    id: courseId,
    name: 'Pine Valley',
    location: 'Pine Valley, NJ',
    type: 'Private' as const,
    rating: 4.9,
    description: 'One of the best golf courses in the world.',
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: Implement course update
      navigation.navigate('CourseDetails', { courseId });
    } catch (error) {
      console.error('Error updating course:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.form}>
          <Text style={styles.title}>Edit Course</Text>

          {/* TODO: Add form fields for:
            - Course name
            - Location
            - Type (Public/Private/Resort)
            - Rating
            - Description
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
