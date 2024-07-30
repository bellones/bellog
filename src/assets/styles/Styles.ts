import { responsiveHeight, responsiveWidth } from '@utils/constants'
import { Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
   backIcon: {
      width: responsiveWidth(6),
      color: 'gray',
   },
   imageContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
   },
   image: {
      width: 64,
      height: 64,
      resizeMode: 'contain',
   },
   titletext: {
      fontSize: responsiveWidth(10),
      fontWeight: 'bold',
   },
   title: {
      fontSize: responsiveWidth(10),
   },
   upperText: {
      fontSize: responsiveWidth(8),
   },
   backText: {
      fontSize: responsiveWidth(6),
   },
   headerText: {
      fontSize: responsiveWidth(5),
   },
   normaltext: {
      fontSize: responsiveWidth(3.2),
      fontWeight: 'normal',
   },
   callText: {
      fontSize: responsiveWidth(3.6),
   },
   callTextBold: {
      fontSize: responsiveWidth(3.6),
      fontWeight: 'bold',
   },
   errorMessage: {
      color: 'red',
      fontSize: responsiveWidth(3.2),
      marginTop: 8,
      marginBottom: 8,
   },
   backgroundImage: {
      width: '100%',
      height: 400,
      resizeMode: 'cover',
      position: 'absolute',
      top: 0,
   },

   rigthIcon: {
      color: 'white',
      marginRight: 12,
      height: responsiveHeight(2),
      width: responsiveWidth(2),
   },

   leftIcon: {
      color: 'white',
      marginLeft: 12,
      height: responsiveHeight(2),
      width: responsiveWidth(2),
   },

   leftIconGray: {
      color: 'gray',
      marginLeft: 12,
      height: responsiveHeight(2),
      width: responsiveWidth(2),
   },

   errorBorder: {
      borderColor: 'red',
      borderWidth: 1,
   },

   checkbox: {
      width: 20,
      height: 20,
      color: 'gray',
   },
   checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
   },
   checkboxInner: {
      width: 20,
      height: 20,
      borderRadius: 5,
      backgroundColor: 'white',

      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
   },
   modalContent: {
      backgroundColor: '#1D1D1D',
      padding: 20,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
   },

   normalWidth: {
      width: '90%',
   },
   itemWitdh: {
      width: '96%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   commonBackground: {
      backgroundColor: '#1F1B35',
   },
   redBackground: {
      backgroundColor: '#E21238',
   },
   logoImage: {
      width: responsiveWidth(20),
      height: responsiveHeight(10),
      resizeMode: 'contain',
   },
   redvector: {
      width: responsiveWidth(10),
      height: responsiveHeight(10),
      resizeMode: 'contain',
      marginTop: -80,
   },
   paddingGlobal: {
      padding: responsiveHeight(2),
   },

   bannerImage: {
      width: width,
      height:  height * 0.62,
      marginTop: -10,
      resizeMode: 'contain',
   },

   googleIcon: {
      width: 48,
      height: 48,
      resizeMode: 'contain',
   },

   textLogo: {
      width: width * .75,
      height: 175,
      resizeMode: 'contain',
      alignSelf: 'center',
   },
   amico: {
      width: width,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 32,
   },
   
})
