import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const ContainerComponent = ({children, style}: {children: any; style: any}) => {
  return <SafeAreaView style={{...style}}>{children}</SafeAreaView>;
};

export default ContainerComponent;
