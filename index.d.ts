declare module 'react-native-swipe-onboarding' {
    import React from 'react';
    import { StyleProp, ViewStyle, TextStyle } from 'react-native';
  
    export interface OnboardingData {
      title: string;
      description: string;
      icon?: React.ReactNode;
      backgroundColor?: string;
      textColor?: string;
      buttonColor?: string;
      buttonTextColor?: string;
    }
  
    export interface SwipeOnboardingProps {
      data: OnboardingData[];
      onFinish: () => void;
      nextLabel?: string;
      prevLabel?: string;
      finishLabel?: string;
      indicatorStyle?: StyleProp<ViewStyle>;
      textStyle?: StyleProp<TextStyle>;
      containerStyle?: StyleProp<ViewStyle>;
      autoChange?: boolean;
      delay?: number;
    }
  
    const SwipeOnboarding: React.FC<SwipeOnboardingProps>;
  
    export default SwipeOnboarding;
  }
  