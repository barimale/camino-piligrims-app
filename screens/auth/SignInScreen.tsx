import * as React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Separator } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';
import { styles } from "../../components/Themed";
import { StyleSheet } from 'react-native';
import { AuthStackParamList } from '../../types';
import { StackScreenProps } from '@react-navigation/stack';
import * as Colors from "../../constants/Colors";

export default function SignInScreen({navigation}: StackScreenProps<AuthStackParamList, 'SignIn'>) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSigningIn, setIsSigningIn] = React.useState<boolean>(false);

    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View style={styles.pageWrapper}>
        <View style={{marginTop: 20}}>
          <Text style={[styles.title]}>Sign in</Text>
        </View>
          <View style={innerStyles.buttonWrapper}>
            <Text>
              Piligrim ID
            </Text>
            <TextInput
              style={[styles.borderedText, {backgroundColor: Colors.default.light.tabIconDefault}]}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <Separator/>
          <View style={[innerStyles.buttonWrapper, styles.borderedText, {marginTop: 30, backgroundColor: '#C1272D', marginBottom: 40, borderRadius: 10}]}>
            <TouchableOpacity
              onPress={async () => {
                setIsSigningIn(true);
                await signIn({ username, password });
                setIsSigningIn(false);
              }}>
              <View style={{backgroundColor: 'transparent'}}>
                <Text style={[styles.normalText, {color: 'white', fontSize: 20, fontWeight: 'bold'}]}>LOGIN</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  const innerStyles = StyleSheet.create({
    normalTextWrapper: {
      marginTop: 10,
      marginHorizontal: 10,
      alignItems: 'center',
      textAlignVertical: 'center'
    },
    buttonWrapper: {
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center',
      width: '80%',
    },
    slimButtonWrapper: {
      borderRadius: 10,
      textAlign: 'center',
      width: '80%',
    }
  });