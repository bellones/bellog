
import React from 'react';
import { StatusBar } from 'react-native';

import { StatusBarStyle } from 'react-native';

interface IAppStatusBar {
  backgroundColor?: string;
  barStyle?: StatusBarStyle | null | undefined;
  translucent?: boolean;
  transparent?: boolean;
}

export const AppStatusBar = ({backgroundColor, barStyle, translucent,transparent }: IAppStatusBar) => {
  return (
    <StatusBar
      translucent={translucent ?? false}
      backgroundColor={
        backgroundColor !== undefined ? backgroundColor : 'white'
      }
      barStyle={
        barStyle !== undefined ? barStyle : 'dark-content'
      }
    />
  );
};
