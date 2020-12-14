import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';

import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function JourneyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={()=>{let i = "ImplementIt"}} style={styles.helpLink}>
          <Text style={styles.title}>
            
          </Text>
          <AntDesign name="plus" size={64} color={Colors.light.tint} style={[{textAlign: 'center'}, styles.helpLinkText]}/>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Bom Caminho!
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
  },
});
