import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

interface Carrera {
  id: number;
  nombre: string;
  descripcion: string;
}

export const CarreraLista = () => {
  const [datos, setDatos] = useState<Carrera[]>([]);
  const nav = useNavigation();

  const fetchData = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/carreras/lista');
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
    <View style={{ padding: 16 }}>
      <Button
        title='Nuevo'
        onPress={() => nav.navigate('CarreraForm' as never)}
      />
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 8, borderWidth: 1, borderColor: 'gray', borderRadius: 8 }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 8 }}>
              <Text style={{ width: '25%', fontWeight: 'bold', color: 'black' }}>ID:</Text>
              <Text style={{ width: '75%', color: 'black' }}>{item.id}</Text>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 8 }}>
              <Text style={{ width: '25%', fontWeight: 'bold', color: 'black' }}>Nombre:</Text>
              <Text style={{ width: '75%', color: 'black' }}>{item.nombre}</Text>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: 'lightgray', padding: 8 }}>
              <Text style={{ width: '25%', fontWeight: 'bold', color: 'black' }}>Descripción:</Text>
              <Text style={{ width: '75%', color: 'black' }}>{item.descripcion}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
