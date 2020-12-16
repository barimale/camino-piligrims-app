import * as React from 'react';
import { View, Text, Button, Separator } from '../../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { AuthStackParamList } from '../../types';
import { styles } from "../../components/Themed";
import { StyledLogo } from "../../components/StyledLogo"; 
import { TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function ChooseScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, 'Choose'>) {
  
    return (
    <View style={[styles.pageWrapper]}>
      <View style={{marginTop: 20}}>
        <Text style={[styles.title,{ fontSize: 50}]}>Welcome!</Text>
      </View>
      <View style={styles.logoWrapper}>
        <TouchableOpacity
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://www.caminodesantiago.gal/pt/inicio'
            );
          }}>
          <StyledLogo />     
        </TouchableOpacity>
      </View>
      <View style={[innerStyles.buttonWrapper, styles.borderedText, {backgroundColor: '#C1272D', borderRadius: 10}]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <View style={{backgroundColor: 'transparent'}}>            
              <Text style={[styles.normalText, {color: 'white', fontSize: 20, fontWeight: 'bold'}]}>LOGIN</Text>           
            </View>        
          </TouchableOpacity>
      </View>
      <Separator/>
      <View><Text>or</Text></View>
      <Separator/>
      <View style={[innerStyles.buttonWrapper, styles.borderedText, {backgroundColor: 'black',marginBottom: 40, borderRadius: 10}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <View style={{backgroundColor: 'transparent'}}>            
            <Text style={[styles.normalText, {color: 'white',fontSize: 20, fontWeight: 'bold'}]}>SIGN UP</Text>           
          </View>
        </TouchableOpacity>
      </View>
  </View>
);
}

const innerStyles = StyleSheet.create({
  buttonWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    height: '10%',
    width: '80%',
  },
  oneLineWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    width: '80%',
  }
});