import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorSchemeName } from 'react-native';
import { StyledLogo } from "../components/StyledLogo";

export default function LogoScreen(props: { colorScheme: ColorSchemeName }) {
  return (
    <View style={styles.logoContainer}>
      <StyledLogo /> 
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});
