import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';

import Colors from '../../constants/Colors';
import logo from '../../assets/images/logo100squared.png';
import { Image } from 'react-native';

export default function JourneyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={()=>{let i = "ImplementIt"}} style={[styles.helpLink,{padding: 10, borderRadius: 10, borderWidth: 2, borderStyle: 'dashed'}]}>
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
      </View>
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
