import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { View, Text, Button } from 'react-native'

interface Props {
}

export const ClienteForm:FC <Props> = () => {

  const navigation = useNavigation();

 return (
   <>
    <View>
    <Text> {/* Text = <p></p> */}
        Formulario de clientes
    </Text>
    <Button 
      title='Regresar a la lista'
      onPress={()=>navigation.navigate("ClienteLista" as never)}
    />
   </View>
   </>
 )
}