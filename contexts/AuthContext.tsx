import React, { createContext, useEffect, useReducer, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Instance } from "../services/identity-provider";

interface AuthContextType {
    signIn: (input: {username: string, password: string}) => Promise<void>;
    signOut: () => void;
    signUp: (input: {name: string, surname: string, email: string}) => Promise<void>;
    userToken: string | null;
    isLoading: boolean;
    isSignedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                isSignedIn: true,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                isSignedIn: false,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          isSignedIn: false,
          userToken: null,
        }
      );
    
      useEffect(() => {
        const bootstrapAsync = async () => {
          let userToken;
    
          try {
            userToken = await AsyncStorage.getItem('userToken');
          } catch (e) {
            console.log(e);
            userToken = null;
          } finally {
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
          }
        };
    
        bootstrapAsync();
      }, []);
    
      const authContext = useMemo(
        () => ({
          signIn: async (data: {username: string, password: string}) => {
            // In a production app, 
            // we need to send some data (usually username, password)
            // to server and get a token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: async () => {
              try{
                await AsyncStorage.removeItem('userToken', (error: any)=>{
                    console.log(error);
                    return;
                });
                dispatch({ type: 'SIGN_OUT' })
              }catch(e){
                console.log(e);
              }
            },
          signUp: async (data: any) => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
            
            //add SignIn to dispatcher

            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          userToken: state.userToken as string,
          isLoading: state.isLoading as boolean,
          isSignedIn: state.isSignedIn as boolean
        }
        ),
        []
      );

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };