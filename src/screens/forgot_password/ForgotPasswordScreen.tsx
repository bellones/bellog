import { fontStyles, styles } from '@assets/styles'
import { Background, NormalText, Row } from '@assets/styles/Containers'
import { BackButton } from '@components/BackButton'
import { AppStatusBar } from '@components/StatusBar'
import { amico } from '@utils/constants'
import React from 'react'
import { Image, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ForgotPasswordForm } from './components/ForgotPasswordForm'

export const ForgotPasswordScreen: React.FC = () => {
   return (

      <Background className=" flex-1  flex bg-white h-full">
         <KeyboardAvoidingView>
         <SafeAreaView>
            <AppStatusBar />

            <Row className="flex-row items-center mt-4">
               <BackButton />
               <NormalText
                  className="text-black text-center ml-4"
                  style={[fontStyles.MontSerratSemiBold, styles.headerText]}>
                  Recuperar senha
               </NormalText>
            </Row>
            <Image source={amico} style={styles.amico} />
            <NormalText
               className="text-black text-left mt-8 w-60 ml-5 mb-4 "
               style={[styles.normaltext, fontStyles.MontSerratRegular]}>
               Você receberá instruções de como obter uma nova senha
            </NormalText>
            <ForgotPasswordForm />
            </SafeAreaView>
         </KeyboardAvoidingView>
      </Background>

   )
}
