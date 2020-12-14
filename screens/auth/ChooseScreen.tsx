import * as React from 'react';
import { View, Text, Button } from '../../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { AuthStackParamList } from '../../types';
import { styles } from "../../components/Themed";

export default function ChooseScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, 'Choose'>) {
  
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