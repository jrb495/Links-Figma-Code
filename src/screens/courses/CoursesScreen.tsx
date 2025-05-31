import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button.native';

type Course = {
  id: string;
  name: string;
  location: string;
  type: 'Public' | 'Private' | 'Resort';
  rating: number;
  imageUrl?: string;
};

const mockCourses: Course[] = [
  {
    id: '1',
    name: 'Pine Valley',
    location: 'Pine Valley, NJ',
    type: 'Private',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Augusta National',
    location: 'Augusta, GA',
    type: 'Private',
    rating: 5.0,
  },
  {
    id: '3',
    name: 'Pebble Beach',
    location: 'Pebble Beach, CA',
    type: 'Resort',
    rating: 4.8,
  },
];

export default function CoursesScreen() {
  const renderCourseItem = ({ item }: { item: Course }) => (
    <View style={styles.courseItem}>
      <View style={styles.courseInfo}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <View style={styles.details}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.rating}>★ {item.rating}</Text>
        </View>
      </View>
      {item.imageUrl && (
        <Image 
          source={{ uri: item.imageUrl }} 
          style={styles.courseImage} 
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Golf Courses</Text>
        <Button 
          onPress={() => {}} 
          variant="default"
          size="sm"
        >
          Add Course
        </Button>
      </View>

      <FlatList
        data={mockCourses}
        renderItem={renderCourseItem}
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
  courseItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  details: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  type: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 12,
    color: '#666',
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 15,
  },
}); 