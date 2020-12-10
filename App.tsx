import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import nodejs from 'nodejs-mobile-react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const UseNodeJs = () => {
      debugger
      console.log('Node.js is starting.');
      nodejs.start('main.js');
      console.log('Node.js has started.');

      try{
        nodejs.channel.addListener(
          'message',
          (msg: any) => {
            alert('From node: ' + msg);
            console.log(msg);
          }
          // ,
          // App //TODO: this previously here, check if App ok value
        );
      }
      catch(error: any)
      {
        debugger
        console.log(error);
      }
      
      debugger
    };

    UseNodeJs();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
