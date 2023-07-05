/* eslint-disable react-native/no-inline-styles */
import {ImageAssets, width} from '@/Assets/Constant';
import {ModalPopupDialog} from '@/Interface/ModalPopupDialog';
import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ModalAlertComponent = ({
  isShowModal,
  title,
  description,
  image,
  onClosed,
  onSuccess,
  textOnClosed,
  textOnSuccess,
}: ModalPopupDialog) => {
  return (
    <Modal transparent visible={isShowModal} animationType="slide">
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {backgroundColor: 'rgba(20, 23, 24, 0.5)', opacity: 1},
        ]}
      />
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
            backgroundColor: '#fff',
            width: width / 1.2,
            minHeight: width / 2,
            borderRadius: 16,
            padding: 16,
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={image ?? ImageAssets.logout}
              resizeMode="contain"
              style={{width: width / 2.5, height: width / 2.5}}
            />
            <Text style={{color: '#151012', fontSize: 16, fontWeight: '700'}}>
              {title}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                lineHeight: 20,
                marginTop: 5,
                fontSize: 12,
                color: '#919DA1',
              }}>
              {description}
            </Text>
          </View>
          {(onClosed || onSuccess) && (
            <View style={{flexDirection: 'row', marginTop: 10}}>
              {onClosed && (
                <TouchableOpacity
                  onPress={onClosed}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 45,
                  }}>
                  <Text style={{color: '#D93535', fontSize: 14}}>
                    {textOnClosed}
                  </Text>
                </TouchableOpacity>
              )}
              {onSuccess && (
                <TouchableOpacity
                  onPress={onSuccess}
                  style={{
                    backgroundColor: '#CEF3FF',
                    flex: 1,
                    height: 45,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#008FC7', fontSize: 14}}>
                    {textOnSuccess}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalAlertComponent;
