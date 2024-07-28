import { fontStyles, styles } from '@assets/styles'
import {
   Button,
   Container,
   Input,
   Inputbox,
   InputContainer,
   NormalText,
   Row,
} from '@assets/styles/Containers'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { ActivityIndicator, Image, Pressable, Text } from 'react-native'
import { LockClosedIcon, LockOpenIcon } from 'react-native-heroicons/outline'
import { SCHEMA } from '../validations'

import { LoginFormValuesType } from '@data/types/TLoginForm'
import { useLoginForm } from '@hooks/login/useLoginForm'
import { googleicon } from '@utils/constants'
import { Controller, useForm } from 'react-hook-form'

export const LoginForm: React.FC = () => {
   const {control, handleSubmit, formState} = useForm<LoginFormValuesType>({
      resolver: yupResolver(SCHEMA) as any,
   })

   const {
      handleLogin,
      isLoading,
      handleVisible,
      isVisible,
      navigateToForgotPassword,
      navigateToRegister,
   } = useLoginForm(handleSubmit)
   return (
      <Container
         className="flex justify-center self-center"
         style={styles.normalWidth}>
         <InputContainer className="flex mb-4">
            <NormalText
               className="text-gray-500 mb-1 ml-1"
               style={[styles.callText, fontStyles.MontSerratBold]}>
               Email:
            </NormalText>
            <Inputbox className="flex-row bg-white border border-gray-400 items-center rounded-md h-12"
            
            style={!!formState.errors.email && styles.errorBorder}>
               <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                     <>
                        <Input
                           className="flex-1 pl-2 text-black"
                           keyboardType="email-address"
                           autoCapitalize="none"
                           onChangeText={onChange}
                           placeholderTextColor={'gray'}
                           value={value}
                           placeholder="Digite seu email"
                           style={[
                              fontStyles.MontSerratRegular,
                              styles.normaltext,
                           ]}
                        />
                     </>
                  )}
                  name="email"
                  defaultValue=""
               />
            </Inputbox>
            {!!formState.errors.email && (
               <Text style={styles.errorMessage}>
                  {formState.errors.email.message}
               </Text>
            )}
         </InputContainer>
         <InputContainer>
            <NormalText
               className="text-gray-500 mb-1 ml-1"
               style={[styles.callText, fontStyles.MontSerratBold]}>
               Senha:
            </NormalText>
            <Inputbox className="flex-row bg-white border border-gray-400 items-center rounded-md h-12"
                 style={!!formState.errors.password && styles.errorBorder}>
            
               <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                     <>
                        <Input
                           className="flex-1 pl-2 text-black"
                           keyboardType="default"
                           secureTextEntry={isVisible}
                           onChangeText={onChange}
                           value={value}
                           placeholderTextColor={'gray'}
                           placeholder="Digite sua senha"
                           style={[
                              fontStyles.MontSerratRegular,
                              styles.normaltext,
                           ]}
                        />
                        <Pressable onPress={handleVisible}>
                           {isVisible ? (
                              <LockClosedIcon style={styles.rigthIcon} />
                           ) : (
                              <LockOpenIcon style={styles.rigthIcon} />
                           )}
                        </Pressable>
                     </>
                  )}
                  name="password"
                  defaultValue=""
               />
            </Inputbox>
            {!!formState.errors.password && (
               <Text style={styles.errorMessage}>
                  {formState.errors.password.message}
               </Text>
            )}
         </InputContainer>
         <Button
            className="rounded-md h-12 items-center justify-center mt-4 bottom-0"
            style={styles.redBackground}
            onPress={handleLogin}>
            {isLoading ? (
               <ActivityIndicator color={'white'} />
            ) : (
               <NormalText
                  className="text-white"
                  style={[styles.callText, fontStyles.MontSerratSemiBold]}>
                  Entrar
               </NormalText>
            )}
         </Button>

         <Button
            className="bg-white rounded-md h-12 items-center justify-center  mt-8 border border-gray-400"
            onPress={() => {}}>
            {false ? (
               <ActivityIndicator color={'black'} />
            ) : (
               <Row className="flex-row items-center justify-center">
                  <Image source={googleicon} style={styles.googleIcon} />
                  <NormalText
                     className="text-black text-center"
                     style={[styles.callText, fontStyles.MontSerratMedium]}>
                     Continuar com o Google
                  </NormalText>
               </Row>
            )}
         </Button>

         <Row className="flex-row justify-center mt-8 px-1">
            <Pressable onPress={navigateToForgotPassword}>
               <NormalText
                  className="text-black mb-2 mt-2 ml-1 mr-1"
                  style={[styles.normaltext, fontStyles.MontSerratSemiBold]}>
                  Esqeuceu a Senha?{' '}
                  <NormalText
                     className="text-red-700 mb-2 mt-2"
                     style={[styles.normaltext, fontStyles.MontSerratSemiBold]}>
                     Clique aqui
                  </NormalText>
               </NormalText>
            </Pressable>
         </Row>
      </Container>
   )
}
