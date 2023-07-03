import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProgramaLista } from './ProgramaLista';
import { ProgramaForm } from './ProgramaForm';


interface Props {
}

const Stack = createNativeStackNavigator();

export const ProgramaStack:FC <Props> = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="ProgramaLista" component={ProgramaLista} />
      <Stack.Screen name="ProgramaForm" component={ProgramaForm} />
    </Stack.Navigator>
 )
}