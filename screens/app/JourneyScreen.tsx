import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../components/Themed';
import { useFocusEffect } from '@react-navigation/native';

import JourneyInProgressSubScreen from "./journey/JourneyInProgress";
import StartJourneySubScreen from "./journey/StartJourney";
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

enum JourneyState {
  PENDING,
  STARTED,
  NOTKNOWN
}

export default function JourneyScreen() {
  const [journeyState, setJourneyState] = useState<JourneyState>(JourneyState.NOTKNOWN);

  useFocusEffect(() => {
    const getLastActiveJourney = async () => {
      // TODO: get the journey and its msContentScript, for now, not started
      setJourneyState(JourneyState.PENDING);
    }

    getLastActiveJourney();
  });

  return (
    <View style={styles.container}>
      {journeyState === JourneyState.NOTKNOWN && (
        <>
          <ActivityIndicator size="large" color="black" />
          <Text>
            Loading...
          </Text>
        </>
      )}
      {journeyState === JourneyState.STARTED && (
        <JourneyInProgressSubScreen/>
      )}
      {journeyState === JourneyState.PENDING && (
        // TODO: wrap it by listener rerender on event new journey started
        <StartJourneySubScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
