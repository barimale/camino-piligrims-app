import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as networkService from "../services/network/networkService";

interface JourneyContextType {
    isStarting: boolean;
    isStarted: boolean;
    signOut: () => void;
}

const JourneyContext = createContext<JourneyContextType>({} as JourneyContextType);

const JourneyContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(
        (prevState: any, action: any) => {
          switch (action.type) {
            case 'STARTING':
              return {
                ...prevState,
                isStarting: true,
                isStarted: false,
              };
            case 'STARTED':
              return {
                ...prevState,
                isStarted: true,
                isStarting: false,
              };
            case 'PENDING':
              return {
                ...prevState,
                isStarting: false,
                isStarted: false,
              };
          }
        },
        {
          isStarting: false,
          isStarted: false
        }
      );
    
      useEffect(() => {
        const checkIfAlreadySignedIn = async () => {
          dispatch({ type: 'STARTING' });
        };
    
        checkIfAlreadySignedIn();
      }, []);
    
      const journeyContext = ({
          signIn: async (data: {username: string, password: string}) => {
            dispatch({ type: 'STARTED' });
          },
          signOut: async () => {
            dispatch({ type: 'PENDING' });
          },
          isStarting: state.isStarting as boolean,
          isStarted: state.isStarted as boolean
        });

    return (
        <JourneyContext.Provider value={journeyContext}>
            {children}
        </JourneyContext.Provider>
    )
}

export { JourneyContext, JourneyContextProvider };