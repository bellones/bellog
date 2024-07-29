import { CreateAccountFormType } from "@data/types/TCreateAccountForm";
import { useLoadingRequest } from "@hooks/loading/useLoadingRequest";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

export const useCreateAccountForm = (handleSubmit: UseFormHandleSubmit<CreateAccountFormType, undefined>) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(true);
    const navigation = useNavigation();
  
    const handleVisible = () => {
      setIsVisible(!isVisible);
    };
  
    const handleConfirmationVisible = () => {
      setIsConfirmationVisible(!isConfirmationVisible);
    };
    const {apiRequest: handleRegister, isLoading} = useLoadingRequest({
      apiFunc: handleSubmit( async (values: CreateAccountFormType) => {
        // await createUser(values.email, values.password);
        navigation.dispatch(
          StackActions.replace('Tabs')
        );
  
      }),
      errorFunc: err => {
        console.log('err', err);
      },
    });
  
    return {
      isVisible,
      isConfirmationVisible,
      handleVisible,
      handleConfirmationVisible,
      handleRegister,
      isLoading,
    };
  };

  