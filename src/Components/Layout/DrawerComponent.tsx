/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';

const TabButton = (
  currentTab: any,
  setCurrentTab: any,
  title: any,
  Icon: any,
) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === 'LogOut') {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab === title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}>
        {Icon}
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab === title ? '#88a0eb' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const DrawerComponent = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  return (
    <View style={{justifyContent: 'flex-start', padding: 15}}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icons.UserIcon size={35} color={'#000'} />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
          marginTop: 10,
        }}>
        Gamal Rivaldi M
      </Text>
      <TouchableOpacity>
        <Text style={{marginTop: 5, color: '#fff'}}>View Profile</Text>
      </TouchableOpacity>
      <View style={{flexGrow: 1, marginTop: 50}}>
        {TabButton(
          currentTab,
          setCurrentTab,
          'Home',
          <Icons.HomeIcon
            size={20}
            color={currentTab === 'Home' ? '#88a0eb' : 'white'}
          />,
        )}
        {TabButton(
          currentTab,
          setCurrentTab,
          'Attendance',
          <Icons.ClockIcon
            size={20}
            color={currentTab === 'Attendance' ? '#88a0eb' : 'white'}
          />,
        )}
        {TabButton(
          currentTab,
          setCurrentTab,
          'Notification',
          <Icons.BellAlertIcon
            size={20}
            color={currentTab === 'Notification' ? '#88a0eb' : 'white'}
          />,
        )}
        {TabButton(
          currentTab,
          setCurrentTab,
          'Settings',
          <Icons.Cog6ToothIcon
            size={20}
            color={currentTab === 'Settings' ? '#88a0eb' : 'white'}
          />,
        )}
      </View>
      <View>
        {TabButton(
          currentTab,
          setCurrentTab,
          'LogOut',
          <Icons.ArrowRightOnRectangleIcon size={20} color={'#fff'} />,
        )}
      </View>
    </View>
  );
};

export default DrawerComponent;
