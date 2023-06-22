import React from 'react';
import {SafeAreaView} from 'react-native';

const ContainerComponent = ({children}: {children: any}) => {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
};

export default ContainerComponent;
