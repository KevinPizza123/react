import React, { FC, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const LineaForm = () => {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [estado, setEstado] = useState('');
  const [fechaAprobacion, setFechaAprobacion] = useState('');

  const handleSubmit = () => {
    fetch('http://149.56.97.9:8082/api/linea/crear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        nombre,
        carrera,
        estado,
        fecha_aprobacion: fechaAprobacion,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Aquí puedes realizar alguna acción después de la respuesta del servidor
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{ borderWidth: 1 }}>
      <Text style={{ color: 'black' }}>Formulario de Linea de Investigacion</Text>
      <TextInput
        placeholder="ID"
        value={id.toString()}
        onChangeText={text => setId(parseInt(text))}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8 }}
      />
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8 }}
      />
      <TextInput
        placeholder="Carrera"
        value={carrera}
        onChangeText={text => setCarrera(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8 }}
      />
      <TextInput
        placeholder="Estado"
        value={estado}
        onChangeText={text => setEstado(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8 }}
      />
      <TextInput
        placeholder="Fecha de Aprobación"
        value={fechaAprobacion}
        onChangeText={text => setFechaAprobacion(text)}
        style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 8 }}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>

  );
};
