import { Background, Row } from '@assets/styles/Containers'
import { BackButton } from '@components/BackButton'
import { AppStatusBar } from '@components/StatusBar'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

export const LoginScreen: React.FC = () => {
   return (
      <Background className="bg-white w-96 h-full">
         <KeyboardAvoidingView>
            <AppStatusBar />
           <Row className='flex-row'>
             <BackButton />
           </Row>
         </KeyboardAvoidingView>
      </Background>
   )
}
