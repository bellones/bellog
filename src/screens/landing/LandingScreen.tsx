import { fontStyles, styles } from '@assets/styles'
import {
   Background,
   Button,
   Container,
   NormalText,
   Row,
   TextButton,
} from '@assets/styles/Containers'
import { AppStatusBar } from '@components/StatusBar'
import { useLandingScreen } from '@hooks/index'
import { banner1, googleicon } from '@utils/constants'
import React from 'react'
import { ActivityIndicator, Image, ScrollView } from 'react-native'

export const LandingScreen: React.FC = () => {

   const {  navigateToLogin, navigateToRegister } = useLandingScreen()
   return (
      <Container className="lex-1 bg-white h-full items-center">
         <ScrollView>
            <Background className="flex-1 bg-white h-full items-center">
               <AppStatusBar
                  translucent={true}
                  backgroundColor="transparent"
                  barStyle={'light-content'}
               />

               <Image source={banner1} style={styles.bannerImage} />

               <Button
                  className="bg-white rounded-md h-12 w-96 items-center justify-center  mt-8 border border-gray-400"
                  onPress={() => {}}>
                  {false ? (
                     <ActivityIndicator color={'black'} />
                  ) : (
                     <Row className="flex-row items-center justify-center">
                        <Image source={googleicon} style={styles.googleIcon} />
                        <NormalText
                           className="text-black text-center"
                           style={[
                              styles.callText,
                              fontStyles.MontSerratMedium,
                           ]}>
                           Continuar com o Google
                        </NormalText>
                     </Row>
                  )}
               </Button>

               <Row className="flex-row items-center justify-center mt-4 mb-4">
                  <Container className="border border-gray-300 w-40 h-0  mr-2" />
                  <NormalText
                     style={[styles.callText, fontStyles.MontSerratMedium]}
                     className="text-gray-500">
                     ou
                  </NormalText>
                  <Container className="border border-gray-300 w-40 h-0 ml-2" />
               </Row>
               <Button
                  style={styles.redBackground}
                  className="rounded-md h-12 w-96 items-center justify-center"
                  onPress={navigateToLogin}>
                  {false ? (
                     <ActivityIndicator color={'white'} />
                  ) : (
                     <NormalText
                        className="text-white text-center"
                        style={[styles.callText, fontStyles.MontSerratMedium]}>
                        Faça login
                     </NormalText>
                  )}
               </Button>

               <Row className="flex-row items-center justify-center mt-4 mb-4">
                  <NormalText
                     style={[styles.callText, fontStyles.MontSerratMedium]}
                     className="text-gray-500 mr-1">
                     Não tem uma conta?
                  </NormalText>
                  <TextButton
                     onPress={navigateToRegister}
                     className="rounded-xl h-14 items-center justify-center">
                     <NormalText
                        className="text-red-600 text-center"
                        style={[styles.callText, fontStyles.MontSerratBold]}>
                        Cadastre-se
                     </NormalText>
                  </TextButton>
               </Row>
            </Background>
         </ScrollView>
      </Container>
   )
}
