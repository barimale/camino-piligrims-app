import * as React from 'react';
import { View, Text, Button, Separator } from '../../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { AuthStackParamList } from '../../types';
import { styles } from "../../components/Themed";
import { StyledLogo } from "../../components/StyledLogo"; 
import { TouchableOpacity } from 'react-native';

export default function ChooseScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, 'Choose'>) {
  
    return (
    <View style={[styles.pageWrapper]}>
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>Welcome Piligrim!</Text>
      </View>
      <View style={styles.logoWrapper}>
        <StyledLogo />
      </View>
      <View style={[innerStyles.buttonWrapper, styles.borderedText]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <View style={styles.normalTextWrapper}>            
              <Text style={styles.normalText}>Sign in</Text>           
            </View>        
          </TouchableOpacity>
        </View>
        <Separator/>
        <View style={[innerStyles.buttonWrapper, styles.borderedText, {marginBottom: 40}]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <View style={styles.normalTextWrapper}>            
              <Text style={styles.normalText}>Sign up</Text>           
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
    // height: '20%',
    width: '80%',
  }
});