import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ChooseScreen from "../screens/auth/ChooseScreen";
import NotFoundScreen from '../screens/app/NotFoundScreen';
import { AuthStackParamList, RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import AuthLinkingConfiguration from './AuthLinkingConfiguration';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import RememberPasswordScreen from '../screens/auth/RememberPasswordScreen';
import { AuthContext } from '../contexts/AuthContext';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SecuredRootNavigator />
    </NavigationContainer>
  );
}

export function AuthNavigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={AuthLinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function SecuredRootNavigator() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={() => (
        { 
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={async () => {
                await signOut();
              }}>
              <MaterialIcons name="logout" size={24} color="black" />            
            </TouchableOpacity>)})}
      initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: true, headerTitle: 'Credential'}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const AuthStack = createStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Choose" component={ChooseScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="RememberPassword" component={RememberPasswordScreen} />
      <AuthStack.Screen name="NotFound" component={NotFoundScreen} />
    </AuthStack.Navigator>
  );
}
