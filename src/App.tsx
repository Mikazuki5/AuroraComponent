import React from 'react';
import {OnboardingScreen} from './Containers';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        showHideTransition={'fade'}
        animated
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
      <OnboardingScreen />
    </>
  );
};

export default App;
