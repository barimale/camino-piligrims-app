import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from '../../../components/Themed';

import logo from '../../../assets/images/logo100squared.png';
import { ListenerComponent } from '../../../services/identity-provider';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export interface StampInstance {
  id: string,
  stamp: string,
  date: string
}

export function Stamp(input: { stamp: string, date: string }) {
  return (
    <View style={styles.stampWrapper}>
      <Text style={styles.dateAndTime}>
        {input.date}
      </Text>
      <Text style={styles.stamp}>
        {input.stamp}
      </Text>
    </View>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    stamp: 'Ponte De Lima',
    date: '22.12.2020'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bv',
    stamp: 'Vila de Conde',
    date: '13.12.2020'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    stamp: 'Vaiaro',
    date: '12.12.2020'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    stamp: 'Oporto',
    date: '11.12.2020'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bq',
    stamp: 'Lisbon',
    date: '07.12.2020'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bw',
    stamp: 'Fatima',
    date: '04.12.2020'
  },
];

export default function JourneyInProgressSubScreen() {
  const [alreadyCollected, setAlreadyCollected] = useState<Array<StampInstance> | undefined>(undefined);
  const [isActive, setIsActive] = useState<boolean>(false);

  React.useEffect(() => {
    const getCollectedStamps = async () => {
      // TODO: get data from backend
      setAlreadyCollected(DATA);
    }

    getCollectedStamps();
  }, []); 
  
  return (
    <View style={styles.helpContainer}>
      <ListenerComponent
        address={"127.0.0.1"}
        port={"3000"}
        isActive={isActive}
        onEvent={(data: StampInstance)=> {
          setAlreadyCollected(alreadyCollected?.concat([data]));
        }}>
        <FlatList
          style={{paddingTop: 10}}
          showsVerticalScrollIndicator={false}
          data={alreadyCollected}
          renderItem={({ item }) => <Stamp stamp={item.stamp} date={item.date}/>}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={()=><View style={styles.separator} />}
        />
      </ListenerComponent>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  dateAndTime: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 3,
    textAlign: 'right',
    fontSize: 10,
  },
  stamp: {
    paddingTop: 0,
    paddingBottom: 16,
    fontSize: 40,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'normal',
  },
  stampWrapper: {
    borderColor: 'black',
    borderWidth: 1
  },
  scrollView: {
    width: '90%',
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    marginTop: 10,
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '100%',
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'black'
  },
});
