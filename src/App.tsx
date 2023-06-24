import React from 'react';
import {StatusBar} from 'react-native';
import ScreenNavigation from './Navigation/ScreenNavigation';

const App = () => {
  return (
    <>
      <StatusBar
        showHideTransition={'fade'}
        animated
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
      <ScreenNavigation />
    </>
  );
};

export default App;
