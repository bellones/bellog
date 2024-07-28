import { navigationRef } from '@configs/navigation/NavigationRef'
import { StackActions } from '@react-navigation/native'

export const useLandingScreen = () => {
   const navigateToLogin = () => {
      navigationRef.dispatch(StackActions.push('Login'))
   }
   const navigateToRegister = () => {
      navigationRef.dispatch(StackActions.push('CreateAccount'))
   }

   return {navigateToLogin, navigateToRegister}
}
