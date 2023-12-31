/* eslint-disable react-native/no-inline-styles */
import {width} from '@/Assets/Constant';
import {Drawer, PopupDialog} from '@/Components';
import React, {useRef, useState} from 'react';
import {Animated, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
const HomeScreenContainer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isShowModalAlert, setIsShowModalAlert] = useState<boolean>(false);
  const inset = useSafeAreaInsets();

  const offsetValue = useRef(new Animated.Value(0)).current;

  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const backgroundColor = useRef(new Animated.Value(0)).current;

  const interpolatedColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#A5BBFF'],
  });

  const handleOpenDrawer = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -5 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(backgroundColor, {
      toValue: !showMenu ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setShowMenu(!showMenu);
  };

  return (
    <>
      <AnimatedStatusBar
        backgroundColor={interpolatedColor}
        barStyle={showMenu ? 'light-content' : 'dark-content'}
      />
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: interpolatedColor,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
        }}>
        <View style={{flex: 1}}>
          <Drawer onLogout={() => setIsShowModalAlert(true)} />
          <Animated.View
            style={{
              width,
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
              transform: [{scale: scaleValue}, {translateX: offsetValue}],
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateY: closeButtonOffset,
                    },
                  ],
                }}>
                <TouchableOpacity onPress={() => handleOpenDrawer()}>
                  {showMenu ? (
                    <Icons.XMarkIcon size={25} color={'#000'} />
                  ) : (
                    <Icons.Squares2X2Icon size={25} color={'#000'} />
                  )}
                </TouchableOpacity>
              </Animated.View>
            </View>
            <View style={{flex: 1, paddingTop: 10}}>
              <View>
                <Text style={{color: '#007DAE', fontSize: 18}}>
                  Selamat Datang,
                </Text>
                <Text
                  style={{
                    color: '#070808',
                    fontSize: 32,
                    fontWeight: 'bold',
                    lineHeight: 40,
                  }}>
                  Gamal Rivaldi M
                </Text>
              </View>
            </View>
          </Animated.View>
          <PopupDialog
            isShowModal={isShowModalAlert}
            title="Tetap ingin keluar dari Akunmu?"
            description="Kamu perlu Masuk lagi untuk kembali menggunakan Layanan Aurora
              School."
            onClosed={() => setIsShowModalAlert(false)}
            textOnClosed="Tetap Keluar"
            onSuccess={() => setIsShowModalAlert(false)}
            textOnSuccess="Kembali"
          />
        </View>
      </Animated.View>
    </>
  );
};

export default HomeScreenContainer;
