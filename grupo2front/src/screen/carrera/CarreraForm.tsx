import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const CarreraForm = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/carreras/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: parseInt(id),
          
          nombre,
          carrera,
          descripcion,
        }),
      });
      const data = await response.json();
      console.log(data); // Puedes hacer algo con la respuesta del servidor, como redireccionar a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ borderWidth: 1, padding: 16 }}>
      <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 8 }}>
        Formulario de Linea de Investigacion
      </Text>
      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={text => setId(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Carrera"
        value={carrera}
        onChangeText={text => setCarrera(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={text => setDescripcion(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};
