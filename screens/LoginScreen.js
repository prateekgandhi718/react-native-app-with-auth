import { View, Text, Button } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';


const LoginScreen = () => {
  
  const {signInWithGoogle, loading} = useAuth();

  return (
    <View>
      <Text>{loading ? "Please wait. Breathe in...breathe out..." : "Please login to continue."}</Text>
      <Button title = " login " onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
