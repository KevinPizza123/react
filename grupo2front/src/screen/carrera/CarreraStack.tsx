import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarreraLista } from './CarreraLista';
import { CarreraForm } from './CarreraForm';



interface Props {
}

const Stack = createNativeStackNavigator();

export const CarreraStack:FC <Props> = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="CarreraLista" component={CarreraLista} />
      <Stack.Screen name="CarreraForm" component={CarreraForm} />
    </Stack.Navigator>
 )
}