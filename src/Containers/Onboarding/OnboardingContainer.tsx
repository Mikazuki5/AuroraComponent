/* eslint-disable react-native/no-inline-styles */
import {ImageAssets} from '@/Assets/Constant';
import React from 'react';
import {
  SafeAreaView,
  Text,
  Animated,
  Image,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: ImageAssets.game_controller,
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: ImageAssets.earrings,
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: ImageAssets.flamingo,
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: ImageAssets.hair_spray,
  },
];

const Indicator = ({scrollX}: any) => {
  return (
    <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
      {DATA.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${index}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              margin: 10,
              transform: [{scale}],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({scrollX}: any) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map(bg => bg),
  });
  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, {backgroundColor}]} />
  );
};

const Square = ({scrollX}: any) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.62,
        left: -height * 0.3,
        transform: [{rotate}, {translateX}],
      }}
    />
  );
};

const OnboardingContainer = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        pagingEnabled
        contentContainerStyle={{paddingBottom: 100}}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return (
            <View style={{width, alignItems: 'center', padding: 20}}>
              <View style={{flex: 0.7, justifyContent: 'center'}}>
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{flex: 0.3}}>
                <View style={{marginBottom: 15}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '800',
                      fontSize: 24,
                      marginBottom: 10,
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: '300'}}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </SafeAreaView>
  );
};

export default OnboardingContainer;
