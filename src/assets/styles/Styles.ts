import { responsiveHeight, responsiveWidth } from '@utils/constants'
import { Dimensions, StyleSheet } from 'react-native'

const {width} = Dimensions.get('window')
export const styles = StyleSheet.create({
   backIcon: {
      width: responsiveWidth(6),
      color: 'white',
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

   overlayImage: {
      width: 180,
      height: 180,
      resizeMode: 'contain',
      position: 'absolute',
      top: 110,
      left: 20,
   },
   overlayImageBB: {
      width: 180,
      height: 180,
      resizeMode: 'contain',
      position: 'absolute',
      top: 110,
      left: 50,
   },

   wrapper: {},
   slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   dot: {
      backgroundColor: 'gray',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
   },
   activeDot: {
      backgroundColor: 'white', // active dot color
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
   loginLogo: {
      width: 180,
      height: 180,
      marginTop: 100,
   },
   slides: {
      width: width,
      height: 300,
      resizeMode: 'contain',
      marginTop: -200,
   },

   progressBar: {
      height: '100%',
      backgroundColor: 'white',
   },
   progressContainer: {
      width: '100%',
      height: 4,
      backgroundColor: '#393939',
      overflow: 'hidden',
      marginTop: 24,
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

   otpTextContainer: {
      color: 'white',
      fontFamily: 'TitilliumWeb-Regular',
      borderWidth: 0,

   },
   otpContainer: {
      borderWidth: 0,
      borderBottomWidth: 1,
   },
   normalWidth: {
      width: '90%',
   }
})
