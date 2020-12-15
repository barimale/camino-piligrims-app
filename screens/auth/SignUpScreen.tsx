import * as React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Separator } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';
import { StyleSheet } from 'react-native';
import { styles } from "../../components/Themed";
import { StyledLogo } from '../../components/StyledLogo';

export default function SignUpScreen() {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [isSigningUp, setIsSigningUp] = React.useState<boolean>(false);

    const { signUp } = React.useContext(AuthContext);
  
    return (
      <View style={styles.pageWrapper}>
      <View style={{marginTop: 20}}>
        <Text style={[styles.title, {textAlign: 'left'}]}>Sign up!</Text>
      </View>
      <View style={styles.logoWrapper}>
        <StyledLogo />
      </View>
        <View style={innerStyles.buttonWrapper}>
          <Text>
            Name:
          </Text>
          <TextInput
            style={styles.borderedText}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={innerStyles.buttonWrapper}>
          <Text>
            Surname:
          </Text>
          <TextInput
            style={styles.borderedText}
            value={surname}
            onChangeText={setSurname}
          />
        </View>
        <View style={innerStyles.buttonWrapper}>
          <Text>
            Email:
          </Text>
          <TextInput
            style={styles.borderedText}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Separator/>
        <View style={[innerStyles.buttonWrapper, styles.borderedText, {marginBottom: 40}]}>
          <TouchableOpacity
            onPress={async () => {
              setIsSigningUp(true);
              await signUp({ name, surname, email });
              setIsSigningUp(false);
            }}>
            <View style={styles.normalTextWrapper}>            
              <Text style={styles.normalText}>Register</Text>           
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