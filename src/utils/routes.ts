import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import {
   CreateAccountScreen,
   ForgotPasswordScreen,
   LoginScreen,
   ProfileScreen,
   SplashScreen,
} from '@screens/index'

const options: NativeStackNavigationOptions = {gestureEnabled: false}
export const routes = {
   Splash: {
      component: SplashScreen,
      props: {},
      options: {headerShown: false, ...options},
   },
   CreateAccount: {
      component: CreateAccountScreen,
      props: {},
      options: {headerShown: false, ...options},
   },

   Landing: {
      component: SplashScreen,
      props: {},
      options: {headerShown: false, ...options},
   },

   Login: {
      component: LoginScreen,
      props: {},
      options: {headerShown: false, ...options},
   },

   ForgotPassword: {
      component: ForgotPasswordScreen,
      props: {},
      options: {headerShown: false, ...options},
   },
   Profile: {
      component: ProfileScreen,
      props: {},
      options: {headerShown: false, ...options},
   },
}
