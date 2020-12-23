import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorSchemeName } from 'react-native';

export default function NotAllPermissionsGrantedScreen(props: { colorScheme: ColorSchemeName }) {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.singleLineBolded}>Not all required permissions granted.</Text>
      <Text style={styles.singleLineNormal}>Not possible to continue.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  singleLineBolded: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10
  },
  singleLineNormal: {
    fontSize: 10
  }
});
