import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Intro: undefined;
  Swipe: undefined;
  Results: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
