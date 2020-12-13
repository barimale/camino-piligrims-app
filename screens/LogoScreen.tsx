import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorSchemeName } from 'react-native';

export default function LogoScreen(props: { colorScheme: ColorSchemeName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAMINO DIGITAL CREDENTIAL LOGO</Text>
      <Text style={styles.linkText}>{props.colorScheme}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
