/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Lottie from 'lottie-react-native';
import {AnimationsAssets, ImageAssets, height, width} from '@/Assets/Constant';
import * as Icon from 'react-native-heroicons/solid';

const Backdrop = () => {
  return (
    <View
      style={[StyleSheet.absoluteFillObject, {backgroundColor: '#eaeefb'}]}
    />
  );
};

const Square = () => {
  return (
    <View
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.67,
        left: -height * 0.3,
        transform: [{rotate: '35deg'}],
      }}
    />
  );
};

const LoginScreenContainer = ({navigation}: any) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Backdrop />
      <KeyboardAwareScrollView
        style={{flex: 1}}
        onKeyboardWillShow={(frames: Object) => {
          console.log('Keyboard event', frames);
        }}>
        <Square />
        <View style={{flex: 0.7, width, alignItems: 'center'}}>
          <Lottie
            source={AnimationsAssets.login_animation}
            resizeMode="contain"
            autoPlay
            loop={false}
            style={{
              width: width,
              height: width,
            }}
          />
        </View>
        <View style={{flex: 0.3, marginHorizontal: 16}}>
          <Text style={{fontSize: 36, color: '#000', fontWeight: 'bold'}}>
            Login
          </Text>
          <View
            style={{
              marginTop: 15,
              display: 'flex',
              flexDirection: 'row',
              width,
              alignItems: 'center',
            }}>
            <Icon.AtSymbolIcon size={20} color={'#7E889A'} />
            <View
              style={{
                borderBottomWidth: 1,
                marginLeft: 10,
                borderColor: '#7E889A',
              }}>
              <TextInput
                placeholder="Email ID"
                placeholderTextColor={'#7E889A'}
                style={{
                  width: width / 1.2,
                  fontSize: 16,
                  color: '#000',
                  fontWeight: '700',
                  minHeight: 40,
                }}
                keyboardType="email-address"
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              display: 'flex',
              flexDirection: 'row',
              width,
              alignItems: 'center',
            }}>
            <Icon.LockClosedIcon size={20} color={'#7E889A'} />
            <View
              style={{
                borderBottomWidth: 1,
                marginLeft: 10,
                borderColor: '#7E889A',
              }}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'#7E889A'}
                style={{
                  width: width / 1.3,
                  fontSize: 16,
                  color: '#000',
                  fontWeight: '700',
                  minHeight: 40,
                }}
                secureTextEntry={isShowPassword}
              />
              <View />
            </View>
            <TouchableOpacity
              style={{marginLeft: 5}}
              onPress={() => setIsShowPassword(!isShowPassword)}>
              {!isShowPassword ? (
                <Icon.EyeIcon size={20} color={'#7E889A'} />
              ) : (
                <Icon.EyeSlashIcon size={20} color={'#7E889A'} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Text style={{fontSize: 16, color: '#688eff', fontWeight: '600'}}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: '#688eff',
              marginTop: 30,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
            }}>
            <Text style={{fontSize: 16, color: '#fff', fontWeight: '600'}}>
              Login
            </Text>
          </TouchableOpacity>
          <View style={{marginVertical: 15, alignItems: 'center'}}>
            <Text style={{color: '#7E889A', fontSize: 12, fontWeight: '600'}}>
              Or login with
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#7e889a',
                marginTop: 15,
              }}>
              <Image
                source={ImageAssets.google_logo}
                style={{width: 50, height: 50}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreenContainer;
