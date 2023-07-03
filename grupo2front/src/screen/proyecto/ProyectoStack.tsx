import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProyectoLista } from './ProyectoLista';
import { ProyectoForm } from './ProyectoForm';

interface Props {
}

const Stack = createNativeStackNavigator();

export const ProyectoStack:FC <Props> = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="ProyectoLista" component={ProyectoLista} />
      <Stack.Screen name="ProyectoForm" component={ProyectoForm} />
    </Stack.Navigator>
 )
}