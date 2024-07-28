

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainStack } from './configs/navigation/MainStackNavigator';
import { navigationRef } from './configs/navigation/NavigationRef';



const queryClient = new QueryClient();
const App = (): React.JSX.Element => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
         <MainStack />
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
