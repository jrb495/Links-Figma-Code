import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../../components/ui/Button.native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { CoursesStackParamList } from '../../../navigation/types';

type CourseDetailsScreenNavigationProp = NativeStackNavigationProp<
  CoursesStackParamList,
  'CourseDetails'
>;

type CourseDetailsScreenRouteProp = RouteProp<
  CoursesStackParamList,
  'CourseDetails'
>;

export default function CourseDetailsScreen() {
  const navigation = useNavigation<CourseDetailsScreenNavigationProp>();
  const route = useRoute<CourseDetailsScreenRouteProp>();
  const { courseId } = route.params;

  // TODO: Fetch course details using courseId
  const mockCourse = {
    id: courseId,
    name: 'Pine Valley',
    location: 'Pine Valley, NJ',
    type: 'Private' as const,
    rating: 4.9,
    description: 'One of the best golf courses in the world.',
  };

  const handleEdit = () => {
    navigation.navigate('EditCourse', { courseId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.courseName}>{mockCourse.name}</Text>
          <Text style={styles.location}>{mockCourse.location}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Type</Text>
          <Text style={styles.value}>{mockCourse.type}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Rating</Text>
          <Text style={styles.value}>★ {mockCourse.rating}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{mockCourse.description}</Text>
        </View>

        <Button onPress={handleEdit} variant="default" style={styles.editButton}>
          Edit Course
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
  location: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  editButton: {
    marginTop: 24,
  },
});
