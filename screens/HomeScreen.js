import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {

  // import the navigation hook 
  const navigation = useNavigation();

  //pulling out the logout function from out useAuth hook
  const { logout } = useAuth();

  return (
    <View>
      <Text>Helooooo this is written in home scren</Text>
      <Button title = "Go to chats." onPress = { () => navigation.navigate('Chats') } />

      <Button title = "Logout." onPress = { logout } />
    </View>
  );
};

export default HomeScreen;
