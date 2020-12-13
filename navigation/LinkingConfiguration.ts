import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: '/app/one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: '/app/two',
            },
          },
        },
      },
      NotFound: '*',
      SignOut: '/',
    },
  },
};
