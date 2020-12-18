import * as React from 'react';
import { useState } from 'react';

import { View } from '../../../components/Themed';
import { SafeAreaView, FlatList } from 'react-native';

import { Stamp, StampInstance, styles } from "../journey/JourneyInProgress";

export default function SelectedJourneyScreen(props: {selectedJourneyId: string}) {
  const { selectedJourneyId } = props;
  const [stamps, setStamps] = useState<Array<StampInstance>|undefined>(undefined);

  React.useEffect(()=>{
    //TODO: query get stamps from completed journey by its id
    setStamps(new Array<StampInstance>());
  }, [selectedJourneyId]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        data={stamps}
        renderItem={({ item }) => <Stamp stamp={item.stamp} date={item.date}/>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={()=><View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}


