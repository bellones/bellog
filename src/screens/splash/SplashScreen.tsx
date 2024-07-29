import { styles } from '@assets/styles'
import {
  Background,
  backgroundColor,
  Row
} from '@assets/styles/Containers'
import { AppStatusBar } from '@components/StatusBar'
import { useSplashScreen } from '@hooks/index'
import { blogo, redvector } from '@utils/constants'
import React from 'react'
import { Image } from 'react-native'
import Animated from 'react-native-reanimated'

export const SplashScreen: React.FC = () => {
   const {spinAnimation} = useSplashScreen()
   return (
      <Background
         style={[styles.commonBackground]}
         className="h-full flex flex-1 justify-center items-center">
         <AppStatusBar
            backgroundColor={backgroundColor}
            barStyle="light-content"
         />
         <Row className="flex-row justify-center items-center">
            <Image
               source={blogo}
               style={[styles.logoImage]}
            />
            <Animated.Image
               source={redvector}
               style={[spinAnimation, styles.redvector]}
            />
         </Row>
      </Background>
   )
}
