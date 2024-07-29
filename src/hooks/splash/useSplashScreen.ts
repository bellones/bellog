import { navigationRef } from '@configs/navigation/NavigationRef'
import { StackActions } from '@react-navigation/native'
import { useEffect } from 'react'
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useSplashScreen = () => {
   const spinValue = useSharedValue(0)

   // Animation configurations
   const spinAnimation = useAnimatedStyle(() => {
      return {
         transform: [{rotate: `${spinValue.value}deg`}],
      }
   })

   const navigateTo = setTimeout(() => {
      navigationRef.dispatch(StackActions.replace('Landing'))
   }, 2000)

   // Start animations
   useEffect(() => {
    navigateTo
      spinValue.value = withTiming(360, {
         duration: 3000,
         easing: Easing.out(Easing.exp), // Accelerate the spin
      }) // Spin 360 degrees over 2 seconds


   }, [])

   return {spinAnimation}
}
