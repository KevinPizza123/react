import { useNavigation } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'

interface Actividad {
  id: number;
  fechaInicio: string;
  fechaFin: string;
}

export const ActividadLista = () => {
  const [datos, setDatos] = useState<Actividad[]>([]);
  const nav = useNavigation();
  const fetchData = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/actividad/listar');
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
        onPress={() => nav.navigate('ActividadForm' as never)}
      />
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View className="mb-4 bg-white p-4 border border-gray-300 rounded">
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="text-black font-bold">ID: {item.id}</Text>
            </View>
            <View className="flex flex-row bg-white-100 p-2">
              <Text className="text-black">Nombre: {item.fechaInicio}</Text>
            </View>
            <View className="flex flex-row bg-gray-100 p-2">
              <Text className="text-black">Carrera: {item.fechaFin}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
     
    </View>

  );
};
