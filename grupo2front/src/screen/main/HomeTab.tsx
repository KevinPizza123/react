import { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClienteStack } from '../cliente/ClienteStack';
import { ProductoStack } from '../producto/ProductoStack';
import { LogOut } from './LogOut';
import { LineaStack } from '../linea_investigacion/LineaStack';
import { ActividadStack } from '../actividad/ActividadStack';
import { CarreraStack } from '../carrera/CarreraStack';
import { ProgramaStack } from '../programa/ProgramaStack';
import { ProyectoStack } from '../proyecto/ProyectoStack';

interface Props {
}

const Tab = createBottomTabNavigator();

export const HomeTab: FC<Props> = () => {
  return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Tab.Screen name="LineaStack" component={LineaStack} />
      <Tab.Screen name="ActividadStack" component={ActividadStack} />
      <Tab.Screen name="CarreraStack" component={CarreraStack} />
      <Tab.Screen name="ProgramaStack" component={ProgramaStack} />
      <Tab.Screen name="ProyectoStack" component={ProyectoStack} />
      <Tab.Screen name="LogOut" component={LogOut} />
    </Tab.Navigator>
  )
}