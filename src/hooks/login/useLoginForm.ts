import { navigationRef } from "@configs/navigation/NavigationRef";
import { LoginFormValuesType } from "@data/types/TLoginForm";
import { useLoadingRequest } from "@hooks/loading/useLoadingRequest";
import { StackActions } from "@react-navigation/native";
import { useState } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

export const useLoginForm =   (handleSubmit: UseFormHandleSubmit<LoginFormValuesType, undefined>) => {

  
    const [isVisible, setIsVisible] = useState(true);
  
    const navigateToRegister = () => {
        navigationRef.dispatch(StackActions.push('CreateAccount'));
    
    };
    const navigateToForgotPassword = () => {
        navigationRef.dispatch(StackActions.push('ForgotPassword'));
    };
  
    const handleVisible = () => {
      setIsVisible(!isVisible);
    };
    const {apiRequest: handleLogin, isLoading} = useLoadingRequest({
      apiFunc: handleSubmit( async (values: LoginFormValuesType) => {
      // await signIn(values.email, values.password);
        // const user =  await getUser();
        const user = null;
        if (user) {
          navigationRef.dispatch(
            StackActions.replace('Tabs')
          );
        }
  
      }),
      errorFunc: err => {
        console.log(err);
      },
    });
  
    return {
      handleLogin,
      isLoading,
      isVisible,
      handleVisible,
      navigateToRegister,
      navigateToForgotPassword,
    };
}