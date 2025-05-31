import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Rounds: NavigatorScreenParams<RoundsStackParamList>;
  Courses: NavigatorScreenParams<CoursesStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type RoundsStackParamList = {
  RoundsList: undefined;
  AddRound: undefined;
  RoundDetails: { roundId: string };
  EditRound: { roundId: string };
};

export type CoursesStackParamList = {
  CoursesList: undefined;
  AddCourse: undefined;
  CourseDetails: { courseId: string };
  EditCourse: { courseId: string };
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: undefined;
  Settings: undefined;
}; 