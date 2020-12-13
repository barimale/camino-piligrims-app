import * as React from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { View } from '../../components/Themed';
import { AuthContext } from '../../contexts/AuthContext';

export default function RememberPasswordScreen() {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [isSigningUp, setIsSigningUp] = React.useState<boolean>(false);

    const { signUp } = React.useContext(AuthContext);
  
    return (
      <View>
        <TextInput
          placeholder="RememberPasswordScreen"
          value={name}
          onChangeText={setName}
        />
      </View>
    );
  }