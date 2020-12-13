import * as React from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { View } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';

export default function SignInScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isSigningIn, setIsSigningIn] = React.useState<boolean>(false);

    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button disabled={isSigningIn} title="Sign in" onPress={async () => {
            setIsSigningIn(true);
            await signIn({ username, password });
            setIsSigningIn(false);
          }} />
      </View>
    );
  }