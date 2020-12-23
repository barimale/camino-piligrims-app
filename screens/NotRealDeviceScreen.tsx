import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorSchemeName } from 'react-native';

export default function NotRealDeviceScreen(props: { colorScheme: ColorSchemeName }) {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.singleLineBolded}>Device is not recognized as a real one.</Text>
      <Text style={styles.singleLineNormal}>Ensure you are not using any simulator.</Text>
      <Text style={styles.singleLineNormal}>Otherwise contact with application owner:</Text>
      <Text style={[styles.singleLineNormal, {fontWeight: 'bold', paddingTop: 20}]}>barimale@github.com</Text>
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
