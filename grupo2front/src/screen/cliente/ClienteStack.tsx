import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClienteLista } from './ClienteLista';
import { ClienteForm } from './ClienteForm';

interface Props {
}

const Stack = createNativeStackNavigator();

export const ClienteStack:FC <Props> = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="ClienteLista" component={ClienteLista} />
      <Stack.Screen name="ClienteForm" component={ClienteForm} />
    </Stack.Navigator>
 )
}