/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, LoginScreen, OnboardingScreen} from '@/Containers';

const Stack = createNativeStackNavigator();
const ScreenNavigation = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onboardingScreen">
          <Stack.Screen
            name="onBoardingScreen"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default ScreenNavigation;
