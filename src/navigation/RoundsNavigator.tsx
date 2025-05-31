import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoundsStackParamList } from './types';

// Import screens
import RoundsScreen from '../screens/rounds/RoundsScreen';
import AddRoundScreen from '../screens/rounds/add/AddRoundScreen';
import RoundDetailsScreen from '../screens/rounds/details/RoundDetailsScreen';
import EditRoundScreen from '../screens/rounds/edit/EditRoundScreen';

const Stack = createNativeStackNavigator<RoundsStackParamList>();

export function RoundsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="RoundsList" 
        component={RoundsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AddRound" 
        component={AddRoundScreen}
        options={{ 
          headerTitle: 'Add Round',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="RoundDetails" 
        component={RoundDetailsScreen}
        options={{ 
          headerTitle: 'Round Details',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <Stack.Screen 
        name="EditRound" 
        component={EditRoundScreen}
        options={{ 
          headerTitle: 'Edit Round',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
    </Stack.Navigator>
  );
} 