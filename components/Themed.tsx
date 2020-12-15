import * as React from 'react';
import { Text as DefaultText, View as DefaultView, Button as DefaultButton } from 'react-native';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Constants from 'expo-constants';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
  const { lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'tabIconSelected');

  return <DefaultButton color={color} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const Separator = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const borderBottomColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <View style={[{ borderBottomColor }, style, styles.separator]} {...otherProps}/>;
};

export const styles = StyleSheet.create({
  borderedText: {
    borderColor: '#737373',
    borderWidth: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  pageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // marginTop: Constants.statusBarHeight,
    marginBottom: 40
  },
  normalTextWrapper: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  normalTextTouchable: {
    paddingVertical: 15,
  },
  normalText: {
    textAlign: 'center',
  },
  logoWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'space-mono'
  },
});