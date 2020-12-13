import * as React from 'react';
import { View, Text, Button, Separator } from '../../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { AuthStackParamList } from '../../types';
import { styles } from "../../components/Themed";

export default function ChooseScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, 'Auth'>) {
  
    return (
    <View style={styles.pageWrapper}>
      <View style={styles.logoWrapper}>
        <Text style={styles.title}>CAMINO</Text>
        <Text style={styles.title}>DIGITAL</Text>
        <Text style={styles.title}>CREDENTIAL</Text>
      </View>
      <View style={innerStyles.buttonWrapper}>
        <Button
          title="Sign In"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
      </View>
      <View style={innerStyles.buttonWrapper}>
        <Button
          title="Sign Up"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
      <Separator />
      <View style={styles.normalTextWrapper}>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('RememberPassword');
          }}
          style={styles.normalTextTouchable}>
          <Text
            style={styles.normalText}
            lightColor={Colors.light.tint}>
            I forgot password
          </Text>
        </TouchableOpacity>
    </View>
  </View>
    );
  }

  const innerStyles = StyleSheet.create({
    buttonWrapper: {
      paddingTop: 16,
      height: '20%',
      width: '80%',
    }
  });