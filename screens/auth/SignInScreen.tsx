import * as React from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from "../../components/Themed";
import { StyleSheet } from 'react-native';
import { AuthStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';

export default function SignInScreen({navigation}: StackScreenProps<AuthStackParamList, 'SignIn'>) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSigningIn, setIsSigningIn] = React.useState<boolean>(false);

    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View style={styles.pageWrapper}>
        <View style={styles.logoWrapper}>
          <Text style={styles.title}>Bom</Text>
          <Text style={styles.title}>Camino</Text>
          <Text style={styles.title}>!</Text>
        </View>
        <View style={innerStyles.buttonWrapper}>
          <Text>
            Unique ID
          </Text>
          <TextInput
            style={styles.borderedText}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={innerStyles.buttonWrapper}>
          <Text>
            Repeat unique ID
          </Text>
          <TextInput
            style={styles.borderedText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={innerStyles.buttonWrapper}>
          <Button disabled={isSigningIn} title="Sign in" onPress={async () => {
              setIsSigningIn(true);
              await signIn({ username, password });
              setIsSigningIn(false);
            }} />
        </View>
      </View>
    );
  }

  const innerStyles = StyleSheet.create({
    buttonWrapper: {
      paddingTop: 16,
      height: '20%',
      width: '80%',
    }
  });