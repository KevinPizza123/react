import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

interface Linea {
  id: number;
  titulo: string;
  carrera: string;
}

export const ProgramaLista = () => {
  const [datos, setDatos] = useState<Linea[]>([]);
  const nav = useNavigation();
  const fetchData = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/programa/listar');
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
        onPress={() => nav.navigate('ProgramaForm' as never)}
      />
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View className="mb-4 bg-white p-4 border border-gray-300 rounded">
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="w-1/4 text-black font-bold">ID:</Text>
              <Text className="w-3/4 text-black">{item.id}</Text>
            </View>
            <View className="flex flex-row bg-white p-2">
              <Text className="w-1/4 text-black font-bold">Titulo:</Text>
              <Text className="w-3/4 text-black">{item.titulo}</Text>
            </View>
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="w-1/4 text-black font-bold">Carrera:</Text>
              <Text className="w-3/4 text-black">{item.carrera}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
     
    </View>
  );
};
