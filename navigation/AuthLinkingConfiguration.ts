import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/auth/')],
  config: {
    screens: {
      Auth: {
        screens: {
          Choose: {
            screens: {
              ChooseScreen: '/auth/choose',
            },
          },
          SignIn: {
            screens: {
              SignInScreen: '/auth/sign-in',
            },
          },
          SignUp: {
            screens: {
              SignUpScreen: '/auth/sign-up',
            },
          },
          SignOut: {
            screens: {
              SignOutScreen: '/auth/sign-out',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
