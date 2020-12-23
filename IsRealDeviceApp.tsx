import React from 'react';
import { ColorSchemeName } from 'react-native';
import * as Device from 'expo-device';

import NotRealDeviceScreen from './screens/NotRealDeviceScreen';
import AskForPriviligiesApp from './AskForPriviligiesApp';

export default function IsRealDeviceApp(props: { colorScheme: ColorSchemeName }) {

  if (!Device.isDevice) {
    return <NotRealDeviceScreen colorScheme={props.colorScheme}/>;
  } else {
    return (
      <AskForPriviligiesApp colorScheme={props.colorScheme}/>
    );
  }
}
