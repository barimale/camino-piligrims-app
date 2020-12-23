import React, { useEffect, useState } from 'react';
import { ColorSchemeName } from 'react-native';
import EntryApp from './ResourceLoadedApp';
import * as Location from 'expo-location';
import { AuthContextProvider } from './contexts/AuthContext';
import NotAllPermissionsGrantedScreen from './screens/NotAllPermissionsGrantedScreen';

export default function AskForPriviligiesApp(props: { colorScheme: ColorSchemeName }) {
  const [ allGranted, setAllGranted ] = useState<boolean | undefined>(undefined);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setAllGranted(false);
        return;
      } else{
        setAllGranted(true);
      }
    })();
  }, []);

  if (allGranted === undefined) {
    return null;
  } else if(allGranted) {
    return (
      <AuthContextProvider>
        <EntryApp colorScheme={props.colorScheme}/>
      </AuthContextProvider>
    );
  } else {
    return <NotAllPermissionsGrantedScreen colorScheme={props.colorScheme}/>;
  }
}
