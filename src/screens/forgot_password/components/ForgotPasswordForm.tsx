import { fontStyles, styles } from '@assets/styles'
import {
   Button,
   Container,
   Input,
   Inputbox,
   InputContainer,
   NormalText,
} from '@assets/styles/Containers'
import { ForgotPassFormType } from '@data/types/TForgotPassForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForgotPassword } from '@hooks/forgot_password/useForgotPassForm'
import { Controller, useForm } from 'react-hook-form'
import { ActivityIndicator, Text } from 'react-native'
import { SCHEMA } from '../validations'

export const ForgotPasswordForm: React.FC = () => {
   const {control, handleSubmit, formState} = useForm<ForgotPassFormType>({
      resolver: yupResolver(SCHEMA) as any,
   })
   const {handleRecover, isLoading} = useForgotPassword(handleSubmit)
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
            <Inputbox
               className="flex-row bg-white border border-gray-400 items-center rounded-md h-12"
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

         <Button
            className="rounded-md h-12 items-center justify-center mt-4 bottom-0"
            style={styles.redBackground}
            onPress={handleRecover}>
            {isLoading ? (
               <ActivityIndicator color={'white'} />
            ) : (
               <NormalText
                  className="text-white"
                  style={[styles.callText, fontStyles.MontSerratSemiBold]}>
                  Recuperar Senha
               </NormalText>
            )}
         </Button>
      </Container>
   )
}
