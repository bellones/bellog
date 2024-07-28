import { fontStyles, styles } from '@assets/styles'
import { Background, NormalText, Row } from '@assets/styles/Containers'
import { BackButton } from '@components/BackButton'
import { AppStatusBar } from '@components/StatusBar'
import { textlogo } from '@utils/constants'
import React from 'react'
import { Image, KeyboardAvoidingView } from 'react-native'
import { LoginForm } from './components/LoginForm'

export const LoginScreen: React.FC = () => {
   return (
      <Background className="bg-white w-96 h-full">
         <KeyboardAvoidingView>
            <AppStatusBar />

            <Row className="flex-row items-center mt-4">
               <BackButton />
               <NormalText
                  className="text-black text-center ml-4"
                  style={[fontStyles.MontSerratSemiBold, styles.headerText]}>
                  Login
               </NormalText>
            </Row>
            <Image source={textlogo} style={styles.textLogo} />
            <NormalText
               style={[fontStyles.MontSerratSemiBold, styles.headerText]}
               className="text-black text-center mb-8">
               Vamos te conectar!
            </NormalText>

            <LoginForm />
         </KeyboardAvoidingView>
      </Background>
   )
}
