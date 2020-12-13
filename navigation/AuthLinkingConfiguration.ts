import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      SignUp: '/auth/sign-up',
      SignIn: '/auth/sign-in',
      Choose: '/auth',
      NotFound: '*',
    },
  },
};
