/* eslint-disable react-native/no-inline-styles */
import {Drawer} from '@/Components';
import React, {useRef, useState} from 'react';
import {Animated, SafeAreaView, TouchableOpacity} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';

const HomeScreenContainer = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#A5BBFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <Drawer />
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -5 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            {showMenu ? (
              <Icons.XMarkIcon size={25} color={'#000'} />
            ) : (
              <Icons.Squares2X2Icon size={25} color={'#000'} />
            )}
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreenContainer;
