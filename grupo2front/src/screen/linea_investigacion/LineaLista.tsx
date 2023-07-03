import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

interface Linea {
  id: number;
  nombre: string;
  carrera: string;
  estado: string;
  fecha_aprobacion: string;
}

export const LineaLista = () => {
  const [datos, setDatos] = useState<Linea[]>([]);
  const nav = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/linea/listar');
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <View className="p-4">
    <View><Button
        title='Nuevo'
        onPress={() => nav.navigate('LineaForm' as never)}
      />
      </View>
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View className="mb-4 bg-white p-4 border border-gray-300 rounded">
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="text-black font-bold">ID: {item.id}</Text>
            </View>
            <View className="flex flex-row bg-white p-2">
              <Text className="text-black">Nombre: {item.nombre}</Text>
            </View>
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="text-black">Carrera: {item.carrera}</Text>
            </View>
            <View className="flex flex-row bg-white p-2">
              <Text className="text-black">Estado: {item.estado}</Text>
            </View>
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="text-black">Fecha de Aprobación: {item.fecha_aprobacion}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      
    </View>
    
  );
};
