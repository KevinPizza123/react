import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {
}

export const ProductoLista:FC <Props> = () => {
  const navigation = useNavigation();
 return (
   <>
   <View>
    <Text>
        Lista de productos
    </Text>
    <Button
      title='Nuevo'
      onPress={()=>navigation.navigate("ProductoForm" as never)}
    />
   </View>
   </>
 )
}