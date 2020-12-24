import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import JourneyScreen from '../screens/app/JourneyScreen';
import HistoryScreen from '../screens/app/HistoryScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { JourneyContextProvider } from '../contexts/JourneyContext';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Journey"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].text }}>
      <BottomTab.Screen
        name="Journey"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons color={color} name="walk-outline" size={30} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="scroll" size={22} color={color} style={{ marginBottom: -3 }}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  const wrappedScreen = () => 
    <JourneyContextProvider>
      <JourneyScreen/>
    </JourneyContextProvider>;

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="JourneyScreen"
        component={wrappedScreen}
        options={{ headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerShown: false}}
      />
    </TabTwoStack.Navigator>
  );
}
