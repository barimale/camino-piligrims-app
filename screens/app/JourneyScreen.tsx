import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';

import JourneyInProgressSubScreen from "./journey/JourneyInProgress";
import StartJourneySubScreen from "./journey/StartJourney";
import { useState } from 'react';

export default function JourneyScreen() {
  const [isStarted, setIsStarted] = useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const getLastActiveJourney = async () => {
      // TODO: get the journey and its msContentScript, for now, not started
      setIsStarted(false);
    }

    getLastActiveJourney();
  }, []);

  return (
    <View style={styles.container}>
      {isStarted ? (
        <JourneyInProgressSubScreen/>
      ):(
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
