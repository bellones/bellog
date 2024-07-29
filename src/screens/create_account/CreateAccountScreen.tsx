import { fontStyles, styles } from '@assets/styles'
import { Background, NormalText, Row, Title } from '@assets/styles/Containers'
import { BackButton } from '@components/BackButton'
import { AppStatusBar } from '@components/StatusBar'
import { textlogo } from '@utils/constants'
import React from 'react'
import { Image, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { CreateAccountForm } from './components/CreateAccountForm'

export const CreateAccountScreen: React.FC = () => {
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
                  Cadastro
               </NormalText>
            </Row>
            <Image source={textlogo} style={styles.textLogo} />

            <Title
               className="text-black 500 mt-2 ml-5"
               style={[fontStyles.MontSerratSemiBold, , styles.backText]}>
               Crie sua conta
            </Title>
            <NormalText className="text-neutral-600 mb-4 ml-6">
               Preencha os campos abaixo para criar sua conta
            </NormalText>
            <CreateAccountForm  />
            </SafeAreaView>
         </KeyboardAvoidingView>
      </Background>
   )
}
