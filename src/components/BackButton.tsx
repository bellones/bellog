
import { styles } from '@assets/styles';
import { Row } from '@assets/styles/Containers';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

export const BackButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Row className="justify-start items-center flex-row">
      <Pressable onPress={navigation.goBack}>
        <ChevronLeftIcon style={styles.backIcon} />
      </Pressable>
    </Row>
  );
};
