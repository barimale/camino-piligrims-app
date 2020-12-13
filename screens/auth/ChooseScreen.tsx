import * as React from 'react';
import { View, Text, Button, Separator } from '../../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { AuthStackParamList } from '../../types';

export default function ChooseScreen({
  navigation,
}: StackScreenProps<AuthStackParamList, 'Auth'>) {
  
    return (
    <View style={styles.getStartedContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>CAMINO</Text>
        <Text style={styles.title}>DIGITAL</Text>
        <Text style={styles.title}>CREDENTIAL</Text>
      </View>
      <View style={styles.contentContainer}>
        <Button
          title="Sign In"
          onPress={async () => {
            navigation.navigate('SignIn');
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Button
          title="Sign Up"
          onPress={async () => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
      <Separator />
      <View style={styles.helpContainer}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('RememberPassword');
      }} style={styles.helpLink}>
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          I forgot password
        </Text>
      </TouchableOpacity>
    </View>
  </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      paddingTop: 16,
      height: '20%',
      width: '80%',
    },
    getStartedContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      marginTop: 10,
      marginBottom: 20,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    chooseOptionButton: {
      textAlign: 'center',
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
    },
    logoContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    linkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });