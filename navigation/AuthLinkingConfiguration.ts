import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/auth/')],
  config: {
    screens: {
      Auth: {
        ChooseScreen: '/auth/',
        screens: {
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
