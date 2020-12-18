import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import { SafeAreaView, FlatList } from 'react-native';

import { useState } from 'react';
import { styles } from "./journey/JourneyInProgress";
import SelectedHistory from './history/SelectedJourney';
import { ActivityIndicator } from 'react-native';

interface JourneyInstance{
  startDate: string;
  endDate: string;
  id: string;
}

export function Journey(input: { startDate: string, endDate: string , id: string, onPressed: (data: JourneyInstance)=> void}) {
  return (
    <View style={styles.stampWrapper}>
      <TouchableOpacity onPress={(event: any)=>{
        //TODO: make a mapping to JourneyInstance and execute it higher to the parent
        input.onPressed({startDate: "", endDate: "", id: ""});
      }} style={
          [styles.helpLink,{
          padding: 10, 
          borderRadius: 10, 
          borderWidth: 1, 
          borderStyle: 'dashed'}]}>
        <Text style={styles.dateAndTime}>
          {input.startDate}
        </Text>
        <Text style={styles.stamp}>
          {input.endDate}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function HistoryScreen() {
  //TODO: get id of the user from the context
  const [ alreadyCompletedJourneys, setAlreadyCompletedJourneys] = useState<Array<JourneyInstance>| undefined>(undefined);
  const [ selectedJourney, setSelectedJourney] = useState<JourneyInstance | undefined>(undefined);

  React.useEffect(()=>{
    //TODO: rerender each time tab is choosen by user
    //TODO: get it from backend, subscribe to the event also for a specific End journey event
    setTimeout(()=>{
      setAlreadyCompletedJourneys(new Array<JourneyInstance>());
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {alreadyCompletedJourneys === undefined || alreadyCompletedJourneys.length === 0 ? (
        <View style={{}}>
          {alreadyCompletedJourneys === undefined && (
            <ActivityIndicator size="large" color="black"/>
          )}
          {alreadyCompletedJourneys?.length === 0 && (
            <Text style={styles.dateAndTime}>
              No completed journeys found in the system
            </Text>
          )}
        </View>
      ):(
      selectedJourney !== undefined ? (
        <SelectedHistory selectedJourneyId={selectedJourney.id}/>
      ):(
        <FlatList
          style={{paddingTop: 10}}
          showsVerticalScrollIndicator={false}
          data={alreadyCompletedJourneys}
          renderItem={({ item }) => <Journey 
            startDate={item.startDate}
            endDate={item.endDate}
            id={item.id}
            onPressed={(value: JourneyInstance)=>{
              setSelectedJourney(value);
            }}/>}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={()=><View style={styles.separator} />}
        />)
      )}
    </SafeAreaView>
  );
}