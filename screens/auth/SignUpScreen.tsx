import * as React from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { View } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';

export default function SignUpScreen() {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [isSigningUp, setIsSigningUp] = React.useState<boolean>(false);

    const { signUp } = React.useContext(AuthContext);
  
    return (
      <View>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Surname"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button disabled={isSigningUp} title="Sign up" onPress={async () => {
            setIsSigningUp(true);
            await signUp({ name, surname, email });
            setIsSigningUp(false);
          }} />
      </View>
    );
  }