import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActividadLista } from './ActividadLista';
import { ActividadForm } from './ActividadForm';

interface Props {
}

const Stack = createNativeStackNavigator();

export const ActividadStack:FC <Props> = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="ActividadLista" component={ActividadLista} />
      <Stack.Screen name="ActividadForm" component={ActividadForm} />
    </Stack.Navigator>
 )
}