
import { styled } from 'nativewind';
import { FlatList, Image, Pressable, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import Animated from 'react-native-reanimated';


export const Background = styled(View);
export const Container = styled(View);
export const SafeContainer = styled(SafeAreaView);
export const Title = styled(Animated.Text);
export const Logo = styled(Animated.Image);
export const Row = styled(View);
export const RingOne = styled(Animated.View);
export const RingTwo = styled(Animated.View);

export const backgroundColor = '#1F1B35';
export const primaryColor = '#E21238';
export const NormalText = styled(Animated.Text);
export const Inputbox = styled(View);
export const InputContainer = styled(View);
export const Input = styled(TextInput);
export const MaskedInput = styled(MaskedTextInput);
export const Button = styled(TouchableOpacity);
export const Avatar = styled(Image);
export const IconButton =  styled(Pressable);
export const TextButton = styled(Pressable);
export const List = styled(FlatList);
export const CheckboxContainer = styled(View);
export const Spacer = styled(View);

