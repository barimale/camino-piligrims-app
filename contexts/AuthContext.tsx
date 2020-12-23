import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as networkService from "../services/networkService";

interface AuthContextType {
    signIn: (input: {username: string, password: string}) => Promise<void>;
    signOut: () => void;
    signUp: (input: {name: string, surname: string, email: string}) => Promise<void>;
    userToken: string | null;
    isSignedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const TOKEN_KEY = 'userToken';

const AuthContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
          switch (action.type) {
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignedIn: true,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignedIn: false,
                userToken: null,
              };
          }
        },
        {
          isSignedIn: false,
          userToken: null,
        }
      );
    
      useEffect(() => {
        const checkIfAlreadySignedIn = async () => {
          let piligrimId: string | null = null;
    
          try {
            const result = await SecureStore.isAvailableAsync();

            if(result){
              piligrimId = await SecureStore.getItemAsync(TOKEN_KEY);
            }
            else{
              piligrimId = await AsyncStorage.getItem(TOKEN_KEY);
            }
            
          } catch (e) {
            console.log(e);
          } finally {
            if(piligrimId !== null){
              dispatch({ type: 'SIGN_IN', token: piligrimId });
            }
            else{
              dispatch({ type: 'SIGN_OUT' });
            }
          }
        };
    
        checkIfAlreadySignedIn();
      }, []);
    
      const authContext = ({
          signIn: async (data: {username: string, password: string}) => {
            const secret = await networkService.SignIn();
            const piligrimId = "finalPiligrimIdFromFabricCaEtc";

            const result = await SecureStore.isAvailableAsync();
                
            if(result){
              await SecureStore.setItemAsync(TOKEN_KEY, piligrimId);
              console.log('securelly saved');
            }
            else{
              await AsyncStorage.setItem(TOKEN_KEY, piligrimId);
            }

            console.log('before signin');
            await dispatch({ type: 'SIGN_IN', token: piligrimId });
          },
          signOut: async () => {
              try{
                
                const result = await SecureStore.isAvailableAsync();
                
                if(result){
                  await SecureStore.deleteItemAsync(TOKEN_KEY);
                  console.log('securelly deleted');
                }
                else{
                  await AsyncStorage.removeItem(TOKEN_KEY, (error: any)=>{
                    console.log(error);
                  });
                }
                console.log('before signout');

                await dispatch({ type: 'SIGN_OUT' });
                console.log('after signout');
              }catch(e){
                console.log(e);
              }
            },
          signUp: async (data: any) => {
            // In a production app, we need to send user data to server and get a token
            console.log('start signup');
            // try{
            //   var resultasync = await GatewayInstance.getNetwork("peer");
            //   console.log(resultasync);
            // }
            // catch(error){
            //   console.log(error);
            // }

            const piligrimId = "finalPiligrimIdFromFabricCaEtc";
            const result = await SecureStore.isAvailableAsync();
                
            if(result){
              await SecureStore.setItemAsync(TOKEN_KEY, piligrimId);
            }
            else{
              await AsyncStorage.setItem(TOKEN_KEY, piligrimId);
            }

            await dispatch({ type: 'SIGN_IN', token: piligrimId });
            console.log('finish signup');
          },
          userToken: state.userToken as string,
          isSignedIn: state.isSignedIn as boolean
        });

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };