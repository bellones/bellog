

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '@utils/routes';
import React, { ComponentType } from 'react';


const screenOptions = {
  cardStyle: {backgroundColor: 'white'},
  headerShown: false,
};
const Stack = createNativeStackNavigator();

  export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Splash">
      {Object.entries({
        ...routes,
      }).map(([name, props]) => {
        return (
          <Stack.Screen
            key={name}
            name={name}
            getComponent={() => {
              const cmp = (props as { component: ComponentType }).component;
              return cmp;
            }}
            options={(props as { options: any }).options}
          />
        );
      })}
    </Stack.Navigator>
  );
};


