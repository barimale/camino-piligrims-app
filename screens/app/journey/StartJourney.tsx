import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../../components/Themed';

import Colors from '../../../constants/Colors';
import logo from '../../../assets/images/logo100squared.png';
import { Image } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function StartJourneySubScreen() {
  const [isStarting, setIsStarting] = useState<boolean>(false);
  
  return (
      <View style={styles.helpContainer}>
        {isStarting === true? (
          <>
            <ActivityIndicator size="large" color="black" />
            <Text>
              Starting in progress...
            </Text>
          </>
        ) : (
          <TouchableOpacity onPress={()=>{
            setIsStarting(true);
            setTimeout(()=>{
              setIsStarting(false);
            }, 4000);
          }} style={
            [styles.helpLink,{
            padding: 10, 
            borderRadius: 10, 
            borderWidth: 1, 
            borderStyle: 'dashed'}]}>
            <Text style={[styles.title, {alignSelf: 'center', paddingBottom: 10}]}>
              Bom Caminho!
            </Text>
            <Image source={logo} style={[{ height: 64, width: 64, paddingTop: 10, paddingBottom: 8, alignSelf:'center'}]} />
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              Click here
            </Text>
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              to
            </Text>
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              START your journey
            </Text>
          </TouchableOpacity>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  }
});
