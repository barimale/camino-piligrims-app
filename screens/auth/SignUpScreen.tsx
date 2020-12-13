import * as React from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';
import { StyleSheet } from 'react-native';
import { styles } from "../../components/Themed";

export default function SignUpScreen() {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [isSigningUp, setIsSigningUp] = React.useState<boolean>(false);

    const { signUp } = React.useContext(AuthContext);
  
    return (
      <View style={styles.pageWrapper}>
        <View style={styles.logoWrapper}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>Peligrino</Text>
          <Text style={styles.title}>!</Text>
        </View>
        <View style={innerStyles.buttonWrapper}>
          <Text>
            Name
          </Text>
          <TextInput
            style={styles.borderedText}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={innerStyles.buttonWrapper}>
          <Text>
            Surname
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
        <View style={innerStyles.buttonWrapper}>
          <Button disabled={isSigningUp} title="Sign up" onPress={async () => {
              setIsSigningUp(true);
              await signUp({ name, surname, email });
              setIsSigningUp(false);
            }} />
        </View>
      </View>
    );
  }

  const innerStyles = StyleSheet.create({
    buttonWrapper: {
      paddingTop: 16,
      height: '15%',
      width: '80%',
    }
  });