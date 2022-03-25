import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import New from './src/New';
import Edit from './src/Edit';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Lista de Produtores" component={Home} />
        <Stack.Screen name="Novo Proprietario" component={New} />
        <Stack.Screen name="Editar Proprietario" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
