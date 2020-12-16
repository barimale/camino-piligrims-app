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
import { AuthContext } from '../contexts/AuthContext';

import { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

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
  const [modalVisible, setModalVisible] = React.useState(false);
  const { signOut } = React.useContext(AuthContext);

  return (
      <Stack.Navigator
        screenOptions={() => (
          { 
            headerShown: true,
            headerRight: () => (
              <>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Do You really want to logout?</Text>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <TouchableOpacity
                          style={{ ...styles.openButton, backgroundColor: '#C1272D' }}
                          onPress={() => {
                            setModalVisible(false);
                          }}>
                          <Text style={styles.textStyle}>No</Text>
                        </TouchableOpacity>
                        <Text style={{paddingLeft: 10, paddingRight: 10, color: 'black', textAlignVertical: 'center'}}>or</Text>
                        <TouchableOpacity
                          style={{ ...styles.openButton, backgroundColor: 'black', borderColor: 'black' }}
                          onPress={async () => {
                            await signOut();
                          }}>
                          <Text style={styles.textStyle}>Yes</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <MaterialIcons name="logout" size={24} color="black" />            
                </TouchableOpacity>
              </>
          )})}
        initialRouteName="Root">
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: true, headerTitle: 'Hi Piligrino!' }}
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
    <AuthStack.Navigator screenOptions={{ headerShown: true, headerTitle: 'Camino Digital Credential' }}>
      <AuthStack.Screen name="Choose" component={ChooseScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="NotFound" component={NotFoundScreen} />
    </AuthStack.Navigator>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
