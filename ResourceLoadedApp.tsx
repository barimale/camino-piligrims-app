import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContext } from './contexts/AuthContext';
import * as Notifications from 'expo-notifications';

import Navigation, { AuthNavigation } from './navigation';

export default function ResourceLoadedApp(props: { colorScheme: ColorSchemeName }) {
  const { isSignedIn } = React.useContext(AuthContext);

  if(isSignedIn){
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={props.colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
  else{
    return (
      <SafeAreaProvider>
        <AuthNavigation colorScheme={props.colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
