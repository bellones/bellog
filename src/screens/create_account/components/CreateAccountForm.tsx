import { fontStyles, styles } from "@assets/styles";
import { Button, Container, Input, Inputbox, InputContainer, NormalText } from "@assets/styles/Containers";
import { CreateAccountFormType } from "@data/types/TCreateAccountForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateAccountForm } from "@hooks/create_account/useCreateAccountForm";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Pressable, Text } from "react-native";
import { LockClosedIcon, LockOpenIcon } from "react-native-heroicons/outline";
import { SCHEMA } from "../validations";

export const CreateAccountForm: React.FC = () => {
    const {control, handleSubmit, formState} = useForm<CreateAccountFormType>({
        resolver: yupResolver(SCHEMA) as any,
      });
    
      const {
        handleVisible,
        isVisible,
        isConfirmationVisible,
        handleConfirmationVisible,
        handleRegister,
        isLoading,
      } = useCreateAccountForm(handleSubmit);
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

        <InputContainer className="mt-4">
           <NormalText
              className="text-gray-500 mb-1 ml-1"
              style={[styles.callText, fontStyles.MontSerratBold]}>
              Confirme Senha:
           </NormalText>
           <Inputbox className="flex-row bg-white border border-gray-400 items-center rounded-md h-12"
                style={!!formState.errors.confirmPassword && styles.errorBorder}>
           
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
                          placeholder="Confirme sua senha"
                          style={[
                             fontStyles.MontSerratRegular,
                             styles.normaltext,
                          ]}
                       />
                       <Pressable onPress={handleConfirmationVisible}>
                          {isVisible ? (
                             <LockClosedIcon style={styles.rigthIcon} />
                          ) : (
                             <LockOpenIcon style={styles.rigthIcon} />
                          )}
                       </Pressable>
                    </>
                 )}
                 name="confirmPassword"
                 defaultValue=""
              />
           </Inputbox>
           {!!formState.errors.confirmPassword && (
              <Text style={styles.errorMessage}>
                 {formState.errors.confirmPassword.message}
              </Text>
           )}
        </InputContainer>

    

          <Button
            className="rounded-md h-12 items-center justify-center mt-8"
            style={styles.redBackground}
            onPress={handleRegister}>
            {isLoading ? (
               <ActivityIndicator color={'white'} />
            ) : (
               <NormalText
                  className="text-white"
                  style={[styles.callText, fontStyles.MontSerratSemiBold]}>
                  Cadastrar
               </NormalText>
            )}
         </Button>
        </Container>
      );
    };
