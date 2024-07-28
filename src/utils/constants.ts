import { MMKV } from "react-native-mmkv";

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const storage = new MMKV();



export const responsiveWidth = (width: number) => wp(width);
export const responsiveHeight = (height: number) => hp(height);
export const blogo = require('@assets/images/blogo.png');
export const logo = require('@assets/images/logo.png');
export const redvector = require('@assets/images/redvector.png');
export const googleicon = require('@assets/images/google_icon.png');
export const textlogo = require('@assets/images/text_logo.png');
export const banner1 = require('@assets/images/banner1.png');
export const amico = require('@assets/images/amico.png');
