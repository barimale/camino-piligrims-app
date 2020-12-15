import * as React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Separator } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from "../../components/Themed";
import { StyleSheet } from 'react-native';
import { AuthStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import { StyledLogo } from '../../components/StyledLogo';

export default function SignInScreen({navigation}: StackScreenProps<AuthStackParamList, 'SignIn'>) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSigningIn, setIsSigningIn] = React.useState<boolean>(false);

    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View style={styles.pageWrapper}>
      <View style={{marginTop: 20}}>
        <Text style={[styles.title, {textAlign: 'left'}]}>Sign in!</Text>
      </View>
        <View style={styles.logoWrapper}>
          <StyledLogo />
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
          <Separator/>
          <View style={[innerStyles.buttonWrapper, styles.borderedText, {marginBottom: 40}]}>
            <TouchableOpacity
              onPress={async () => {
                setIsSigningIn(true);
                await signIn({ username, password });
                setIsSigningIn(false);
              }}>
              <View style={styles.normalTextWrapper}>            
                <Text style={styles.normalText}>Login</Text>           
              </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  const innerStyles = StyleSheet.create({
    buttonWrapper: {
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center',
      height: '10%',
      width: '80%',
    }
  });