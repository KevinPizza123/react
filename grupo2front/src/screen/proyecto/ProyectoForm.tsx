import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const ProyectoForm = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [justificacion, setJustificacion] = useState('');
  const [antecedentes, setAntecedentes] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://149.56.97.9:8082/api/proyecto/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: parseInt(id),
          nombre,
          justificacion,
          antecedentes,
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
        Formulario de Línea de Investigación
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
        placeholder="Justificación"
        value={justificacion}
        onChangeText={text => setJustificacion(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        placeholder="Antecedentes"
        value={antecedentes}
        onChangeText={text => setAntecedentes(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8, marginBottom: 8 }}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};
