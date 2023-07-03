import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const ActividadForm = () => {
  const [id, setId] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/actividad/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: parseInt(id),
          fechaInicio,
          fechaFin,
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
        placeholder="Fecha de Inicio"
        value={fechaInicio}
        onChangeText={text => setFechaInicio(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Fecha de Fin"
        value={fechaFin}
        onChangeText={text => setFechaFin(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};
