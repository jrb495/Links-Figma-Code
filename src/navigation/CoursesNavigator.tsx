import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CoursesStackParamList } from './types';

// Import screens
import CoursesScreen from '../screens/courses/CoursesScreen';
import AddCourseScreen from '../screens/courses/add/AddCourseScreen';
import CourseDetailsScreen from '../screens/courses/details/CourseDetailsScreen';
import EditCourseScreen from '../screens/courses/edit/EditCourseScreen';

const Stack = createNativeStackNavigator<CoursesStackParamList>();

export function CoursesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CoursesList" 
        component={CoursesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AddCourse" 
        component={AddCourseScreen}
        options={{ 
          headerTitle: 'Add Course',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="CourseDetails" 
        component={CourseDetailsScreen}
        options={{ 
          headerTitle: 'Course Details',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="EditCourse" 
        component={EditCourseScreen}
        options={{ 
          headerTitle: 'Edit Course',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
    </Stack.Navigator>
  );
} 