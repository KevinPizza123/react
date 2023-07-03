import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LineaLista } from './LineaLista';
import { LineaForm } from './LineaForm';

interface Props {
}

const Stack = createNativeStackNavigator();

export const LineaStack:FC <Props> = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="LineaLista" component={LineaLista} />
      <Stack.Screen name="LineaForm" component={LineaForm} />
    </Stack.Navigator>
 )
}