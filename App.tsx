import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation, { AuthNavigation } from './navigation';
import LogoScreen from './screens/LogoScreen';

import ResourceLoadedApp from './ResourceLoadedApp';
import { AuthContextProvider } from './contexts/AuthContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <LogoScreen colorScheme={colorScheme}/>;
  } else {
    return (
      <AuthContextProvider>
        <ResourceLoadedApp colorScheme={colorScheme}/>
      </AuthContextProvider>
    );
  }
}
