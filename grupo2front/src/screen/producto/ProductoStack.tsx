import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductoLista } from './ProductoLista';
import { ProductoForm } from './ProductoForm';


interface Props {
}

const Stack = createNativeStackNavigator();

export const ProductoStack:FC <Props> = () => {
 return (
    <Stack.Navigator>
      <Stack.Screen name="ProductoLista" component={ProductoLista} />
      <Stack.Screen name="ProductoForm" component={ProductoForm} />
    </Stack.Navigator>
 )
}