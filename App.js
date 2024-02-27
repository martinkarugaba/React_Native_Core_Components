import { useState } from 'react';
import { StatusBar, View } from 'react-native';
import Greet from './components/Greet';

const App = () => {
  return (
    <View style={{ border: '2px solid red' }}>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      <Greet name="John" />
      <Greet name="Doe" />
    </View>
  );
};

export default App;
