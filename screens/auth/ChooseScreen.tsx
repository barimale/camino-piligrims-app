import * as React from 'react';
import { View, Text, Button, Separator } from '../../components/Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

export default function ChooseScreen() {
  
    return (
    <View style={styles.getStartedContainer}>
      <View style={styles.contentContainer}>
        <Button
          title="Sign In"
          onPress={async () => {
            //go to subpage
          }}
        />
        <Button
          title="Sign Up"
          onPress={async () => {
            //go to subpage
          }}
        />
      </View>
      <Separator />
      <View style={styles.helpContainer}>
      <TouchableOpacity onPress={()=>{
        //navigate to subpage
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
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
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
  });