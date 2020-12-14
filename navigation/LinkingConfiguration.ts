import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Journey: {
            screens: {
              JourneyScreen: '/app/journey',
            },
          },
          History: {
            screens: {
              HistoryScreen: '/app/history',
            },
          },
        },
      },
      NotFound: '*',
      SignOut: '/auth/choose',
    },
  },
};
