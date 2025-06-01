import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CoursesStackParamList } from './types';

// Import screens
import CoursesScreen from '../screens/courses/CoursesScreen';

const Stack = createNativeStackNavigator<CoursesStackParamList>();

export function CoursesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CoursesList" 
        component={CoursesScreen}
        options={{ headerShown: false }}
      />
      {/* Additional course-related screens can be added here */}
    </Stack.Navigator>
  );
} 