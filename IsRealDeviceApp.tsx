import React from 'react';
import { ColorSchemeName } from 'react-native';
import * as Device from 'expo-device';
import ResourceLoadedApp from './ResourceLoadedApp';

import { AuthContextProvider } from './contexts/AuthContext';
import NotRealDeviceScreen from './screens/NotRealDeviceScreen';

export default function IsRealDeviceApp(props: { colorScheme: ColorSchemeName }) {

  if (!Device.isDevice) {
    return <NotRealDeviceScreen colorScheme={props.colorScheme}/>;
  } else {
    return (
      <AuthContextProvider>
        <ResourceLoadedApp colorScheme={props.colorScheme}/>
      </AuthContextProvider>
    );
  }
}
