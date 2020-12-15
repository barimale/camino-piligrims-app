import * as React from 'react';

import { Image } from 'react-native';
import logo from '../assets/images/logo300.png';

export function StyledLogo() {
  return <Image source={logo} style={[{ height: 210, width: 220}]} />;
}
