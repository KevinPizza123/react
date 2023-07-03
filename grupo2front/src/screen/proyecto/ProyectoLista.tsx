import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';


interface Proyecto {
  id: number;
  nombre: string;
  justificacion: string;
  antecedentes: string;
}

export const ProyectoLista = () => {
  const [datos, setDatos] = useState<Proyecto[]>([]);
  const nav = useNavigation();
  const fetchData = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/proyecto/listar');
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
      <Button
        title='Nuevo'
        onPress={() => nav.navigate('ProyectoForm' as never)}
      />
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View className="mb-4 border border-gray-300 rounded">
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="w-1/4 text-black font-bold">ID:</Text>
              <Text className="w-3/4 text-black">{item.id}</Text>
            </View>
            <View className="flex flex-row bg-white p-2">
              <Text className="w-1/4 text-black font-bold">Nombre:</Text>
              <Text className="w-3/4 text-black">{item.nombre}</Text>
            </View>
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="w-1/4 text-black font-bold">Justificación:</Text>
              <Text className="w-3/4 text-black">{item.justificacion}</Text>
            </View>
            <View className="flex flex-row bg-white p-2">
              <Text className="w-1/4 text-black font-bold">Antecedentes:</Text>
              <Text className="w-3/4 text-black">{item.antecedentes}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />

    </View>

  );
};
