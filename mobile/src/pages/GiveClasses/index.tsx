import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigationTBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigationTBack}>
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
