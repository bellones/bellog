import { navigationRef } from "@configs/navigation/NavigationRef";
import { ForgotPassFormType } from "@data/types/TForgotPassForm";
import { useLoadingRequest } from "@hooks/loading/useLoadingRequest";
import { StackActions } from "@react-navigation/native";
import { UseFormHandleSubmit } from "react-hook-form";

export const useForgotPassword = (handleSubmit: UseFormHandleSubmit<ForgotPassFormType, undefined>) => {
   
    const {apiRequest: handleRecover, isLoading} = useLoadingRequest({
      apiFunc: handleSubmit(async (values: ForgotPassFormType) => {
        // await recoverPassword(values.email);
        navigationRef.dispatch(StackActions.push('Login'));
      }),
      errorFunc: err => {
        console.log('err', err);
      },
    });
  
    return {
      handleRecover,
      isLoading,
    };
  };